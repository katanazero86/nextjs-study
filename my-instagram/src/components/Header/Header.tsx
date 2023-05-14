'use client';

import { MouseEvent } from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { BiMessageSquareAdd } from 'react-icons/bi';

export default function Header() {
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
            <AiOutlineHome size={24} />
          </label>
          <label tabIndex={0} className="px-2 cursor-pointer">
            <AiOutlineSearch size={24} />
          </label>
          <label tabIndex={0} className="px-2 cursor-pointer">
            <BiMessageSquareAdd size={24} />
          </label>
          <div className="mx-2.5 dropdown dropdown-end">
            <label tabIndex={0} className="avatar cursor-pointer">
              <div className="w-10 rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-2">
                <img src="/imgs/avatar/test.jpg" alt="avatar-img" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-32 border border-slate-200"
            >
              <li>
                <a>My Page</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
