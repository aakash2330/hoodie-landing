"use client"

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const left = document.getElementById("left-side");

    const handleMove = (e: any) => {
      left.style.width = `${e.clientX / window.innerWidth * 100}%`;
    }

    document.onmousemove = e => handleMove(e);

    document.ontouchmove = e => handleMove(e.touches[0]);
  }, [])

  return (
    <>
      <div id="left-side" className="side">
        <h2 className="title">
          *Placeholder* You're here to buy
          <span className="fancy ">hoodie</span>
        </h2>
      </div>
      <div id="right-side" className="side">
        <h2 className="title">
          *Placeholder* You're here to buy
          <span className="fancy"> honey</span>
        </h2>
      </div>
    </>
  );
}
