import { IconCommonProps } from '@/types/icon/icon.types';

interface BookmarkProps extends IconCommonProps {}
export default function Bookmark({ width = 16, height = 16, onClick }: BookmarkProps) {
  return (
    <svg
      onClick={onClick}
      className="cursor-pointer"
      stroke="#000"
      fill="#000"
      strokeWidth="0"
      viewBox="0 0 384 512"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"></path>
    </svg>
  );
}
