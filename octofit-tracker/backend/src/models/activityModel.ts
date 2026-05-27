import { Schema, model } from "mongoose";

const activitySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  durationMinutes: { type: Number, required: true },
  date: { type: Date, default: () => new Date() },
});

const Activity = model("Activity", activitySchema);
export default Activity;
