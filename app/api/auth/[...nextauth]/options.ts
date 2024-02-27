import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
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

      // create authorize
      async authorize(credentials, req) {
        // JWT
        // const res = await fetch("http://localhost:3000/api/auth/signin", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     username: credentials?.username,
        //     password: credentials?.password,
        //   }),
        // });
        // const user = await res.json();
        // console.log({ user });

        // // mock user
        // // const user = {id: "1", name: "admin",password: "123456"}

        // // Check Session
        // if (user) {
        //   return user;
        // } else {
        //   return null;
        // }
        console.log({credentials});
        return null;
      },
    }),
  ],

  // callbacks: {
  //   async jwt({ token, account }) {
  //     if (account) {
  //       token.accessToken = account.access_token;
  //     }
  //     return token;
  //   },
  //   async session({ session, token, user }) {
  //     (session as any).accessToken = token.accessToken;
  //     return session;
  //   },
  // },
};
