import amqp, {
  type Channel,
  type ChannelModel,
} from "amqplib";


let connection: ChannelModel | null = null;
let channel: Channel | null = null;

export const connectRabbitMQ = async (): Promise<void> => {
  const rabbitMQUrl = process.env.RABBITMQ_URL;

  if (!rabbitMQUrl) {
    throw new Error("RABBITMQ_URL is not defined in .env");
  }

  try {
    connection = await amqp.connect(rabbitMQUrl);
    channel = await connection.createChannel();

    connection.on("error", (error) => {
      console.error("RabbitMQ connection error:", error);
    });

    connection.on("close", () => {
      console.error("RabbitMQ connection closed");
      connection = null;
      channel = null;
    });

    console.log("RabbitMQ connected successfully");
  } catch (error) {
    console.error("Failed to connect to RabbitMQ:", error);
    throw error;
  }
};

export const getRabbitMQChannel = (): Channel => {
  if (!channel) {
    throw new Error("RabbitMQ channel is not initialized");
  }

  return channel;
};

export const publishToQueue = async (queue: string, message: any)=> {
  if (!channel) {
    throw new Error("RabbitMQ channel is not initialized");
  }
  await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), { persistent: true });
};