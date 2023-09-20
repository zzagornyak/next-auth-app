import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    // GitHubProvider({
    //   clientId: process.env.GITHUB_CLIENT_ID as string,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "django" },
        password: { label: "Password", type: "password", placeholder: "supersecret" },
      },
      async authorize(credentials) {
        const user = { id: "1", name: "django", password: "password" };
        if (credentials?.username === user.name && credentials.password === user.password) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ]
};