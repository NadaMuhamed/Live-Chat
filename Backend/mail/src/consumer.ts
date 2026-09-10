import amqp from "amqplib";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

export const startSendOtpConsumer = async () => {
    try {
        const connection = await amqp.connect({
            protocol: "amqp",
            hostname: process.env.RABBITMQ_URL || "amqp://guest:guest@localhost:5672",
            port: 5672,
            username: process.env.RABBITMQ_Username || "guest",
            password: process.env.RABBITMQ_Password || "guest",
        });
        
        const channel = await connection.createChannel();
        const queueName = "send-otp";
        await channel.assertQueue(queueName, { durable: true });
        console.log(`Waiting for messages in queue: ${queueName}`);
        channel.consume(queueName, async (msg) => {
            if (msg) {
                const {to, subject, text} = JSON.parse(msg.content.toString());
                const transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port : 587,
                    secure : false,
                    auth : {
                        user : process.env.EMAIL_USER,
                        pass : process.env.EMAIL_PASSWORD
                    }
                });
                await transporter.sendMail({
                    from:"Chat app",
                    to,
                    subject,
                    text
                });
                channel.ack(msg);
            }
        });
    } catch (error) {
        console.error("Error starting OTP consumer:", error);
    }
};