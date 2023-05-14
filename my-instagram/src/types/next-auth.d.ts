import { DefaultSession } from 'next-auth';

// custom types

declare module 'next-auth' {
  interface Session {
    user: {
      userName: string;
    } & DefaultSession['user'];
  }
}
