import express from "express";
import dotenv from "dotenv";
import { startSendOtpConsumer } from "./consumer.js";

dotenv.config({ path: "../../.env" });

const app = express();
const PORT = Number(process.env.PORT2) || 3002;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Mail Service is running");
});

startSendOtpConsumer();

app.listen(PORT, () => {
    console.log(`Mail Service is running on port ${PORT}`);
});