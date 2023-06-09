import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { sanityClient } from '@/sanity';

// google oAuth 관련 키 발급 받아야함.
// 요청 URL 및 리다이엑션 URL 설정해주기
// http://localhost:3000
// http://localhost:3000/api/auth/callback/google

// session 의 타입을 커스텀 해줘야함.
// https://next-auth.js.org/getting-started/typescript

export const authOptions: NextAuthOptions = {
  callbacks: {
    async signIn(context) {
      const { user } = context;

      try {
        const userName = user.email!.split('@')[0];

        await sanityClient.sanityUser.createUser({
          email: user.email ?? '',
          userName,
          name: user.name ?? '',
          userImage: user.image ?? '',
          _type: 'user',
          _id: user.id,
        });
      } catch (err) {
        console.error(err);
      }

      return true;
    },
    async session({ session, token }) {
      try {
        const user = session?.user;
        const userName = user.email?.split('@')[0] || '';

        if (user) {
          session.user = {
            ...user,
            userName,
            id: token.id as string,
          };
        }
      } catch (err) {
        console.error(err);
      }

      return session;
    },
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID!,
      clientSecret: process.env.GOOGLE_OAUTH_SECRET!,
    }),
  ],
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
