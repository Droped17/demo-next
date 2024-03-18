// nextauth-config.ts
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";
import User from "@/app/models/Users";

const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,

      profile(profile) {
        console.log(`Profile Github: `, profile);
        let userRole = "Github User";
        console.log(`USER ROLE======> `, userRole);

        return {
          ...profile,
          role: userRole,
        };
      },
    }),
    CredentialsProvider({
      id: "credentials",
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
              console.log(`CREDENTIAL:===>`, { credentials });
              return {
                id: foundUser.id,
                name: foundUser.username,
              };
              // return foundUser;
            }
          }
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async redirect({url, baseUrl}) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  session: {
    strategy: "jwt",
  },
};

export default authOptions;
