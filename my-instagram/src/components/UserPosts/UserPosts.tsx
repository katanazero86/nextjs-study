'use client';

import { MouseEvent, useState } from 'react';
import useSWR from 'swr';
import Tabs from '@/components/Tabs/Tabs';
import TabItem from '@/components/Tabs/TabItem/TabItem';
import { urlFor } from '@/sanity';
import ModalPortal from '@/components/Modals/ModalPortal';
import PostDetailModal from '@/components/Modals/PostDetailModal/PostDetailModal';
import { PostsModel } from '@/models/posts';

interface PostImageProps {
  post: PostsModel;
}

interface UserPostsProps {
  userName: string;
}

const PostImage = ({ post }: PostImageProps) => {
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
          <img src={urlFor(post.image)} alt="Shoes" />
        </figure>
      </div>
      {isOpen && (
        <ModalPortal>
          <PostDetailModal isOpen={isOpen} onClose={closeModal} post={{ ...post, image: urlFor(post.image) }} />
        </ModalPortal>
      )}
    </>
  );
};

const TAB_ITEMS = ['posts', 'saved', 'liked'];
export default function UserPosts({ userName }: UserPostsProps) {
  const [tab, setTab] = useState('posts');
  const { data, error } = useSWR(`/api/user/${userName}/${tab}`);

  return (
    <>
      <Tabs>
        {TAB_ITEMS.map((item) => (
          <TabItem wFull key={item} isActive={tab === item.toLowerCase()} value={item} setTab={setTab}>
            {item.toUpperCase()}
          </TabItem>
        ))}
      </Tabs>
      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {data !== undefined && data.length > 0 && data.map((d: any) => <PostImage post={d} key={d._id} />)}
      </div>
    </>
  );
}
