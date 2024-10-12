import React from "react";
import data from "@/app/components/data.json";
import Image from "next/image";
import Link from "next/link";
import facebookImage from '@/public/facebook_svg.svg'
import instagramImage from '@/public/instagram_logo.svg.svg'
import linkedinImage from '@/public/linkedin_symbol.svg.svg'
import XImage from '@/public/x_logo.svg.svg'
import appleImage from '@/public/applemac.svg'


export default function Footer() {
	const { contact, pages, others, office, downloads } = data.footerList;
	return (
		<footer className=" p-4 max-w-[1600px] w-full flex flex-col items-center justify-center mx-auto ">
			<div className="flex flex-wrap justify-between items-start w-full mx-auto">
				<Lists heading={contact.heading} lists={contact.body} />
				<Lists heading={pages.heading} lists={pages.body} />
				<Lists heading={office.heading} lists={contact.body} />
				<div className="">
					<Lists heading={others.heading} lists={others.body} />
					<Lists heading={downloads.heading} lists={downloads.body} />
				</div>
			</div>

			{/* HORIZONTAL LINE  */}
			<div
				className="hr my-8 w-full h-1"
				style={{
					width: "100%",
				}}
			/>
			<div className="flex flex-col md:flex-row  gap-4 justify-between w-full">
				<div>
					<div className="nav-logo">
						<p>
							MONIT{" "}
							<span className="font-thin"> © 2024 ❤️ from the web team.</span>
						</p>
					</div>
				</div>
				<p>
					<span className="mx-2">
						{" "}
						<Image
							src={linkedinImage}
							width={20}
							height={20}
							alt="linkedin_symbol.svg"
							className="inline"
						/>{" "}
						LinkedIn
					</span>
					<span className="mx-2">
						{" "}
						<Image
							src={facebookImage}
							width={20}
							height={20}
							alt="facebook_symbol.svg"
							className="inline"
						/>
						Facebook
					</span>
					<span className="mx-2">
						{" "}
						<Image
							src={instagramImage}
							width={20}
							height={20}
							alt="instagram_logo.svg"
							className="inline"
						/>
						Instagram
					</span>
					<span className="mx-2">
						{" "}
						<Image
							src={XImage}
							width={20}
							height={20}
							alt="x_logo.svg"
							className="inline"
						/>
						X (Twitter)
					</span>
				</p>
			</div>
		</footer>
	);
}

// import React from 'react'

export function Lists({
	lists,
	heading,
}: {
	heading: string;
	lists: { value: string; link: string }[];
}) {
	return (
		<ul className={"mb-4 mr-4"}>
			<h4 className="font-bold">{heading}</h4>
			{lists.map((item, i) => (
				<li
					className={`text-[#545454] ${
						item.value.slice(-3).includes("svg") && "inline"
					}`}
					key={i}>
					{" "}
					<Link href={item.link}>
						{item.value.slice(-3).includes("svg") ? (
							<Image
								src={appleImage}
								width={80}
								height={80}
								className="inline "
								alt="unilag-logo.svg"
							/>
						) : (
							item.value
						)}{" "}
					</Link>
				</li>
			))}
		</ul>
	);
}