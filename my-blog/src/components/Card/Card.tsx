'use client';

interface CardProps {
    title: string;
    description: string;
    date: string;
    category: string;
    imgUrl: string
    path: string;
}

const Card = ({title, description, date, category, imgUrl, path}: CardProps) => {

    const handleCardClick = () => {
        console.log(path);
    };

    return (
        <div className="rounded overflow-hidden shadow-lg cursor-pointer h-full max-h-96 flex flex-col justify-between"
             onClick={handleCardClick}>
            <img className="w-full max-h-56" src={imgUrl} alt="posts-img"/>
            <div className="px-6 py-4 grow flex flex-col justify-between">
                <div>
                    <p className="text-sm text-right tracking-tighter mb-2">{date}</p>
                    <div className="font-bold text-xl truncate mt-2">{title}</div>
                    <p className="text-gray-700 text-sm">
                        {description}
                    </p>
                </div>
                <div className="mt-2">
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">{category}</span>
                </div>
            </div>
        </div>
    )
};

export default Card