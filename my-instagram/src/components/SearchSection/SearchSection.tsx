'use client';

import { ChangeEvent, useState } from 'react';
import useSWR from 'swr';
import { SearchUserModel } from '@/models/user';
import useDebounce from '@/hooks/useDebounce';
import Link from 'next/link';

export default function SearchSection() {
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebounce(keyword);
  const { data, isLoading, error } = useSWR<SearchUserModel[]>(
    debouncedKeyword !== '' ? `/api/search/${debouncedKeyword}` : null,
    {
      revalidateOnMount: debouncedKeyword !== '',
    },
  );

  const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value.trim());
  };

  return (
    <section>
      <input
        type="text"
        placeholder="Input a userName or name..."
        className="input w-full input-bordered focus:outline-0"
        onChange={handleKeywordChange}
        value={keyword}
      />
      {data !== undefined &&
        data.length > 0 &&
        data.map((user) => (
          <Link href={`/${user.userName}`} className="flex flex-col w-full mt-4" key={user._id}>
            <div className="grid card border border-2 rounded-box place-items-start p-4">
              <div className="flex flex-row items-center min-w-0 w-full">
                <div className="avatar cursor-pointer">
                  <div className="w-10 rounded-full ring-2 ring-base-300 ring-offset-base-100 ring-offset-2">
                    <img src={user.userImage} alt="user-img" />
                  </div>
                </div>
                <p className="pl-3 font-semibold truncate tracking-tight">{user.userName}</p>
              </div>
              <div className="mt-1">
                <p>{user.name}</p>
                <p>{user.followers ?? 0} followers</p>
                <p>{user.following ?? 0} following</p>
              </div>
            </div>
          </Link>
        ))}
    </section>
  );
}
