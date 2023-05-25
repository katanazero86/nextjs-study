import { parseDateAgo } from '@/utils/timeago.utils';

interface LastHourInfoProps {
  createdAt: string;
}
export default function DateAgoInfo({ createdAt }: LastHourInfoProps) {
  return <p className="tracking-tight text-xs text-gray-600 py-1">{parseDateAgo(createdAt)}</p>;
}
