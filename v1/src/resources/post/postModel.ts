import { Schema, model } from "mongoose";
import IPost from "@/resources/post/IPost";

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IPost>("Post", PostSchema);
