import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config({ path: "../../.env" });

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Live Chat API is running");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});