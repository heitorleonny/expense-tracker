import React from "react";
import { FaTasks } from "react-icons/fa";
interface TemplateProps{
    children: React.ReactNode;
}

export const Template: React.FC<TemplateProps>= ({children}) => {
    return (
        <div>
        <NavBar />
        {children}
        </div>
    )
}


const NavBar: React.FC = () => {
    return(
        <header>
            <nav className="flex justify-around bg-red-400 py-3">
                <FaTasks className="size-10 text-white"/>
                <a href="https://www.linkedin.com/in/heitor-leonny-24b564240/" target="black">
                <button className="bg-yellow-500 text-white rounded-lg px-2 py-2 font-bold">Contact</button>
                </a>
            </nav>
        </header>
    )
}