"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const slider = document.querySelector(".slider");

    function activate(e: any) {
      const items = document.querySelectorAll(".item");
      e.target.matches(".next") && slider?.append(items[0]);
      e.target.matches(".prev") && slider?.prepend(items[items.length - 1]);
    }

    document.addEventListener("click", activate, false);
  }, []);
  return (
    <main>
      <ul className="slider">
        <li
          className="item"
          style={{
            backgroundImage:
              "url('https://aakash2330-drippy.s3.amazonaws.com/hoodie/kinsley+Review.avif')",
          }}
        >
          <div className="content">
            <h2 className="title">"Why us 1"</h2>
            <p className="description">Lengthy Product Description . Lengthy Product Description . Lengthy Product Description . Lengthy Product Description</p>
            <button className="hover:cursor-grab hover:underline"><Link href={'/contact'}>Place Order</Link></button>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage:
              "url('https://aakash2330-drippy.s3.amazonaws.com/hoodie/final+output.jpg')",
          }}
        >
          <div className="content">
            <h2 className="title">"Why us 1"</h2>

            <p className="description">Lengthy Product Description . Lengthy Product Description . Lengthy Product Description . Lengthy Product Description</p>

            <button className="hover:cursor-grab hover:underline"><Link href={'/contact'}>Place Order</Link></button>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage:
              "url('https://aakash2330-drippy.s3.amazonaws.com/hoodie/DSC00720.JPG')",
          }}
        >
          <div className="content">
            <h2 className="title">"Why us 1"</h2>

            <p className="description">Lengthy Product Description . Lengthy Product Description . Lengthy Product Description . Lengthy Product Description</p>

            <button className="hover:cursor-grab hover:underline"><Link href={'/contact'}>Place Order</Link></button>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage:
              "url('https://aakash2330-drippy.s3.amazonaws.com/hoodie/Glovess.webp')",
          }}
        >
          <div className="content">
            <h2 className="title">"Why us 1"</h2>

            <p className="description">Lengthy Product Description . Lengthy Product Description . Lengthy Product Description . Lengthy Product Description</p>

            <button className="hover:cursor-grab hover:underline"><Link href={'/contact'}>Place Order</Link></button>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage:
              "url('https://aakash2330-drippy.s3.amazonaws.com/hoodie/final+output.jpg')",
          }}
        >
          <div className="content">
            <h2 className="title">"Urban Decay"</h2>

            <p className="description">Lengthy Product Description . Lengthy Product Description . Lengthy Product Description . Lengthy Product Description</p>

            <button className="hover:cursor-grab hover:underline"><Link href={'/contact'}>Place Order</Link></button>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage:
              "url('https://aakash2330-drippy.s3.amazonaws.com/hoodie/gloves3.jpg')",
          }}
        >
          <div className="content">
            <h2 className="title">"Why us 1"</h2>
            <p className="description">Lengthy Product Description . Lengthy Product Description . Lengthy Product Description . Lengthy Product Description</p>
            <button className="hover:cursor-grab hover:underline"><Link href={'/contact'}>Place Order</Link></button>
          </div>
        </li>
      </ul>
      <nav className="nav flex gap-3">
        <Button className=" rounded-2xl border prev  flex items-center justify-center">
          Prev
        </Button>
        <Button className=" rounded-2xl border next  flex items-center justify-center">
          Next
        </Button>
      </nav>
    </main>
  );
}
