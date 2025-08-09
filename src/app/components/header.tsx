"use client"
import React from "react";
import { TfiFaceSmile } from "react-icons/tfi";
import Image from "next/image";
import Link from "next/link";

const header = () => {
    return (
        <header className="w-full mx-auto grid grid-cols-[1fr_1fr_1fr] bg-primary text-white pt-[30px] pb-[10px] px-[60px] sticky top-0 left-0 mix-blend-difference z-[9999]">
            <Link href={'/'} >
            <Image src="/images/sjicon.png" height={500} width={500} alt="" className='h-[50px] w-[50px] ratio-[1/1] rounded-full' />
            </Link>

            <nav className="flex items-end justify-center">
                <ul className="flex gap-[1.5rem] text-[12px] font-[500] uppercase ">
                    <li>
                        <Link href={'/work'} className="rolling_wrapper">
                            <div className="rolling_inner_shown">Work</div>
                            <div className="rolling_inner_hidden" >Work</div>
                        </Link>
                    </li>
                    <li>
                        <a href="#contact" className="scroll-link rolling_wrapper">
                            <div className="rolling_inner_shown">Contact</div>
                            <div className="rolling_inner_hidden" >Contact</div>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="flex gap-[1rem] justify-end items-center social_icons">
               
        <TfiFaceSmile size={30} />
            </div>
        </header>
    )
}

export default header;