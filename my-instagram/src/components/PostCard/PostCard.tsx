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
import LinkButton from '@/components/atoms/Buttons/LinkButton/LinkButton';
import { PostsModel } from '@/models/posts';
import usePosts from '@/hooks/usePosts';

interface CardProps extends PostsModel {
  imgUrl: string;
}

export default function PostCard(props: CardProps) {
  const { updateLike, updateBookmark } = usePosts();

  const { author, likeCount, isLike, isBookmark, commentCount, comments, content, _createdAt, imgUrl } = props;
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
  const toggleLike = (isLike: boolean) => {
    updateLike(props, isLike);
  };

  const toggleBookmark = (isBookmark: boolean) => {
    updateBookmark(props, isBookmark);
  };

  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl my-4">
        <CardImg imgUrl={imgUrl} onClick={handleCardImgClick} />
        <CardBody>
          <div className="flex items-center justify-between">
            {isLike ? (
              <Like width={22} height={22} onClick={() => toggleLike(false)} />
            ) : (
              <DisLike width={22} height={22} onClick={() => toggleLike(true)} />
            )}
            {isBookmark ? (
              <Bookmark width={22} height={22} onClick={() => toggleBookmark(false)} />
            ) : (
              <UnBookmark width={22} height={22} onClick={() => toggleBookmark(true)} />
            )}
          </div>
          <p>{likeCount ?? 0} like</p>
          <p className="font-semibold">{author.userName}</p>
          <p className="truncate tracking-tight">{content}</p>
          {commentCount !== undefined && commentCount > 0 && (
            <div>
              <LinkButton size="sm" onClick={openModal}>
                View All {commentCount} comments
              </LinkButton>
            </div>
          )}

          <DateAgoInfo createdAt={_createdAt} />
        </CardBody>
        <Divider />
        <CardActions>
          <Comment post={{ ...props }} />
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
