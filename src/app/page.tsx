import Image from "next/image";
import Header from "./components/header";
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen">
      <Header/>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section className="container min-h-[calc(100vh-70px)] flex items-center justify-center" >
          <div className="banner-bg-video w-full h-full absolute top-0 left-0 z-[-1] overflow-hidden opacity-50 bg-black">
          <video 
            src="/video/banner-bg.mp4"  
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover" 
          />
          </div>
          <div className="uppercase text-[8rem] flex flex-col">
            <div className=" tracking-tight font-suisse-m text-center leading-[0.8] w-fit">
              <h1>Multi</h1>
            <h1>Disciplinary</h1>
            <h1 className="relative w-fit">Developer

            <span className="lowercase flex flex-col font-suisse text-[1rem] font-[400] tracking-normal text-left leading-[1.25] w-fit absolute right-0 bottom-0 translate-x-[100%] ps-[0.5rem] max-w-[250px]">
              <span>Blending creativity, technical expertise, and design thinking to build user‑centered digital experiences that deliver purposeful and lasting impact.</span>
            </span>
            </h1>
           
            </div>
            </div>
        </section>
        <section className="container-fluid px-[20px] ">
          <div className="section-2-video ">
          <video 
            src="/video/section-2.mp4"  
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover rounded-[10px] -mt-[50px]" 
          />
          </div>
          <div>

          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
