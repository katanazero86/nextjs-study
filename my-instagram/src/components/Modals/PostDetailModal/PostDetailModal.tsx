import { MouseEvent } from 'react';
import ModalContainer from '@/components/Modals/ModalContainer/ModalContainer';
import Like from '@/components/Icons/Like/Like';
import Bookmark from '@/components/Icons/Bookmark/Bookmark';
import { PostsModel } from '@/models/posts';
import DisLike from '@/components/Icons/DisLike/DisLike';
import { parseDateAgo } from '@/utils/timeago.utils';

interface PostDetailModalProps {
  isOpen: boolean;
  onClose: (e: MouseEvent) => void;
  post: PostsModel;
}

export default function PostDetailModal({ isOpen, onClose, post }: PostDetailModalProps) {
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
          <div className="divider m-0 w-full h-0"></div>
          <p className="mb-4 font-normal text-gray-700 tracking-tight px-2 py-1 w-full">{post.content}</p>
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
            {post.isLike ? <Like width={20} height={20} /> : <DisLike width={20} height={20} />}
            <Bookmark width={20} height={20} />
          </div>
          <div className="flex flex-col justify-between px-2 pb-2">
            <p className="grow">{post.likeCount ?? 0} like</p>
            <p className="tracking-tight text-xs text-gray-600 mt-2">{parseDateAgo(post._createdAt)}</p>
          </div>
          <div className="divider m-0 w-full"></div>
          <div className="flex items-center pt-2 pb-4 w-full">
            <input type="text" placeholder="Add a comment..." className="input input-sm w-full focus:outline-0" />
            <button className="btn btn-ghost btn-sm hover:bg-transparent text-indigo-500">댓글 달기</button>
          </div>
        </div>
      </>
    </ModalContainer>
  );
}
