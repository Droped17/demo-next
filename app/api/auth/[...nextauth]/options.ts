import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/models/Users";
import bcrypt from "bcrypt";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../clientPromise";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,

      profile(profile) {
        console.log(`Profile Github: `, profile);
        let userRole = "Github User";
        if (profile.email === "droped17@gmail.com") {
          userRole = "admin";
        }

        console.log(`USER ROLE======> `, userRole);

        return {
          ...profile,
          role: userRole,
        };
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "password",
        },
      },
      // create authorize
      async authorize(credentials, req) {
        // if (!credentials) return null;
        // Connect to MongoDB already
        // OK found
        const foundUser = await User.findOne({
          username: credentials?.username,
        }).exec();

        if (!foundUser) {
          throw new Error("Not Found User");
        }

        const match = await bcrypt.compare(
          credentials?.password as string,
          foundUser.password
        );

        return {
          username: foundUser.username.toString(),
          ...foundUser,
        };

        // if (match) {
        //   return {
        //     id: foundUser._id.toString(),
        //     ...foundUser,
        //   };
        // }

        // if (match) {
        //   // console.log("Password Match");
        //   // console.log(`Found User:====> `,foundUser);
        //   // delete foundUser.password;
        //   // foundUser["role"] = "Unverified Email";
        //   // return foundUser;
        // }

      },
      // console.log(`CREDENTIAL:===>`,{ credentials });
    }),
  ],
  // adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) (token as any).id = (user as any).id;
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     // console.log(session);
  //     if (session.user) (session.user as any).id = (token as any).id;
  //     return session;
  //   },
  // },
};
