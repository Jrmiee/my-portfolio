"use client";
import { useEffect, useRef } from "react";

export default function Hover() {
  const containerRef = useRef(null);
  const highlightRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const highlight = highlightRef.current;
    const gridItems = container.querySelectorAll(".grid-item");
    const firstItem = container.querySelector(".grid-item");

    const highlightColors = [
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
    ];

    gridItems.forEach((item, index) => {
      item.dataset.color = highlightColors[index % highlightColors.length];
    });

    const moveToElement = (element) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Remove hover class from all items
        gridItems.forEach((item) => item.classList.remove("is-hovered"));
        
        // Add hover class to current element
        element.classList.add("is-hovered");

        highlight.style.opacity = "1";
        highlight.style.transform = `translate(${
          rect.left - containerRect.left
        }px, ${rect.top - containerRect.top}px)`;
        highlight.style.width = `${rect.width}px`;
        highlight.style.height = `${rect.height}px`;
        highlight.style.backgroundColor = element.dataset.color;
      }
    };

    const moveHighlight = (e) => {
      const containerRect = container.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Check if mouse is outside container boundaries
      if (
        mouseX < containerRect.left ||
        mouseX > containerRect.right ||
        mouseY < containerRect.top ||
        mouseY > containerRect.bottom
      ) {
        // Mouse is outside container, hide highlight
        gridItems.forEach((item) => item.classList.remove("is-hovered"));
        highlight.style.opacity = "0";
        return;
      }

      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);

      if (hoveredElement && hoveredElement.classList.contains("grid-item")) {
        moveToElement(hoveredElement);
      } else if (
        hoveredElement &&
        hoveredElement.parentElement &&
        hoveredElement.parentElement.classList.contains("grid-item")
      ) {
        moveToElement(hoveredElement.parentElement);
      } else {
        // Mouse is in container but not over a grid item
        gridItems.forEach((item) => item.classList.remove("is-hovered"));
        highlight.style.opacity = "0";
      }
    };

    moveToElement(firstItem);

    const handleMouseLeave = () => {
      // Remove hover class from all items when mouse leaves container
      gridItems.forEach((item) => item.classList.remove("is-hovered"));
      
      // Hide the highlight rectangle
      highlight.style.opacity = "0";
    };

    // Mouse events for desktop
    container.addEventListener("mousemove", moveHighlight);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Touch events for mobile/responsive
    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      const touchElement = document.elementFromPoint(touch.clientX, touch.clientY);
      
      if (touchElement && touchElement.classList.contains("grid-item")) {
        moveToElement(touchElement);
      } else if (
        touchElement &&
        touchElement.parentElement &&
        touchElement.parentElement.classList.contains("grid-item")
      ) {
        moveToElement(touchElement.parentElement);
      }
    };

    const handleTouchEnd = () => {
      // Hide highlight when touch ends
      gridItems.forEach((item) => item.classList.remove("is-hovered"));
      highlight.style.opacity = "0";
    };

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("mousemove", moveHighlight);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <>
      <div className="container" ref={containerRef}>
        <div className="grids">
          <div className="grid-row">
            <div className="grid-item ">
              <p>HTML</p>
            </div>
            <div className="grid-item">
              <p>CSS</p>
            </div>
            <div className="grid-item">
              <p>JavaScript</p>
            </div>

            <div className="grid-item">
              <p>GSAP</p>
            </div>
            <div className="grid-item">
              <p>Webflow</p>
            </div>
          </div>

          <div className="grid-row">
            
            <div className="grid-item">
              <p className="text-center">Adobe <br/> Illustrator</p>
            </div>
            <div className="grid-item">
              <p className="text-center">Adobe <br/> Photoshop</p>
            </div>
            <div className="grid-item">
              <p className="text-center">Adobe <br/> Indesign</p>
            </div>
          </div>
        </div>
        <div className="highlight" ref={highlightRef}></div>
      </div>

    </>
  );
}


