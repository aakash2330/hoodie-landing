"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import { ArrowRight } from "lucide-react";

export function DirectionAwareHoverDemo({ img ,description}: { img: string,description:string }) {
  return (
    <div className=" relative flex flex-col items-center justify-center">
      <DirectionAwareHover imageUrl={img}>
        <p className="font-bold text-xl">Hoodie</p>
        <div className="flex justify-center items-center gap-1">
          <p className="font-normal text-sm">Shop Now</p>
          <ArrowRight></ArrowRight>
        </div>
      </DirectionAwareHover>
        <div className="text-gray-800">{description}</div>
    </div>
  );
}
