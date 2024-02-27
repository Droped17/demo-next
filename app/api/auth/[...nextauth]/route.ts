import NextAuth from "next-auth/next";
import { options } from "./options";
import { NextApiRequest, NextApiResponse } from "next";

const handler = NextAuth(options);
export {handler as GET, handler as POST};

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//     try {
//       const { method } = req;
  
//       // NextAuth handles GET requests for authentication redirects and sessions
//       if (method === "GET") {
//         return await NextAuth(req, res, options);
//       }
  
//       // NextAuth handles POST requests for authentication callbacks
//       if (method === "POST") {
//         return await NextAuth(req, res, options);
//       }
  
//       // Handle other HTTP methods if needed
//       res.setHeader("Allow", ["GET", "POST"]);
//       res.status(405).end("Method Not Allowed");
//     } catch (error) {
//       console.error("Error handling NextAuth request:", error);
//       res.status(500).end("Internal Server Error");
//     }
//   };

// export const GET = (req: NextApiRequest, res: NextApiResponse) => handler(req, res);
// export const POST = (req: NextApiRequest, res: NextApiResponse) => handler(req, res);