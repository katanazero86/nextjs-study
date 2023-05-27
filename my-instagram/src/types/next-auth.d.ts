import { DefaultSession } from 'next-auth';

// custom types

declare module 'next-auth' {
  interface Session {
    user: {
      userName: string;
      id: string;
    } & DefaultSession['user'];
  }
}
