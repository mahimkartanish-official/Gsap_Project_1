import React from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { ScrollTrigger,SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
    return(
        <main>
            <Navbar />
            <HeroSection />
            <div className="h-dvh bg-black"></div>
        </main>
    )
}

export default App