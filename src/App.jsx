import React, { useEffect } from "react";

import Cocktails from "./components/cocktails";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { ScrollTrigger,SplitText } from "gsap/all";
import gsap from "gsap";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import { ReactLenis } from "lenis/react";
import Lenis from "lenis";
import Masked_face from "./components/Masked_face";
// import Bubbles from "./components/Bubbles";


gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {

    useEffect(() =>{
        const lenis = new Lenis()
    
        function raf(time){
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)

    })



    return(
        <main>
            <ReactLenis root/>
            <Navbar />
            <HeroSection />
            <Cocktails />
            <About />
            <Art />
            <Menu />
            <Masked_face />
            <Contact />
            {/* <div className="h-dvh bg-black"></div> */}
        </main>
    )
}

export default App