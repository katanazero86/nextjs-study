'use client';

import profileImg from '../../../public/imgs/profile.png';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import BasicButton from "@/components/Buttons/BasicButton/BasicButton";

const Profile = () => {

    const router = useRouter();

    const handleContactClick = () => {
       router.push('/contact');
    }

    return (
        <section className="flex flex-col items-center justify-center">
            <Image className="rounded-full object-cover h-48 w-48" src={profileImg} alt="profile-img"/>
            <div className="flex flex-col items-center justify-center py-4">
                <h2 className="text-2xl font-semibold">Hi, I'm zero86</h2>
                <strong>Front-end engineer</strong>
                <p className="text-base">블로그 클론코딩!</p>
            </div>
            <BasicButton onClick={handleContactClick}>
                Contact Me
            </BasicButton>
        </section>
    )
};

export default Profile