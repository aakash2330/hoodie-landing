"use client";

import ContactDialog from "@/components/contactDialog";
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
        {[
          "https://aakash2330-drippy.s3.amazonaws.com/hoodie/DSC00719.JPG",
          "https://aakash2330-drippy.s3.amazonaws.com/hoodie/kinsley+Review.avif",
          "https://aakash2330-drippy.s3.amazonaws.com/hoodie/DSC00720.JPG",
          "https://aakash2330-drippy.s3.amazonaws.com/hoodie/DSC00090.JPG",
          "https://aakash2330-drippy.s3.amazonaws.com/hoodie/kinsley+Review.avif",
        ].map((v) => {
          {
            return (
              <li
                className="item"
                style={{
                  backgroundImage:
                    `url(${v})`,
                }}
              >
                <div className="content bg-black bg-opacity-90 p-10">
                  <h2 className="title">"Why us 1"</h2>
                  <p className="description">
                    Lengthy Product Description . Lengthy Product Description .
                    Lengthy Product Description . Lengthy Product Description
                  </p>
                <button className="hover:cursor-grab hover:underline">
                  <Link href={"/contact"}>Place Order</Link>
                </button>
                </div>
              </li>
            );
          }
        })}
      </ul>
      <nav className="nav flex gap-3">
        <Button className=" bg-black bg-opacity-70  rounded-2xl border prev  flex items-center justify-center">
          Prev
        </Button>
        <Button className=" bg-black bg-opacity-70  rounded-2xl border next  flex items-center justify-center">
          Next
        </Button>
      </nav>
    </main>
  );
}
