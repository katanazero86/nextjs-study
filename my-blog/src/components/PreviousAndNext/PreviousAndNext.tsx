'use client';

import BasicButton from "@/components/Buttons/BasicButton/BasicButton";
import {useRouter} from "next/navigation";


interface PreviousAndNextProps {
    prev: string | null;
    next: string | null;
}

const PreviousAndNext = ({prev, next}: PreviousAndNextProps) => {

    const router = useRouter();

    const handleClick = (targetPath: string) => {
        router.push(`/posts/detail/${targetPath}`);
    };

    const justifyAlign = () => {
        if(prev && next) return 'justify-between';
        if(!prev && next) return 'justify-end';
    };

    return (
        <div className={`flex flex-row items-center py-6 ${justifyAlign()}`}>
            {prev && <BasicButton onClick={() => handleClick(prev)}>
                이전
            </BasicButton>}
            {next && <BasicButton onClick={() => handleClick(next)}>
                다음
            </BasicButton>}
        </div>
    )
};

export default PreviousAndNext