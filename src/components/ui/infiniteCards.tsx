
"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../infinte";

export function InfiniteMovingCardsDemo() {
  return (
    <div  className="h-[40rem] rounded-md flex flex-col antialiased  bg-transparent items-center justify-center relative overflow-hidden">
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
      "https://aakash2330-drippy.s3.amazonaws.com/hoodie/DSC00719.JPG",
    name: "Customer 1",
    title: "Review 1",
  },
  {
    quote:
      "https://aakash2330-drippy.s3.amazonaws.com/hoodie/kinsley+Review.avif",
    name: "Customer 2",
    title: "Review 3",
  },
  {
    quote:
      "https://aakash2330-drippy.s3.amazonaws.com/hoodie/DSC00720.JPG",
    name: "Customer 4",
    title: "Review 5",
  },
  {
    quote:
      "https://aakash2330-drippy.s3.amazonaws.com/hoodie/DSC00090.JPG",
    name: "Customer 6",
    title: "Review 7",
  },
];
