import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    author: String, 
    title: String,
    detail: String,
    createdAt: Date,
    avatar: String,
  },
  { timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
