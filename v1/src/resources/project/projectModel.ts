import { bool, string } from "joi";
import { Schema, model } from "mongoose";
import IProject from "./IProject";

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    inProgress: {
      type: Boolean,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    techstack: {
      type: Array<string>,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IProject>("Project", ProjectSchema);
