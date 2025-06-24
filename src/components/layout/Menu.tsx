import React, { useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";

import { cn } from "../../services/common/cn.ts";
import type { Link } from "../../domain/entities/common";

interface MenuProps {
  navLinks: Link[];
}

const Menu = ({ navLinks }: MenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      ref={menuRef}
      className={cn(
        "bg-primary-pink transition-all p-12 fixed right-10 bottom-10 z-20",
        isOpen ? "rounded-[24px]" : "rounded-[200px]",
      )}
    >
      {isOpen ? (
        <>
          <nav className="mb-10">
            <ul ref={navRef} className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.url}>
                  <a className="text-3xl" href={link.url}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            onClick={() => setIsOpen(false)}
            className="text-3xl cursor-pointer"
          >
            Cerrar
          </button>
        </>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="text-3xl cursor-pointer"
        >
          Abrir
        </button>
      )}
    </div>
  );
};

export default Menu;
