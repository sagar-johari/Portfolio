import React from "react";
import { IoCall } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";



import Image from "next/image";

const Footer = () => {
  return (
    <>
    <footer className="flex justify-between flex-col min-h-screen" id="contact">
      <div className="container  pt-[150px] pb-[10px]">

      <h2 className="text-[50px] uppercase text-center split">Let's Connect</h2>
      <div className="grid grid-cols-12 gap-[4rem]  h-full relative fade-target">

        <div className="col-span-12 gap-[10px]  flex items-center justify-center">
          <div className="flex gap-4 text-[30px]">
            <p className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors duration-300 ease-in-out">
              <IoIosMail />
            </p>
            <p className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors duration-300 ease-in-out">
              <FaGithub />
            </p>
            <p className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors duration-300 ease-in-out">
              <FaLinkedin />
            </p>
            <p className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors duration-300 ease-in-out">
              <SiLeetcode />
            </p>
            <p className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors duration-300 ease-in-out">
              <IoCall />
            </p>
          </div>
        </div>
        <div className="col-span-12 gap-[10px]  flex items-center justify-center">
          <div className="uppercase rounded-full transition-opacity duration-300 text-[14px] text-white  py-[20px] px-[50px] bg-red-500 whitespace-nowrap resume_download_button">
            Download Resume{" "}
            <FiDownload size={14} className="inline leading-normal" />
          </div>
        </div>

      </div>
      </div>
    <Image src={'/images/SAGAR_JOHARI.svg'} className="w-full " alt="bottom name" width={1200} height={1200} />
    </footer>
    </>
  );
};

export default Footer;
