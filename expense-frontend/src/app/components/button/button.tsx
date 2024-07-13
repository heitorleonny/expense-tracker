import React from "react"

interface ButtonProps{
    text?: string;
    style?: string;
    onClick?: (event: any) => void;
}
export const Button: React.FC<ButtonProps> = ({text, style, onClick}: ButtonProps) => {
    return (
        <button className={`${style} text-white rounded-lg px-2 py-2 font-bold`} onClick={onClick}>{text}</button>
    );
}