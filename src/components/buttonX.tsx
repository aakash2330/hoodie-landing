
"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";


export function HoverBorderGradientDemo({onClickFn}:{onClickFn:Function}) {
  return (
    <div onClick={()=>{onClickFn()}} className=" flex justify-center items-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>Shop Now</span>
      </HoverBorderGradient>
    </div>
  );
}

