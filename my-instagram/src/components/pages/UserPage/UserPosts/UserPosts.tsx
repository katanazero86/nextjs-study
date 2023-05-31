'use client';

import { MouseEvent, useState } from 'react';
import useSWR from 'swr';
import Tabs from '@/components/atoms/Tabs/Tabs';
import TabItem from '@/components/atoms/Tabs/TabItem/TabItem';
import ModalPortal from '@/components/Modals/ModalPortal';
import PostDetailModal from '@/components/Modals/PostDetailModal/PostDetailModal';
import { PostsModel } from '@/models/posts';
import { urlFor } from '@/sanity';
import usePosts from '@/hooks/usePosts';

interface PostImageProps {
  post: PostsModel;
  apiUrl: string;
}

interface UserPostsProps {
  userName: string;
}

const PostImage = ({ post, apiUrl }: PostImageProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = (e: MouseEvent) => {
    if (e.target === e.currentTarget) setIsOpen(false);
  };

  return (
    <>
      <div className="card bg-base-100 shadow-xl cursor-pointer">
        <figure className="rounded" onClick={openModal}>
          <img className="object-cover w-full" src={urlFor(post.image)} alt="image" />
        </figure>
      </div>
      {isOpen && (
        <ModalPortal>
          <PostDetailModal isOpen={isOpen} onClose={closeModal} post={post} apiUrl={apiUrl} />
        </ModalPortal>
      )}
    </>
  );
};

const TAB_ITEMS = ['posts', 'saved', 'liked'];
export default function UserPosts({ userName }: UserPostsProps) {
  const [tab, setTab] = useState('posts');
  const { posts, error } = usePosts(`/api/user/${userName}/${tab}`);

  return (
    <div className="mt-2">
      <Tabs>
        {TAB_ITEMS.map((item) => (
          <TabItem wFull key={item} isActive={tab === item.toLowerCase()} value={item} setTab={setTab}>
            {item.toUpperCase()}
          </TabItem>
        ))}
      </Tabs>
      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {posts !== undefined &&
          posts.length > 0 &&
          posts.map((post: any) => <PostImage post={post} key={post._id} apiUrl={`/api/user/${userName}/${tab}`} />)}
      </div>
    </div>
  );
}
