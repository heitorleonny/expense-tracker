import React from "react";
import { FaTasks } from "react-icons/fa";
import { Button } from "./button/button";
import Link from "next/link";
interface TemplateProps{
    children: React.ReactNode;
}

export const Template: React.FC<TemplateProps>= ({children}) => {
    return (
        <div>
        <NavBar />
        {children}
        <Footer />
        </div>
    )
}


const NavBar: React.FC = () => {
    return(
        <header>
            <nav className="flex justify-around bg-red-400 py-3 mb-5">
                <Link href="/">
                <FaTasks className="size-10 text-white"/>
                </Link>
                <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/heitor-leonny-24b564240/" target="black">
                <Button text="Contact" style="bg-yellow-500 hover:bg-yellow-300"/>
                </a>
                <Link href="/forms">
                <Button text="Add New" style="bg-green-500 hover:bg-green-300"/>
                </Link>
                </div>
                
            </nav>
        </header>
    )
}


const Footer: React.FC = () => {
    return(
        <footer className="bg-red-400 text-white font-light flex justify-center mt-5">
            <p>Desenvolvido por <a className="font-bold" href="https://github.com/heitorleonny"> Heitor Leonny</a>.</p>
        </footer>
    )
}