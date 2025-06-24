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
  const animationTimeline = useRef<gsap.core.Timeline | null>(null);

  const openMenu = () => {
    if (!menuRef.current || !navRef.current) return;

    const menu = menuRef.current;
    const nav = navRef.current;

    const timeline = gsap.timeline({
      defaults: { ease: "back.out" },
    });

    timeline
      .fromTo(
        menu,
        {
          width: 60,
          height: 60,
          borderRadius: "0",
          backgroundColor: "transparent",
        },
        {
          width: 350,
          height: 400,
          duration: 0.4,
          borderRadius: "24px",
          backgroundColor: "#df9ef4",
        },
      )
      .fromTo(
        nav,
        {
          opacity: 0,
          x: 100,
        },
        {
          delay: 0.3,
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.2",
      );

    animationTimeline.current = timeline;
    setIsOpen(true);
  };

  const closeMenu = () => {
    if (animationTimeline.current) {
      animationTimeline.current.reverse();

      animationTimeline.current.eventCallback("onReverseComplete", () => {
        setIsOpen(false);
      });
    }
  };

  const handleToggle = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <div
      ref={menuRef}
      className={cn(
        "overflow-hidden w-[60px] h-[60px]   fixed right-10 bottom-10 z-20 px-3 py-3",
      )}
    >
      <nav className="mb-10 absolute right-5 top-8">
        <ul ref={navRef} className="translate-x-full flex flex-col gap-3">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                className="justify-end flex text-3xl items-center gap-5"
                href={link.url}
              >
                {link.name}
                <Arrow />
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={cn(
          "absolute flex w-[50px] h-[50px] rounded-full justify-center items-center bg-primary-pink right-1 bottom-[6px]",
        )}
      >
        <button
          onClick={handleToggle}
          className={cn(
            "cursor-pointer ",
            isOpen &&
              "block bg-primary-black [&>svg>path]:stroke-primary-pink rounded-full",
          )}
        >
          {isOpen ? <Close /> : <Plus />}
        </button>
      </div>
    </div>
  );
};

export default Menu;
