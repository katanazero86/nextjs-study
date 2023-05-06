import {ReactNode} from "react";

interface BasicButtonProps {
    children: ReactNode,
    onClick: () => void;
}

const BasicButton = ({children, onClick}: BasicButtonProps) => {
    return (
        <button
            className="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
            onClick={onClick}>
            {children}
        </button>
    )
};

export default BasicButton