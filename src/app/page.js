import Horizontal from "./components/horizontal";
import Marquee from "react-fast-marquee";
import About from "./components/about/about";
import Copy from "./components/Copy";

export default function Home() {



  return (
<>
  <main className="h-screen  py-20">

<section className="max-w-5/5 mx-auto px-20">
  <div className=" grid grid-cols-1 grid-rows-1 gap-6 lg:grid-cols-2 lg:grid-rows-2 items-center">
        
        {/* top text */}
        
        <div className="flex items-end justify-start  flex-col max-w-[400px]">
      <h1 className="font-bold text-5xl text-[#2E2E2E] px-5">Jérémie NGUYEN</h1>
   
     <div className="mt-5">
      <Copy delay={0.9}>
      <p className="text-[#2E2E2E] text-base md:text-lg">
      Passionné par le design, j’aide les marques à créer ou faire évoluer leur identité visuelle en donnant du sens à chaque détail.      
      </p>
      </Copy>
      </div>
      </div>
    {/* Center image */}
    <img
      className="rounded-full w-95 h-95 mr-auto object-cover"
      src="hero.png"
      alt="Hero"
    />


  </div>
</section>





  <Marquee speed={70} loop={0}>

<Horizontal/>
</Marquee>

<About/>

<section className=" h-screen w-screen">

    <div className="w-full h-full px-20">

        <div className="py-20">

            <h2>Mes Projets</h2>
        
        </div>
<div className="flex flex-col lg:flex-row w-full gap-10 px-5  ">
        <a href="http://www.google.fr">
                
                <video className="rounded-xl w-4/4 px-5" autoPlay playsInline muted  loop   src="/Animated-iPhone-mockups.mp4"
                ></video>

        </a>
        <a href="http://www.google.fr">
                
                <video className="rounded-xl w-4/4" autoPlay playsInline muted  loop   src="/Animated-iPhone-mockups.mp4"
                ></video>

        </a>
        
        
  </div>

  <div className="flex w-full mt-16 gap-5">
        
        
  </div>
    </div>

</section>

    </main>


    </>
  );
}
