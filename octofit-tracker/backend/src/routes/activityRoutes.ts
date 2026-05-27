import { Router } from "express";
import Activity from "../models/activityModel.js";

const router = Router();

router.get("/", async (_req, res) => {
  const activities = await Activity.find().limit(20);
  res.json(activities);
});

router.post("/", async (req, res) => {
  const activity = new Activity(req.body);
  const savedActivity = await activity.save();
  res.status(201).json(savedActivity);
});

export default router;
