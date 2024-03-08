require('dotenv').config();

import mongoose from "mongoose";

const MONGODB_URI = 'mongodb+srv://admin:Ean3vPRCIdNrm0X6@cluster0.inamacw.mongodb.net/AppDB';

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo Connection successfully established.");
  } catch (error) {
    throw new Error("Error connecting to Mongoose");
  }
};

export default connect;