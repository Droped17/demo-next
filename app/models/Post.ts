import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

const postSchema = new Schema(
  {
    title: String,
    author: String, // Reference to the user who created the post
    createdAt: Date,
    avatar: String,
    comments: [
      // Array of comment objects
      {
        _id: String,
        content: String,
        author: String, // Reference to the user who posted the comment
        createdAt: Date,
      },
    ],
  },

  // {
  //   id: Number,
  //   name: String,
  //   createdAt: String,
  //   title: String,
  //   avatar: String,
  //   comments: String
  // },

  { timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
