import Slider from './components/ui/slider';
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen">
      <main className="flex flex-col row-start-2 items-center sm:items-start min-w-[100vw]">
        <section className="container min-h-[calc(100vh-70px)] flex items-center justify-center" >
          <div className="banner-bg-video w-full h-full absolute top-0 left-0 z-[-1] overflow-hidden opacity-25 bg-black">
          <video 
            src="/video/banner-bg-2.mp4"  
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover" 
          />
          </div>
          <div className="uppercase text-[8rem] flex flex-col">
            <div className=" tracking-tight font-suisse-m text-center leading-[0.8] w-fit">
              <h1 className="char-split">Multi</h1>
            <h1 className="char-split">Disciplinary</h1>
            <span className="relative flex gap-2">

              <h1 className="relative char-split w-fit">Developer</h1>
              <span className="uppercase flex flex-col font-suisse text-[1rem] font-[400] tracking-normal text-left leading-[1.25] w-fit  max-w-[300px]">
                <span className="char-split-later">Blending creativity, technical expertise, and design thinking to build user‑centered digital experiences that deliver purposeful and lasting impact.</span>
              </span>
            </span>
           
            </div>
            </div>
        </section>
        <section className="container section-2 min-h-[calc(100vh-60px)] min-w-[calc(100vw-60px)] px-[20px] fade-target">
          <div className="section-2-video " >
          <video 
            src="/video/section-2.mp4"  
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover rounded-[10px] " 
          />
          </div>
          <div>

          </div>
        </section>
        <section className="container section-3 transition-bg-prev min-h-screen flex items-end px-[20px] pb-[10%]" id="aboutme">
          <div className="section-3-video">
          <div className="section-subtitle">About me</div>
            <p className="text-[60px] font-suisse-r tracking-tight leading-[1] max-w-[1000px] w-[60vw] split">
              Focused on making websites feel alive with motion and intent.
              <br />
              Obsessed with clean design, clear flow, and tiny details.
              <br />
              If it moves with purpose, I probably built it.
            </p>
          </div>

        </section>
        <section className="container transition-bg skills-section text-[var(--background)] section-4 px-[20px] pt-[40vh] max-h-screen h-screen min-w-screen">
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <div>
                <span className="section-subtitle">my expertise</span>
                <h2 className=" text-[40px] leading-[1] split">Tech I Work With</h2>
              </div>
            </div>
            <div className="col-span-8">
            <div className="flex justify-center fade-target" id="skills-list_wrapper">
              <ul className="text-[80px] leading-[1] flex flex-col skills-list z-[999]">
                {[
                  "React.js",
                  "Next.js",
                  "Express.js",
                  "Node.js",
                  "MongoDB",
                  "SQL",
                  "WebSockets",
                  "REST API's",
                  "TypeScript",
                  "Javascript",
                  "Tailwind CSS",
                  "GSAP Animations",
                  "Shopify",
                  "Wordpress"
                ].map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            </div>
          </div>
        </section>
        <section className="container pt-[3vh] transition-bg-next min-h-screen " id="work_section">
          <div className="grid grid-cols-12">
                <div className="col-span-11">
        <span className="section-subtitle">my Work</span>
        <p className="text-[60px] font-suisse-r tracking-tight leading-[1] max-w-[800px] mb-[50px split">
        Code meets creativity in<br/> every line I write.
            </p>
                </div>
                <div className="col-span-1">
                  <Link href="/work" className="flex h-full w-full items-end justify-end">
                  <div className="rolling_wrapper">
                            <div className="rolling_inner_shown">View More</div>
                            <div className="rolling_inner_hidden" >View More</div>
                        </div>
                  </Link>
                </div>
                <div className="col-span-12 pt-[20px] fade-target">
                <Slider/>
                </div>
          </div>
        </section>
      </main>
    </div>
    </>
  );
}
