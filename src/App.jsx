import React from "react";

import Cocktails from "./components/cocktails";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { ScrollTrigger,SplitText } from "gsap/all";
import gsap from "gsap";
import About from "./components/About";
import Art from "./components/Art";


gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
    return(
        <main>
            <Navbar />
            <HeroSection />
            <Cocktails />
            <About />
            <Art />
            {/* <div className="h-dvh bg-black"></div> */}
        </main>
    )
}

export default App