"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { HoveredLink, MenuItem, ProductItem, Menu } from "./navBarAce";
import { img1, img2 } from "@/lib/images";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 bg-re" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="hover:cursor-pointer">
          <Link href={"/"}>Home</Link>
        </div>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Hoodies"
              href="/hoodie/1"
              src={img1}
              description="Shop Now ?"
            />
            <ProductItem
              title="Gloves"
              href="/hoodie/1"
              src={img2}
              description="Coming Soon"
            />
          </div>
        </MenuItem>
        <div className="hover:cursor-pointer">
          <Link href={"/contact"}>Contact Us</Link>
        </div>
        <div className="hover:cursor-pointer">
          <Link href={"/contact"}>About Us</Link>
        </div>
      </Menu>
    </div>
  );
}
