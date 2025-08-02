import NextAuth, { DefaultSession, DefaultJWT } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string;
      email?: string;
      image?: string;
    } & DefaultSession["user"];
    accessToken?: string;
    idToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    // Añade las propiedades personalizadas del token aquí
    accessToken?: string;
    idToken?: string;
  }
}