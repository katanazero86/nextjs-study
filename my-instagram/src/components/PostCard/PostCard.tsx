'use client';

import { useState, MouseEvent } from 'react';
import Like from '@/components/Icons/Like/Like';
import DisLike from '@/components/Icons/DisLike/DisLike';
import Bookmark from '@/components/Icons/Bookmark/Bookmark';
import UnBookmark from '@/components/Icons/UnBookmark/UnBookmark';
import CardImg from '@/components/PostCard/CardImg/CardImg';
import CardActions from '@/components/PostCard/CardActions/CardActions';
import CardBody from '@/components/PostCard/CardBody/CardBody';
import PostDetailModal from '@/components/Modals/PostDetailModal/PostDetailModal';

interface CardProps {
  author?: string;
  content?: string;
  imgUrl?: string;
  likes?: any[];
  onClick?: () => void;
}

export default function PostCard({ onClick }: CardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardImgClick = () => {
    openModal();
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = (e: MouseEvent) => {
    if (e.target === e.currentTarget) setIsOpen(false);
  };

  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl my-4">
        <CardImg imgUrl="/imgs/test-shoes.jpg" onClick={handleCardImgClick} />
        <CardBody>
          <div className="flex items-center justify-between">
            {/*TODO: 좋아요, 즐겨찾기 toggle*/}
            <Like width={24} height={24} />
            {/*<DisLike width={24} height={24} />*/}
            {/*<Bookmark width={24} height={24} />*/}
            <UnBookmark width={24} height={24} />
          </div>
          <p>0 like</p>
          <p className="font-semibold">{`{userId}`}</p>
          <p className="truncate tracking-tight">
            If a dog chews shoes whose shoes does he chooseasdasdasdasdasdasdasdasd?
          </p>
          <div>
            <p className="truncate tracking-tight text-sm">yurang_official 나는야 댓글!</p>
            <button className="no-underline btn btn-sm btn-link text-sm tracking-tight inline-block p-0 text-left">
              View All 2 comments
            </button>
          </div>
          <p className="tracking-tight text-xs text-gray-600">23 HOURS AGO</p>
        </CardBody>
        <div className="divider m-0"></div>
        <CardActions>
          <input type="text" placeholder="Add a comment..." className="input input-sm w-full focus:outline-0" />
          <button className="btn btn-ghost btn-sm hover:bg-transparent text-indigo-500">댓글 달기</button>
        </CardActions>
      </div>
      <PostDetailModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
