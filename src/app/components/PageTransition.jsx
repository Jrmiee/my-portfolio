"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function PageTransition() {
  const overlayRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const overlay = overlayRef.current;

    // Ensure the overlay covers immediately to avoid initial flash, then animate away
    gsap.set(overlay, { yPercent: 0 });

    const tl = gsap.timeline();
    tl.to(overlay, {
      yPercent: 100,
      delay: 0.2,
      duration: 0.9,
      ease: "power2.in",
    });
  }, [pathname]); // run animation on every route change

  return (
    <div
      ref={overlayRef}
      className="fixed top-0 left-0 w-full h-full bg-[#978069] z-9999 pointer-events-none will-change-transform"
    />
  );
}
