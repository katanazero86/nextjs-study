'use client';

import { MouseEvent } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { BiMessageSquareAdd } from 'react-icons/bi';
import Avatar from '@/components/Header/Avatar/Avatar';

export default function Header() {
  const { data: session } = useSession();
  const targetUser = session?.user;

  const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    signOut();
  };

  return (
    <header className="pt-2">
      <nav className="navbar">
        <div className="flex-1">
          <Link href="/" className="normal-case text-3xl text-semibold">
            Instagram
          </Link>
        </div>
        <div className="flex-none">
          <label tabIndex={0} className="pr-2 cursor-pointer">
            <Link href="/">
              <AiOutlineHome size={24} />
            </Link>
          </label>
          <label tabIndex={0} className="px-2 cursor-pointer">
            <Link href="/search">
              <AiOutlineSearch size={24} />
            </Link>
          </label>
          <label tabIndex={0} className="px-2 cursor-pointer">
            <Link href="/new_post">
              <BiMessageSquareAdd size={24} />
            </Link>
          </label>
          {targetUser && (
            <div className="mx-2.5 dropdown dropdown-end">
              <Avatar imgUrl={targetUser?.image!} />
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-32 border border-slate-200"
              >
                <li>
                  <Link href={`/${targetUser.userName}`}>My Page</Link>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
