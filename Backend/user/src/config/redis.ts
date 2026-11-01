
import { createClient } from "redis";

export const connectRedis = async () => {
  const redisUrl = process.env.REDIS_URL;

  // Check Redis URL
  if (!redisUrl) {
    throw new Error("REDIS_URL is not defined");
  }

  // Create Redis Client
  const redisClient = createClient({
    url: redisUrl,
    socket: {
      connectTimeout: 10000,

      // Automatic Reconnection Strategy
      reconnectStrategy: (retries) => {
        const delay = Math.min((retries + 1) * 1000, 5000);

        console.log(
          `Redis reconnecting... Attempt ${retries + 1}`
        );

        return delay;
      },
    },
  });

  // Error Event
  redisClient.on("error", (error) => {
    console.error("Redis connection error:", error.message);
  });

  // Connect Event
  redisClient.on("connect", () => {
    console.log("Connecting to Redis...");
  });

  // Ready Event
  redisClient.on("ready", () => {
    console.log("Redis is ready");
  });

  // Reconnecting Event
  redisClient.on("reconnecting", () => {
    console.log("Redis reconnecting...");
  });

  // End Event
  redisClient.on("end", () => {
    console.log("Redis connection closed");
  });

  try {
    // Connect to Redis
    await redisClient.connect();

    // Test Connection
    await redisClient.ping();

    console.log("Redis connected successfully");

    return redisClient;

  } catch (error) {
    console.error("Failed to connect to Redis:", error);
    throw error;
  }
};

export default connectRedis;
