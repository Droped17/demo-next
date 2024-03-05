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
          placeholder: "password"
        },
      },
      // create authorize
      async authorize(credentials, req) {
        try {
          if (!credentials) return null;
          // OK found
          const foundUser = await User.findOne({
            username: credentials?.username,
          }).exec();
          console.log(`Found User: `, foundUser);

          if (foundUser) {
            console.log("User Exits");
            const match = await bcrypt.compare(
              credentials?.password as string,
              foundUser.password
            );

            if (match) {
              console.log("Good Pass");
              delete foundUser.password;
              foundUser["role"] = "Unverified Email";
              return foundUser;
            }
          }
        } catch (error) {
          console.log(error);
        }

        console.log(`CREDENTIAL:===>`,{ credentials });
        return null;
      },
    }),
  ],
  // adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) (token as any).id = (user as any).id;
      return token;
    },
    async session({ session, token}) {
      // console.log(session);
      if (session.user) (session.user as any).id = (token as any).id;
      return session;
    },
  },
};
