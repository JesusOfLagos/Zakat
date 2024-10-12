"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Accordion({ sections }: { sections: { Q: string; A: string }[] }) {
	const [activeIndex, setActiveIndex] = useState<null | number>(null);

	const toggleSection = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<>
        <div className="flex flex-col justify-center">
			{sections.map((section, index: number) => (
				<div
					key={index}
					className="p-4 bg-[#545454] bg-opacity-20 border-b w-full rounded-t-xl  mb-4">
					<div
						className="w-full text-left px-4 py-2 focus:outline-none"
						onClick={() => toggleSection(index)}>
						<div className="flex justify-between items-center w-full">
							<span className="text-2xl font-semibold">{section.Q}</span>
							<span>
								{activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
							</span>
						</div>
					</div>
					{activeIndex === index && (
						<div className="px-4 py-2 text-left">
							<p>{section.A}</p>
						</div>
					)}
				</div>
			))}
        </div>
		</>
	);
}

export default Accordion;