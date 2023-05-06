'use client';

import BasicButton from "@/components/Buttons/BasicButton/BasicButton";
import {useRouter} from "next/navigation";


interface PreviousAndNextProps {
    prev: string;
    next: string;
}

const PreviousAndNext = ({prev, next}: PreviousAndNextProps) => {

    const router = useRouter();

    const handleClick = (targetPath: string) => {
        router.push(`/posts/detail/${targetPath}`);
    };

    return (
        <div className="flex flex-row items-center justify-between py-6">
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