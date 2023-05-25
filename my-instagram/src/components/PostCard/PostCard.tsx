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
import ModalPortal from '@/components/Modals/ModalPortal';
import Divider from '@/components/atoms/Divider/Divider';
import DateAgoInfo from '@/components/atoms/DateAgoInfo/DateAgoInfo';
import Comment from '@/components/Comment/Comment';
import { PostsModel } from '@/models/posts';
import LinkButton from '@/components/atoms/Buttons/LinkButton/LinkButton';

interface CardProps extends PostsModel {}

export default function PostCard(props: CardProps) {
  const { author, likeCount, isLike, commentCount, comments, image, content, _createdAt } = props;
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
          <p className="truncate tracking-tight">{content}</p>
          {commentCount !== undefined && commentCount > 0 && (
            <div>
              <p className="truncate tracking-tight text-sm">
                {comments![0].author.userName} {comments![0].comment}
              </p>
              <LinkButton size="sm" onClick={() => alert('준비중')}>
                View All {commentCount} comments
              </LinkButton>
            </div>
          )}

          <DateAgoInfo createdAt={_createdAt} />
        </CardBody>
        <Divider />
        <CardActions>
          <Comment />
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
