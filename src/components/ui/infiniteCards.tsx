
"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../infinte";

export function InfiniteMovingCardsDemo() {
  return (
    <div  className="h-[40rem]  rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "https://images.unsplash.com/photo-1714498988220-d6783c81a2a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Customer 1",
    title: "Review 1",
  },
  {
    quote:
      "https://images.unsplash.com/photo-1715077802063-27bdf4f6f99d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Customer 2",
    title: "Review 3",
  },
  {
    quote:
      "https://images.unsplash.com/photo-1714498988220-d6783c81a2a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Customer 4",
    title: "Review 5",
  },
  {
    quote:
      "https://images.unsplash.com/photo-1715077802063-27bdf4f6f99d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Customer 6",
    title: "Review 7",
  },
];
