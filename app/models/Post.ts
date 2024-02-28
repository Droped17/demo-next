import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

const postSchema = new Schema(
  {
    username: String,
    password: String,
  },
  { timestamps: true }
);

const User = mongoose.models.Post || mongoose.model("Post",postSchema);

export default User;