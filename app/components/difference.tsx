import Image from "next/image";
import React from "react";
import { MdArrowForward } from "react-icons/md";
import Btn from "./btn";
import image from '@/public/servicesremove.png'



export default function Difference() {
	return (
		<section id="7" className="bg-gradient-to-r from-blue-800 to-blue-500 relative px-2 py-24">
			{/* BACKGRROUND IMAGE  */}
			{/* <Image
				src={"Annual-bg.svg"}
				className="absolute bottom-0 left-0 w-full h-full -z-[1] object-cover"
				width={500}
				height={500}
				alt=""
			/> */}
			{/* BACKGRROUND IMAGE  */}
			<div className="mysection bg-white rounded-xl">
				<div className="text-section">
					<p className="font-bold text-2xl text-[#FF5A5F]">Financial School</p>
					<h2>Invest In Your Future</h2>
					<p className="text-gray-500">
						Support our mission by paying your annual dues. Your contributions ensure the continued growth and success of our financial education platform, funding essential programs and activities that benefit your financial literacy and empowerment. By investing in us, you’re investing in your own financial knowledge and future.
					</p>
				</div>

				{/* BACKGROUND IMAGE        */}
				<div className="newscard-section max-w-[1200px] rounded-2xl mx-auto	p-16 my-4 flex flex-col md:flex-row-reverse justify-center items-center ">
					<Image
						src={image}
						className="mb-8"
						width={500}
						height={500}
						alt="Annual-Dues.svg"
					/>
					<div className="text-left col flex flex-col justify-between h-full gap-8 z-10">
						<h2 className="text-4xl font-bold">
							How Your Contributions Drive Financial Innovation:
						</h2>

						<ul className="list-disc ml-4">
							<li className="mt-4 text-lg font-thin">
								Innovation Funding: Your contributions support the development of cutting-edge financial technologies and services, ensuring a wide range of innovative solutions for personal and business financial needs.
							</li>
							<li className="mt-4 text-lg font-thin">
								Resource Allocation: Investments help us acquire essential tools and resources to enhance financial literacy, security, and growth.
							</li>
							<li className="mt-4 text-lg font-thin">
								Customer Support: Funds are used to provide exceptional customer service, ensuring that all users have access to the help and guidance they need to achieve their financial goals.
							</li>
							<li className="mt-4 text-lg font-thin">
								Infrastructure Maintenance: Contributions help us maintain and improve our platform, providing a seamless and secure user experience for all financial transactions.
							</li>
						</ul>
						<p className="text-lg font-semibold">
							Alone we can achieve little, but together we can revolutionize finance. Join us on this journey to build a stronger financial future for all.
						</p>

						<Btn className=" self-start w-fit font-bold rounded-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white mt-4">
							Check Us Out Now <MdArrowForward />
						</Btn>
					</div>
				</div>
			</div>
		</section>
	);
}