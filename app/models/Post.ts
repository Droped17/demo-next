import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

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
