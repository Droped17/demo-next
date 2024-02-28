import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/models/Users";
import bcrypt from "bcrypt";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,

      profile(profile){
        console.log(`Profile Github: `,profile)
        let userRole = "Github User"
        if (profile.email === "droped17@gmail.com") {
          userRole = "admin"
        }

        console.log(`USER ROLE======> `,userRole);

        return {
          ...profile,
          role: userRole
        }
      }
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "your-cool-name",
        },
        password: {
          label: "Password:",
          type: "password",
        },
      },

      // async authorize(credentials){
      //     const user = {id: "42", name: "John",password: "nextauth"}
      //     if (credentials?.username === user.name && credentials?.password === user.password) {
      //         return user;
      //     } else {
      //         return null;
      //     }
      // }

      // #######################################

      // create authorize
      async authorize(credentials, req) {
        try {
          // OK found
          const foundUser = await User.findOne({
            username: credentials?.username,
          })
          .exec();
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
              return foundUser;
            }
          }
        } catch (error) {
          console.log(error);
        }

        console.log({ credentials });
        return null;
      },

      //   // JWT
      //   // const res = await fetch("http://localhost:3000/api/auth/signin", {
      //   //   method: "POST",
      //   //   headers: {
      //   //     "Content-Type": "application/json",
      //   //   },
      //   //   body: JSON.stringify({
      //   //     username: credentials?.username,
      //   //     password: credentials?.password,
      //   //   }),
      //   // });
      //   // const user = await res.json();
      //   // console.log({ user });

      //   // // mock user
      //   // // const user = {id: "1", name: "admin",password: "123456"}

      //   // // Check Session
      //   // if (user) {
      //   //   return user;
      //   // } else {
      //   //   return null;
      //   // }
      //   console.log({ credentials });
      //   return null;
      //  },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) (token as any).role = (user as any).role;
      return token;
    },
    async session({ session, token, user }) {
      (session as any).accessToken = token.accessToken;
      return session;
    },
  },
};
