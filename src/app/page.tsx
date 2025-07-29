import Image from "next/image";
import Header from "./components/header";
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen">
      <Header/>
      <main className="flex flex-col row-start-2 items-center sm:items-start min-w-[100vw]">
        <section className="container min-h-[calc(100vh-70px)] flex items-center justify-center" >
          <div className="banner-bg-video w-full h-full absolute top-0 left-0 z-[-1] overflow-hidden opacity-25 bg-black">
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

            <span className="uppercase flex flex-col font-suisse text-[1rem] font-[400] tracking-normal text-left leading-[1.25] w-fit absolute right-0 bottom-0 translate-x-[100%] ps-[0.5rem] max-w-[300px]">
              <span>Blending creativity, technical expertise, and design thinking to build user‑centered digital experiences that deliver purposeful and lasting impact.</span>
            </span>
            </h1>
           
            </div>
            </div>
        </section>
        <section className="container section-2 min-h-[calc(100vh-60px)] min-w-[calc(100vw-60px)] px-[20px] ">
          <div className="section-2-video">
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
        <section className="container section-3 transition-bg-prev min-h-screen flex items-end px-[20px] pb-[10%]">
          <div className="section-3-video">
            <p className="text-[60px] font-suisse-r tracking-tight leading-[1] max-w-[1000px] w-[60vw]">
              Focused on making websites feel alive with motion and intent.
              <br />
              Obsessed with clean design, clear flow, and tiny details.
              <br />
              If it moves with purpose, I probably built it.
            </p>
          </div>

        </section>
        <section className="container transition-bg text-[var(--background)] section-4 px-[20px] pt-[10vh] min-h-screen min-w-screen">
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <div>
                <span className="section-subtitle">my expertise</span>
                <h2 className="capitalize text-[40px]">Tech I Work With</h2>
              </div>
            </div>
            <div className="col-span-8">
              <div className="flex justify-center">
                <ul className="text-[80px] leading-[1] flex flex-col gap-[20px]">
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Javascript</li>
                  <li>GSAP Animations</li>
                  <li>Shopify</li>
                  <li>Wordpress</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
