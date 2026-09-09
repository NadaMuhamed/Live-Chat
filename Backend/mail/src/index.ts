import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

const app = express();
const PORT = Number(process.env.PORT2) || 3002;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Live Chat API is running");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});