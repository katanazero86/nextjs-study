import { IconCommonProps } from '@/types/icon/icon.types';

interface LikeProps extends IconCommonProps {}

export default function Like({ height = 16, width = 16, onClick }: LikeProps) {
  return (
    <svg
      onClick={onClick}
      className="cursor-pointer"
      viewBox="0 0 48 48"
      enableBackground="new 0 0 48 48"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#F44336"
        d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"
      ></path>
    </svg>
  );
}