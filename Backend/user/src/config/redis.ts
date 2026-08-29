import { createClient } from "redis";

export const connectRedis = async () => {
  const redisUrl = process.env.REDIS_URL;

  if (!redisUrl) {
    throw new Error("REDIS_URL is not defined");
  }

  const redisClient = createClient({
    url: redisUrl,
    socket: {
      reconnectStrategy: false,
      connectTimeout: 10000,
    },
  });

  redisClient.on("error", (error) => {
    console.error("Redis connection error:", error.message);
  });

  await redisClient.connect();
  await redisClient.ping();

  console.log("Redis connected successfully");
  return redisClient;
};