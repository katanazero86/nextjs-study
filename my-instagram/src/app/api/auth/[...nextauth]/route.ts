import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// google aAuth 관련 키 발급 받아야함.
// 요청 URL 및 리다이엑션 URL 설정해주기
// http://localhost:3000
// http://localhost:3000/api/auth/callback/google

export const authOptions = {
  pages: {
    signIn: '/login',
  },
  providers: [
    GoogleProvider({
      clientId: '281428094341-5shgecefq58ssgfu5drt0jfvv9stoou0.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };