import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import activityRouter from "./routes/activityRoutes.js";

dotenv.config();

const app = express();
const port = Number(process.env.PORT ?? 8000);
const mongoUri = process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017/octofit";

app.use(cors());
app.use(express.json());
app.use("/api/activities", activityRouter);

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "octofit-backend" });
});

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Backend listening on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });
