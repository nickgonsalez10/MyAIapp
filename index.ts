import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 3000;
const apiKey = "1234"

dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}  )