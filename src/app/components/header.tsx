import React from "react";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";


const header = () => {
    return (
        <header className="w-full mx-auto grid grid-cols-[1fr_1fr_1fr] bg-primary text-white pt-[32px] pb-[10px] px-[60px] sticky top-0 left-0 mix-blend-difference z-[9999]">
            <h1 className="text-2xl font-suisse-m uppercase">Sagar J.</h1>
            <nav className="flex items-end justify-center">
                <ul className="flex gap-[1.5rem] text-[12px] font-[500] uppercase ">
                    <li>
                        <div className="rolling_wrapper">
                            <div className="rolling_inner_shown">Projects</div>
                            <div className="rolling_inner_hidden" >Projects</div>
                        </div>
                    </li>
                    <li>
                        <div className="rolling_wrapper">
                            <div className="rolling_inner_shown">About</div>
                            <div className="rolling_inner_hidden" >About</div>
                        </div>
                    </li>
                </ul>
            </nav>
            <div className="flex gap-[1rem] justify-end items-center social_icons">
                <a href="#">
                    <FaGithub size={14} />
                </a>
                <a href="#">
                    <FaLinkedin size={14}/>
                </a>
                <a href="#">
                    <IoCallSharp size={14}/>
                </a>
            </div>
        </header>
    )
}

export default header;