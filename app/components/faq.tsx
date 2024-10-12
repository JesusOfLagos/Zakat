import Image from "next/image";
import React from "react";
import data from "@/app/components/data.json";
import Accordion from "./accordion";

export default function FAQ() {
	const { FAQs } = data;
	return (
		<section id="7" className="mysection">
			<div className="text-section">
				<p className="subheading text-[#4BC1F0]">EXPLORE FAQs</p>
				<h2>Your Questions, Answered</h2>
				<p>
					Find answers to the most frequently asked questions about Monit. Whether you&apos;re curious about our financial education programs, resources, or membership options, we&apos;ve got you covered with detailed and helpful information to guide you.
				</p>
			</div>

			{/* BACKGROUND IMAGE */}
			<div className="cards-section flex flex-col justify-center">
				<Accordion sections={FAQs} />
			</div>
		</section>
	);
}
