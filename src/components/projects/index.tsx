"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./projects.scss";

const projects = () => {
  const stickyParentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function transform(block: Element) {
      if (block instanceof HTMLDivElement && block.parentElement) {
        const offsetTop = block.parentElement.offsetTop;
        const scrollSection = block.querySelector(
          ".projects"
        ) as HTMLDivElement;

        let maxScroll = 200;
        let percentage =
          ((window.scrollY - offsetTop) / window.innerHeight) * 100;
        percentage =
          percentage < 0 ? 0 : percentage > maxScroll ? maxScroll : percentage;

        gsap.to(scrollSection, {
          duration: 1,
          ease: "slow",
          x: `${-percentage}vw`,
        });
      }
    }

    window.addEventListener("scroll", () => {
      const stickySections = stickyParentRef.current?.querySelectorAll(
        ".projects-section__content"
      );

      stickySections?.forEach(transform);
    });
  }, []);

  return (
    <section className="projects-section" ref={stickyParentRef} id="projects">
      <div className="projects-section__content">
        <div className="projects">
          <div className="projects__block">Project 1</div>

          <div className="projects__block">Project 2</div>

          <div className="projects__block">Project 3</div>
        </div>
      </div>
    </section>
  );
};
export default projects;
