"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const SmoothScroll = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create Lenis instance
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(2, -10 * t), // easeOutExpo
      smooth: true,
      smoothTouch: true,
      direction: "vertical",
      gestureOrientation: "vertical",
    });

    // Setup GSAP ScrollTrigger integration
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

    lenis.on("scroll", ScrollTrigger.update);

    // Refresh ScrollTrigger slightly delayed
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // RAF loop for Lenis
    let animationFrameId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };
    animationFrameId = requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      cancelAnimationFrame(animationFrameId);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
};

export default SmoothScroll;
