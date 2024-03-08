import mongoose, { Schema } from "mongoose";

console.log(process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    username: String,
    password: String,
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User",userSchema);

export default User;