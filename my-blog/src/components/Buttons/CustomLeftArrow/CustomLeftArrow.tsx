import ChevronLeft from "@/components/Icons/ChevronLeft/ChevronLeft";

interface CustomLeftArrowProps {
    onClick?(): void;
}

const CustomLeftArrow = ({onClick}: CustomLeftArrowProps) => {
    return (
        <button className="bg-slate-600 bg-opacity-75 hover:bg-slate-700 hover:bg-opacity-75 absolute left-8 rounded-full cursor-pointer" onClick={onClick}>
            <ChevronLeft />
        </button>
    )
};

export default CustomLeftArrow