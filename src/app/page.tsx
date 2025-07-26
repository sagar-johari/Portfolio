import Image from "next/image";
import Header from "./components/header";
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen">
      <Header/>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section className="container">
          <div className="uppercase text-[8rem] flex flex-col">
            <div className=" tracking-tight font-suisse-m text-center leading-[0.8] w-fit">
              <h1>Multi</h1>
            <h1>Disciplinary</h1>
            <h1 className="relative w-fit">Developer

            <span className="uppercase flex flex-col font-suisse text-[1rem] tracking-normal text-left leading-[1.25] w-fit absolute right-0 bottom-0 translate-x-[100%] ps-[0.5rem] max-w-[320px]">
              <span>Blending creativity, technical expertise, and design thinking to build user‑centered digital experiences that deliver purposeful and lasting impact.</span>
            </span>
            </h1>
           
            </div>
            </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
