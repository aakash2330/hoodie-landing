"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import { ArrowRight } from "lucide-react";

export function DirectionAwareHoverDemo({ img }: { img: string }) {
  return (
    <div className="h-[40rem] relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={img}>
        <p className="font-bold text-xl">Hoodie</p>
        <div className="flex justify-center items-center gap-1">
          <p className="font-normal text-sm">Shop Now</p>
          <ArrowRight></ArrowRight>
        </div>
      </DirectionAwareHover>
    </div>
  );
}
