import React, { useRef, useState } from "react";
import { gsap } from "gsap";

import Close from "../../assets/close.svg?react";
import Arrow from "../../assets/arrow.svg?react";
import Plus from "../../assets/plus.svg?react";

import { cn } from "../../services/common/cn.ts";
import type { Link } from "../../domain/entities/common";

interface MenuProps {
  navLinks: Link[];
}

const Menu = ({ navLinks }: MenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    if (!menuRef.current || isAnimating) return;

    const menu = menuRef.current;
    const willOpen = !isOpen;

    if (willOpen) {
      setIsAnimating(true);

      setIsOpen(true);

      requestAnimationFrame(() => {
        gsap.to(menu, {
          x: 0,
          y: 0,
          scaleX: 1,
          scaleY: 1,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => {
            setIsAnimating(false);
          },
        });
      });
    } else {
      setIsAnimating(true);

      gsap.to(menu, {
        scaleX: 0.8,
        scaleY: 0.8,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          setIsOpen(false);
          setIsAnimating(false);
          gsap.set(menu, {
            x: 0,
            y: 0,
            scaleX: 1,
            scaleY: 1,
          });
        },
      });
    }
  };

  return (
    <div
      ref={menuRef}
      className={cn(
        "bg-primary-pink transition-all fixed right-10 bottom-10 z-20",
        isOpen
          ? "rounded-[24px] px-10 py-8"
          : "rounded-[200px] flex justify-center items-center px-3 py-3",
      )}
    >
      {isOpen ? (
        <>
          <nav className="mb-10">
            <ul ref={navRef} className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.url}>
                  <a
                    className="justify-between flex text-3xl items-center gap-5"
                    href={link.url}
                  >
                    {link.name}
                    <Arrow />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            onClick={handleToggle}
            className="ml-auto block bg-primary-black [&>svg>path]:stroke-primary-pink  rounded-full cursor-pointer"
          >
            <Close />
          </button>
        </>
      ) : (
        <button onClick={handleToggle} className="cursor-pointer">
          <Plus />
        </button>
      )}
    </div>
  );
};

export default Menu;
