"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

const ScrollElement = () => {

	return (
		<div
			className={clsx(
				"flex flex-col justify-center items-center transition-opacity duration-1000",
			)}
		>
			<p
				className={clsx(
					"text-black text-lg mb-px animate-pulse",
					"lg:text-xl lg:text-white"
				)}
			>
				SCROLL
			</p>
			<div
				className={clsx("h-10 w-px bg-black", "lg:bg-white lg:h-20")}
			/>
		</div>
	);
};

export default ScrollElement;
