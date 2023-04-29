const Card = () => {
    return (
        <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full max-h-56" src="/imgs/card.jpg" alt="posts-img" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{"{title}"}</div>
                    <p className="text-gray-700 text-sm">
                        {"{subTitle}"}
                    </p>
                </div>
                <div className="px-6 py-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">javascript</span>
                </div>
        </div>
    )
};

export default Card