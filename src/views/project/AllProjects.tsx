import { gsap } from "gsap";
import { useRef } from "react";
import type { Project } from "../../domain/entities/project";

type AllProjectsProps = {
  allProjects: Project[];
  baseUrl: string;
};

export default function AllProjects({
  allProjects,
  baseUrl,
}: AllProjectsProps) {
  const plane1 = useRef<HTMLDivElement>(null);
  const plane2 = useRef<HTMLDivElement>(null);
  const plane3 = useRef<HTMLDivElement>(null);

  const xForce = useRef(0);
  const yForce = useRef(0);
  const requestAnimationFrameId = useRef<number | null>(null);

  const easing: number = 0.08;
  const speed: number = 0.01;

  const manageMouseMove = (e: React.MouseEvent) => {
    const { movementX, movementY } = e;
    xForce.current += movementX * speed;
    yForce.current += movementY * speed;

    if (requestAnimationFrameId.current == null) {
      requestAnimationFrameId.current = requestAnimationFrame(animate);
    }
  };

  const lerp = (start: number, target: number, amount: number): number =>
    start * (1 - amount) + target * amount;

  const animate = (): void => {
    xForce.current = lerp(xForce.current, 0, easing);
    yForce.current = lerp(yForce.current, 0, easing);
    gsap.set(plane1.current, {
      x: `+=${xForce.current}`,
      y: `+=${yForce.current}`,
    });
    gsap.set(plane2.current, {
      x: `+=${xForce.current * 0.5}`,
      y: `+=${yForce.current * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce.current * 0.25}`,
      y: `+=${yForce.current * 0.25}`,
    });

    if (Math.abs(xForce.current) < 0.01) xForce.current = 0;
    if (Math.abs(yForce.current) < 0.01) yForce.current = 0;

    if (xForce.current != 0 || yForce.current != 0) {
      requestAnimationFrameId.current = requestAnimationFrame(animate);
    } else {
      if (requestAnimationFrameId.current) {
        cancelAnimationFrame(requestAnimationFrameId.current);
        requestAnimationFrameId.current = null;
      }
    }
  };

  const plane1Projects = allProjects.slice(0, 3);
  const plane2Projects = allProjects.slice(3, 6);
  const plane3Projects = allProjects.slice(6, 8);

  return (
    <main
      className="relative w-full h-screen overflow-hidden"
      onMouseMove={manageMouseMove}
    >
      <div className="absolute z-10 right-20">
        <p className="text-white text-center max-w-3xl mx-auto text-6xl">
          Our work seamlessly blends creativity with conversions. We thrive on
          partnering with internal marketing, creative, and product teams to
          deliver impactful results.
          <br />
          <br />
          Explore our case studies to see how we bring strategic expertise and
          world-class creativity to life.
        </p>
      </div>
      <div ref={plane1} className="absolute inset-0 plane">
        {plane1Projects.map((project, idx) => (
          <img
            key={project.slug}
            src={`${baseUrl}${project.cover.url}`}
            alt={project.title}
            className={`absolute  w-[225px] h-auto object-cover z-10`}
            style={{
              left: `${[90, 5, 35][idx] || 0}%`,
              top: `${[70, 65, 0][idx] || 0}%`,
            }}
          />
        ))}
      </div>
      <div ref={plane2} className="absolute inset-0 plane">
        {plane2Projects.map((project, idx) => (
          <img
            key={project.slug}
            src={`${baseUrl}${project.cover.url}`}
            alt={project.title}
            className="absolute w-[200px] h-auto object-cover z-10"
            style={{
              left: `${[5, 80, 60][idx] || 0}%`,
              top: `${[10, 5, 60][idx] || 0}%`,
            }}
          />
        ))}
      </div>
      <div ref={plane3} className="absolute inset-0 plane">
        {plane3Projects.map((project, idx) => (
          <img
            key={project.slug}
            src={`${baseUrl}${project.cover.url}`}
            alt={project.title}
            className="absolute w-[150px] h-auto object-cover z-10"
            style={{
              left: `${[65, 40][idx] || 0}%`,
              top: `${[2.5, 75][idx] || 0}%`,
            }}
          />
        ))}
      </div>
    </main>
  );
}
