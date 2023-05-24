'use client';

import { useState } from 'react';
import useSWR from 'swr';
import Tabs from '@/components/Tabs/Tabs';
import TabItem from '@/components/Tabs/TabItem/TabItem';
import { urlFor } from '@/sanity';

interface UserPostsProps {
  userName: string;
}

const TAB_ITEMS = ['posts', 'saved', 'liked'];
export default function UserPosts({ userName }: UserPostsProps) {
  const [tab, setTab] = useState('posts');
  const { data, error } = useSWR(`/api/user/${userName}/${tab}`);
  console.log(data);

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
        {data !== undefined &&
          data.length > 0 &&
          data.map((d: any) => (
            <div className="card bg-base-100 shadow-xl cursor-pointer" key={d._id}>
              <figure className="rounded">
                <img src={urlFor(d.image)} alt="Shoes" />
              </figure>
            </div>
          ))}
      </div>
    </>
  );
}
