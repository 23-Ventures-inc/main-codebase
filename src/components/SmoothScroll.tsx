"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const SmoothScroll = () => {
  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Define a smooth, eased-out scroll curve
    const lenis = new Lenis({
      duration: 1.2, // smoother experience (keep under 1.5s for UX)
      easing: (t) => 1 - Math.pow(2, -10 * t), // easeOutExpo
      smooth: true,
      smoothTouch: true,
      direction: "vertical",
      gestureOrientation: "vertical",
    });

    // GSAP integration with Lenis
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (value !== undefined) {
          lenis.scrollTo(value);
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    // Sync scroll updates
    lenis.on("scroll", ScrollTrigger.update);

    // Ensure everything is ready before triggering ScrollTrigger refresh
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100); // slight delay helps avoid layout shifts

    // Lenis animation frame loop
    let animationFrameId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };
    animationFrameId = requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
      ScrollTrigger.kill();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return null;
};

export default SmoothScroll;
