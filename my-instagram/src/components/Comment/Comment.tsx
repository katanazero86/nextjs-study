import { ChangeEvent, useState } from 'react';
import BasicInput from '@/components/atoms/Inputs/BasicInput/BasicInput';
import TransparentButton from '@/components/atoms/Buttons/TransparentButton/TransparentButton';
import usePosts from '@/hooks/usePosts';
import { PostsModel } from '@/models/posts';
import { useSession } from 'next-auth/react';

interface CommentProps {
  post: PostsModel;
}

export default function Comment({ post }: CommentProps) {
  const { data: session } = useSession();
  const targetUser = session?.user;

  const { createComment } = usePosts();
  const [comment, setComment] = useState('');
  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleCreateCommentClick = () => {
    createComment(post, comment, targetUser);
    setComment('');
  };

  return (
    <>
      <BasicInput block size="sm" placeholder="Add a comment..." value={comment} onChange={handleCommentChange} />
      <TransparentButton onClick={handleCreateCommentClick} disabled={!comment}>
        댓글 달기
      </TransparentButton>
    </>
  );
}
