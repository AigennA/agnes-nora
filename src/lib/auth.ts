/*import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "E-posta", type: "email", placeholder: "test@example.com" },
        password: { label: "Şifre", type: "password" },
      },
      async authorize(credentials) {
        const user = { id: 1, name: "Test Kullanıcı", email: "test@example.com" };

        if (
          credentials?.email === "test@example.com" &&
          credentials?.password === "123456"
        ) {
          return user;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt" as const,  // Buraya dikkat
  },
  pages: {
    signIn: "/auth/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
*/