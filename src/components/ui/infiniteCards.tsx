"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../infinte";

export function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex flex-col antialiased  bg-transparent items-center justify-center relative overflow-hidden">
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
    quote: "https://aakash2330-drippy.s3.amazonaws.com/hoodie/DSC00719.JPG",
    name: "Customer 1",
    title:
      " I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you. ",
  },
  {
    quote:
      "https://aakash2330-drippy.s3.amazonaws.com/hoodie/kinsley+Review.avif",
    name: "Customer 2",
    title:
      " I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you. ",
  },
  {
    quote: "https://aakash2330-drippy.s3.amazonaws.com/hoodie/DSC00720.JPG",
    name: "Customer 4",
    title:
      " I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you. ",
  },
  {
    quote: "https://aakash2330-drippy.s3.amazonaws.com/hoodie/DSC00090.JPG",
    name: "Customer 6",
    title:
      " I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you. ",
  },
];
