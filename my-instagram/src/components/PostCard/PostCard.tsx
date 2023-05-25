'use client';

import { useState, MouseEvent } from 'react';
import Like from '@/components/atoms/Icons/Like/Like';
import DisLike from '@/components/atoms/Icons/DisLike/DisLike';
import Bookmark from '@/components/atoms/Icons/Bookmark/Bookmark';
import UnBookmark from '@/components/atoms/Icons/UnBookmark/UnBookmark';
import CardImg from '@/components/PostCard/CardImg/CardImg';
import CardActions from '@/components/PostCard/CardActions/CardActions';
import CardBody from '@/components/PostCard/CardBody/CardBody';
import PostDetailModal from '@/components/Modals/PostDetailModal/PostDetailModal';
import { parseDateAgo } from '@/utils/timeago.utils';
import { PostsModel } from '@/models/posts';
import ModalPortal from '@/components/Modals/ModalPortal';
import TransparentButton from '@/components/atoms/Buttons/TransparentButton/TransparentButton';
import { Divider } from '@/components/atoms/Divider/Divider';

interface CardProps extends PostsModel {}

export default function PostCard(props: CardProps) {
  const { author, likeCount, isLike, commentCount, comments, image, _createdAt } = props;
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
        <CardImg imgUrl={image} onClick={handleCardImgClick} />
        <CardBody>
          <div className="flex items-center justify-between">
            {/*TODO: 좋아요, 즐겨찾기 toggle*/}
            {isLike ? <Like width={24} height={24} /> : <DisLike width={24} height={24} />}
            {/*<Bookmark width={24} height={24} />*/}
            <UnBookmark width={24} height={24} />
          </div>
          <p>{likeCount ?? 0} like</p>
          <p className="font-semibold">{author.userName}</p>
          <p className="truncate tracking-tight">{}</p>
          {commentCount !== undefined && commentCount > 0 && (
            <div>
              <p className="truncate tracking-tight text-sm">
                {comments![0].author.userName} {comments![0].comment}
              </p>
              <button className="no-underline btn btn-sm btn-link text-sm tracking-tight inline-block p-0 text-left">
                View All {commentCount} comments
              </button>
            </div>
          )}

          <p className="tracking-tight text-xs text-gray-600">{parseDateAgo(_createdAt)}</p>
        </CardBody>
        <Divider />
        <CardActions>
          <input type="text" placeholder="Add a comment..." className="input input-sm w-full focus:outline-0" />
          <TransparentButton onClick={() => alert('준비중')}>댓글 달기</TransparentButton>
        </CardActions>
      </div>
      {isOpen && (
        <ModalPortal>
          <PostDetailModal isOpen={isOpen} onClose={closeModal} post={{ ...props }} />
        </ModalPortal>
      )}
    </>
  );
}
