"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Btn from "./btn";

const data = {
    navlist: [
    { "name": "Home", "link": "/" },
    { "name": "About Us", "link": "/" },
    {
        "name": "Plans ",
        "link": "/",
        "subList": [
            { "name": "Business Plan", "link": "/" },
        //     { "name": "Program 2", "link": "/programs/program2" },
        //     { "name": "Program 3", "link": "/programs/program3" },
        //     { "name": "Program 4", "link": "/programs/program4" }
        ]
    },
    { "name": "Ambassadors", "link": "/" },
    {
        "name": "Contact Us",
        "link": "/",
        "subList": [
            { "name": "Mail", "link": "/" },
        //     { "name": "Quranic Studies", "link": "/islam/quranic-studies" },
        //     { "name": "Hadith Studies", "link": "/islam/hadith-studies" },
        //     { "name": "Fiqh Studies", "link": "/islam/fiqh-studies" }
        ]
    }
]}


export default function NavBar() {
	const [openSubLists, setOpenSubLists] = useState<{ [key: string]: boolean }>(
		{}
	);

	function handleToggle(index: number) {
		setOpenSubLists((prev) => {
			return {
				...prev,
				[index]: !prev[index],
			};
		});
	}

	return (
		<nav className="">
			<div className="nav-logo">
				{/* <Image
					src={"/unilag-logo.svg"}
					width={40}
					height={40}
					alt="unilag-logo.svg"
				/> */}
				<p className="font-bold cursor-pointer text-3xl">MONIT</p>
			</div>

			<div className="nav-list">
				{data.navlist.map((list, i) => (
					<div
						key={i}
						title={list.name}
						className="relative"
						onClick={() => handleToggle(i)}>
						{list.name} 
						{/* {list.subList && <MdOutlineKeyboardArrowDown />}
						{list.subList && openSubLists[i] && (
							<ul className="sublist absolute bg-white shadow-lg">
								{list.subList.map((sub, subIndex) => (
									<li className="text-sm capitalize shadow-sm" key={subIndex}>
										<a className="text-sm" href={sub?.link}>{sub?.name}</a>
									</li>
								))}
							</ul>
						)} */}
					</div>
				))}
			</div>

			<div className="nav-btn">
				<Btn
				className="font-bold rounded-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white mt-4">Use MONIT</Btn>
			</div>
		</nav>
	);
}
