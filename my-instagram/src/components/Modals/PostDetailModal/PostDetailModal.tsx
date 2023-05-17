import { MouseEvent } from 'react';
import ModalContainer from '@/components/Modals/ModalContainer/ModalContainer';
import Like from '@/components/Icons/Like/Like';
import Bookmark from '@/components/Icons/Bookmark/Bookmark';

interface PostDetailModalProps {
  isOpen: boolean;
  onClose: (e: MouseEvent) => void;
}

export default function PostDetailModal({ isOpen, onClose }: PostDetailModalProps) {
  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <>
        <div className="flex flex-wrap items-center">
          <img className="object-cover w-full max-h-96" src="/imgs/test-shoes.jpg" alt="" />
          <div className="flex flex-row items-center min-w-0 px-2 py-4">
            <div className="avatar mx-1.5 cursor-pointer">
              <div className="w-10 rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-2">
                <img src="/imgs/avatar/test.jpg" alt="user-img" />
              </div>
            </div>
            <p className="pl-3 text-sm truncate tracking-tight">
              창현아 진정해! 일립스를 했엉!창현아 진정해! 일립스를 했엉!창현아 진정해! 일립스를 했엉!창현아 진정해!
              일립스를 했엉!창현아 진정해! 일립스를 했엉!
            </p>
          </div>
          <p className="mb-4 font-normal text-gray-700 text-sm tracking-tight px-2 py-1">
            나이키 슈즈 개간지 슈퍼간지! 나이키 슈즈 개간지 슈퍼간지! 나이키 슈즈 개간지 슈퍼간지! 나이키 슈즈 개간지
            슈퍼간지!
          </p>
          <div className="flex items-center justify-between px-2 w-full">
            <Like width={20} height={20} />
            <Bookmark width={20} height={20} />
          </div>
          <div className="flex flex-col justify-between px-2 pb-2">
            <p className="grow">0 like</p>
            <p className="tracking-tight text-xs text-gray-600 mt-2">23 HOURS AGO</p>
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
