import Horizontal from "./components/horizontal";
import Marquee from "react-fast-marquee";
import About from "./components/about/about";
import Copy from "./components/Copy";
import ProjectsPage from "./projets/Projects";
import Hover from "./components/Hover";

export default function Home() {



  return (
<>
  <main className="h-screen  py-20">

<section className="max-w-5/5 mx-auto px-20 h-9/12">
  <div className="w-screen grid grid-cols-1 grid-rows-2  gap-6 lg:grid-cols-2  items-center ">
        
        {/* top text */}
        
        <div className="flex items-center justify-start flex-col max-w-[400px]">
      <h1 className="font-bold text-5xl text-[#2E2E2E] px-5">Jérémie NGUYEN</h1>
   
     <div className="mt-5">
      <p className="text-[#2E2E2E] text-base md:text-lg">
      Passionné par le design, j'aide les marques à créer ou faire évoluer leur identité visuelle en donnant du sens à chaque détail.      
      </p>
      </div>
      </div>

    {/* Center image */}
    <div className="flex flex-row items-center justify-center lg:justify-start">
    <img
      className="rounded-full w-95 h-95 object-cover"
      src="hero.png"
      alt="Hero"
    />
    </div>


  </div>
</section>

<Marquee speed={70} loop={0}>
  <Horizontal/>
</Marquee>

<Copy delay={0.9}>
<About/>
</Copy>

<ProjectsPage/>
<Hover/>



    </main>


    </>
  );
}
