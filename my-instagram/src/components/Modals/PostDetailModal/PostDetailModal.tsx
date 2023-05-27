import { MouseEvent } from 'react';
import ModalContainer from '@/components/Modals/ModalContainer/ModalContainer';
import Like from '@/components/atoms/Icons/Like/Like';
import Bookmark from '@/components/atoms/Icons/Bookmark/Bookmark';
import DisLike from '@/components/atoms/Icons/DisLike/DisLike';
import Divider from '@/components/atoms/Divider/Divider';
import DateAgoInfo from '@/components/atoms/DateAgoInfo/DateAgoInfo';
import Comment from '@/components/Comment/Comment';
import { PostsModel } from '@/models/posts';
import { useSWRConfig } from 'swr';

interface PostDetailModalProps {
  isOpen: boolean;
  onClose: (e: MouseEvent) => void;
  post: PostsModel;
}

export default function PostDetailModal({ isOpen, onClose, post }: PostDetailModalProps) {
  const { mutate } = useSWRConfig();
  const toggleLike = (isLike: boolean) => {
    if (isLike) {
      fetch('api/posts', {
        method: 'PUT',
        body: JSON.stringify({ id: post._id, like: isLike }),
      }).then(() => mutate('/api/posts'));
    } else {
      fetch('api/posts', {
        method: 'PUT',
        body: JSON.stringify({ id: post._id, like: isLike }),
      }).then(() => mutate('/api/posts'));
    }
  };

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <>
        <div className="flex flex-wrap items-center">
          <img className="object-cover w-full max-h-96" src={post.image} alt="" />
          <div className="flex flex-row items-center min-w-0 px-2 py-4 w-full">
            <div className="avatar mx-1.5 cursor-pointer">
              <div className="w-10 rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-2">
                <img src={post.author.userImage} alt="user-img" />
              </div>
            </div>
            <p className="pl-3 font-semibold truncate tracking-tight">{post.author.userName}</p>
          </div>
          <Divider />
          <p className="font-normal text-gray-700 tracking-tight p-2 w-full">{post.content}</p>
          <div className="flex items-center px-2 mb-4 min-w-0">
            {post.comments !== undefined &&
              post.comments !== null &&
              post.comments.length > 0 &&
              post.comments.map((comment, index) => (
                <div className="flex items-center w-full" key={index}>
                  <div className="avatar mx-1.5 cursor-pointer">
                    <div className="w-10 rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={comment.author.userImage} alt="user-img" />
                    </div>
                  </div>
                  <p className="pl-3 tracking-tight font-semibold">{comment.author.userName}</p>
                  <p className="pl-3 tracking-tight truncate">{comment.comment}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center justify-between px-2 w-full">
            {post.isLike ? (
              <Like width={22} height={22} onClick={() => toggleLike(false)} />
            ) : (
              <DisLike width={22} height={22} onClick={() => toggleLike(true)} />
            )}
            <Bookmark width={22} height={22} />
          </div>
          <div className="flex flex-col justify-between px-2 pb-2">
            <p className="grow">{post.likeCount ?? 0} like</p>
            <DateAgoInfo createdAt={post._createdAt} />
          </div>
          <Divider />
          <div className="flex items-center w-full">
            <Comment />
          </div>
        </div>
      </>
    </ModalContainer>
  );
}
