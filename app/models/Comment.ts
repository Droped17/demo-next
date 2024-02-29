import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI as string);
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