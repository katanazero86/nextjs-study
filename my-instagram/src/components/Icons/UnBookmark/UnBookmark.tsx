import { IconCommonProps } from '@/types/icon/icon.types';

interface UnBookmarkProps extends IconCommonProps {}
export default function UnBookmark({ width = 16, height = 16, onClick }: UnBookmarkProps) {
  return (
    <svg
      onClick={onClick}
      className="cursor-pointer"
      fill="#000"
      viewBox="0 0 384 512"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path>
    </svg>
  );
}
