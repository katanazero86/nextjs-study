'use client';
import { ChangeEvent, useState, DragEvent, FormEvent, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { AuthUser } from '@/models/user';
import UserAvatar from '@/components/atoms/UserAvatar/UserAvatar';
import BasicButton from '@/components/atoms/Buttons/BasicButton/BasicButton';
import { FaPhotoVideo } from 'react-icons/fa/index';

interface NewPostFormProps {
  user: AuthUser;
}
export default function NewPostForm({ user }: NewPostFormProps) {
  const router = useRouter();
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File>();

  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target?.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handleDrag = (e: DragEvent) => {
    if (e.type === 'dragenter') {
      setDragging(true);
    } else if (e.type === 'dragleave') {
      setDragging(false);
    }
  };
  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };
  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer?.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('text', textRef.current?.value ?? '');

    fetch('/api/posts', {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          alert('에러가 발생하였습니다!');
          return;
        }
        router.push('/');
      })
      .catch((error) => console.error(error));
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center py-2">
        <UserAvatar imgUrl={user.image ?? ''} />
        <p className="m-0 py-1">{user.email?.split('@')[0]}</p>
      </div>
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <input
          className="hidden"
          type="file"
          name="input-upload"
          id="input-upload"
          accept="image/*"
          onChange={handleChange}
        />
        <label
          htmlFor="input-upload"
          className=" cursor-pointer w-full h-60 border-dashed border border-indigo-500 flex flex-col items-center justify-center"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {!file && (
            <div className="flex flex-col items-center pointer-events-none">
              <FaPhotoVideo className="w-20 h-20 text-gray-300" />
              <p>Drag and Drop your image here! or click!</p>
            </div>
          )}
          {file && (
            <div className="relative w-full aspect-square">
              <Image className="object-cover" src={URL.createObjectURL(file)} alt="local file" fill sizes="650px" />
            </div>
          )}
        </label>
        <textarea
          className="my-2"
          ref={textRef}
          rows={10}
          name="contents"
          id="contents"
          placeholder="Write a contents..."
        />
        <BasicButton size="sm" color="primary">
          등록
        </BasicButton>
      </form>
    </section>
  );
}
