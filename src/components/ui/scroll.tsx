"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

const ScrollElement = () => {

	return (
		<div
			className={clsx(
				"flex flex-col justify-center gap-3 items-center transition-opacity duration-1000",
			)}
		>
			<p
				className={clsx(
					"text-black text-lg mb-px animate-pulse",
					"lg:text-xl lg:text-black"
				)}
			>
				SCROLL TO EXPERIENCE
			</p>
			<div
				className={clsx("h-10 w-px bg-gray-800", "lg:bg-black lg:h-20")}
			/>
		</div>
	);
};

export default ScrollElement;
