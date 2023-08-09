import NextAuth from "next-auth/next";
import type { NextAuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from "next-auth/providers/google";

// declare global {
//   namespace NodeJS {
//     interface ProcessEnv {
//       GITHUB_ID: string;
//       GITHUB_SECRET: string;
//     }
//   }
// }

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ]
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };