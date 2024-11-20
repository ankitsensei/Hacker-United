import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Logo from "../assets/Logos/Hackunited3Extended.png";

const ScrollingText = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textWrapperRef = useRef<HTMLDivElement>(null);    
    useEffect(() => {
    const container = containerRef.current;
    const textWrapper = textWrapperRef.current;

    if (container && textWrapper) {
        const textWidth = textWrapper.offsetWidth;
        const containerWidth = container.offsetWidth;

      // Dynamically duplicate text to ensure seamless loop
        const repeatCount = Math.ceil(containerWidth / textWidth) + 1;
        const repeatedText = textWrapper.innerHTML.repeat(repeatCount);
        textWrapper.innerHTML = repeatedText;

      // GSAP animation for seamless looping
        gsap.set(textWrapper, { x: 0 });
        gsap.to(textWrapper, {
        x: -textWidth, // Move entire text width to the left
        duration: 20, // Adjust speed as needed
        repeat: -1, // Infinite loop
        ease: "linear",
        });
    }
    }, []);

    return (
    <div
        ref={containerRef}
        className="overflow-hidden whitespace-nowrap relative w-full h-16 flex items-center bg-gradient-to-r from-purple-900 to-zinc-900 lg:h-80 lg:border-spacing-y-10 border-y-2 border-double lg:border-purple-600 border-purple-500 lg:border-y-8"
    >
        <div
        ref={textWrapperRef}
        className="flex justify-center items-center gap-10 text-xl font-semibold text-purple-300 font-glitchGoblin lg:text-[10rem] lg:gap-40"
        >
        United Hacks V4 <img src={Logo} alt="Logo" className="w-10 lg:w-40" />
        United Hacks V4 <img src={Logo} alt="Logo" className="w-10 lg:w-40" />
        United Hacks V4 <img src={Logo} alt="Logo" className="w-10 lg:w-40" />
        United Hacks V4 <img src={Logo} alt="Logo" className="w-10 lg:w-40" />
        </div>
    </div>
    );
};

export default ScrollingText;
