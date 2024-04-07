"use client";
import { PRODUCT_CATEGORY } from "@/config";
import React, { use, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const isAnyOpen = activeIndex !== null;
  useOnClickOutside(navRef, () => setActiveIndex(null));
  return (
    <div className=" flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORY.map((category, index) => {
        const handleOpen = () => {
          setActiveIndex(index === activeIndex ? null : index);
        };
        return (
          <NavItem
            isAnyOpen={isAnyOpen}
            category={category}
            handleOpen={handleOpen}
            isOpen={index === activeIndex}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
