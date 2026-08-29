import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

const { connectDB } = await import("./config/db.js");
const { connectRedis } = await import("./config/redis.js");

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Live Chat API is running");
});

const startServer = async (): Promise<void> => {
  try {
    await connectDB();
    await connectRedis();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();