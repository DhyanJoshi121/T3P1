import React, { useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown, Divide } from "lucide-react";
import { Category } from "@/types/producCategory&featured";
import Image from "next/image";
import Link from "next/link";

interface NavItemProps {
  isAnyOpen: boolean;
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  isAnyOpen,
  category,
  handleOpen,
  isOpen,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex">
      <div className=" relative flex items-center">
        <Button
          className=" gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}
          <ChevronDown
            className={` h-4 w-4 transition-all text-muted-foreground ${
              isOpen && "-rotate-180"
            } `}
          />
        </Button>
      </div>
      {isOpen && (
        <div
          className={` absolute inset-x-0 top-full text-sm text-muted-foreground ${
            !isAnyOpen && " animate-in fade-in-10 slide-in-from-top-5"
          }`}
        >
          <div
            className={` absolute inset-0 top-1/2 bg-white shadow`}
            aria-hidden="true"
          />
          <div className=" relative bg-white">
            <div className=" mx-auto max-w-7xl px-8">
              {/* <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16"> */}
              <div className=" col-span-4 col-start-1 grid grid-cols-3 gap-x-8 py-16">
                {category.featured.map((item) => (
                  <div
                    key={item.label}
                    className=" group relative text-base sm:text-sm"
                  >
                    <div className=" relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                      <Image
                        src={`${
                          isHovered ? "/ssj_supreme.jpg" : "/Drip_Goku.jpg"
                        }`}
                        alt="Drip"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <Link
                      href={"/"}
                      className=" mt-6 block font-medium text-gray-900"
                    >
                      {item.label}
                    </Link>
                    <p className=" mt-1" aria-hidden="true">
                      Shop now
                    </p>
                  </div>
                ))}
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavItem;
