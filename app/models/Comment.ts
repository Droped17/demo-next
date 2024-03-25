import mongoose, { Schema } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined in the environment variables.');
}

mongoose.connect(MONGODB_URI);
mongoose.Promise = global.Promise;

const commentSchema = new Schema(
  {
    id: Number,
    postId: String,
    name: String,
    createdAt: String,
    title: String,
    avatar: String
  },
  { timestamps: true }
);

const Comments = mongoose.models.Comments || mongoose.model("Comments",commentSchema);

export default Comments;