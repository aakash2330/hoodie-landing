import { cn } from "@/lib/utils";
import Image from "next/image";

const img1 = require("../../public/DSC00074.JPG");
export default function InfiniteText() {
  return (
    <>
      <svg id="filters" aria-hidden="true" width="10000" height="10000">
        <defs>
          <filter
            id="duplicate"
            color-interpolation-filters="sRGB"
            x="0"
            y="0"
            width="600%"
            height="100%"
            primitiveUnits="objectBoundingBox"
          >
            <feColorMatrix values="" />
            <feTile width="1"></feTile>
            <feTile></feTile>
          </filter>
          <filter
            id="marquee-left"
            x="0"
            y="0"
            width="600%"
            height="100%"
            primitiveUnits="objectBoundingBox"
          >
            <feOffset dx="0">
              <animate
                attributeName="dx"
                to="-1"
                dur="15s"
                repeatCount="indefinite"
                begin="0s"
              />
            </feOffset>
          </filter>
          <filter
            id="marquee-right"
            x="0"
            y="0"
            width="600%"
            height="100%"
            primitiveUnits="objectBoundingBox"
          >
            <feOffset dx="-1">
              <animate
                attributeName="dx"
                to="0"
                dur="15s"
                repeatCount="indefinite"
                begin="0s"
              />
            </feOffset>
          </filter>
        </defs>
      </svg>

      <div className="wrapper">
        <div className="left">
          <div className="marquee">
            <div className="marquee--inner">
              <p style={{ filter: "url(#duplicate) url(#marquee-left)" }}>
                What's Trending .
              </p>
            </div>
          </div>
          <div className="marquee">
            <div className="marquee--inner">
              <p
                className="outline"
                style={{ filter: "url(#duplicate) url(#marquee-right)" }}
              >
                Design Create Connect .
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="marquee">
            <div className="marquee--inner">
              <p
                className="outline"
                style={{ filter: "url(#duplicate) url(#marquee-left)" }}
              >
                What's Trending .
              </p>
            </div>
          </div>
          <div className="marquee">
            <div className="marquee--inner">
              <p style={{ filter: "url(#duplicate) url(#marquee-right)" }}>
                Design Create Connect .
              </p>
            </div>
          </div>
        </div>

        <div
          className="can h-[30rem] rounded-[2%]"
          style={{
            backgroundImage:
              "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/skater.gif')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </>
  );
}
