import { format } from 'timeago.js';
export const parseDateAgo = (date: string) => {
  return format(date);
};
