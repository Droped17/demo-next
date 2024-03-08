// require('dotenv').config();

// import mongoose from "mongoose";

// const MONGODB_URI = 'mongodb+srv://admin:Ean3vPRCIdNrm0X6@cluster0.inamacw.mongodb.net/AppDB';

// const connect = async () => {
//   if (mongoose.connections[0].readyState) return;

//   try {
//     await mongoose.connect(MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Mongo Connection successfully established.");
//   } catch (error) {
//     throw new Error("Error connecting to Mongoose");
//   }
// };

// export default connect;

// require('dotenv').config();
// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error('MongoDB URI is not defined in the environment variables.');
// }

// const connect = async () => {
//   try {
//     await mongoose.connect(MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Mongo Connection successfully established.');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//     throw new Error('Error connecting to MongoDB');
//   }
// };

// export default connect;
