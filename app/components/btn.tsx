import React from "react";
import Link from "next/link";

export default function Btn({
	children,
	styles,
	className,
	link,
	onClick,
}: {
	children: React.ReactNode;
	className?: string;
	styles?: any;
	link?: string;
	onClick?: () => void;
}) {
	return (
		<button
			style={styles}
			onClick={onClick}
			className={"p-2 bg-[#49C4A2] text-white cursor-pointer " + className}>
			{link ? <Link href={link}>{children}</Link> : <>{children}</>}
		</button>
	);
}
