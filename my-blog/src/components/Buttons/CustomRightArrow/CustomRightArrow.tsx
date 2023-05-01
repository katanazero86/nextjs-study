import ChevronRight from "@/components/Icons/ChevronRight/ChevronRight";

interface CustomRightArrowProps {
    onClick?(): void;
}

const CustomRightArrow = ({onClick}: CustomRightArrowProps) => {
    return (
        <button
            className="bg-slate-600 bg-opacity-75 hover:bg-slate-700 hover:bg-opacity-75 absolute right-8 rounded-full cursor-pointer"
            onClick={onClick}>
            <ChevronRight/>
        </button>
    )
};

export default CustomRightArrow