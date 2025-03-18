import { JSX } from "react";
import { twMerge } from "tailwind-merge";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: string | JSX.Element | JSX.Element[];
	className?: string;
}

export default function Button({ children, className, ...args }: BtnProps) {
	return (
		<button
			{...args}
			className={twMerge(
				"px-6 py-2 cursor-pointer text-blue-300 text-xl font-afacad bg-blue-600 hover:bg-blue-700 duration-300 ",
				className
			)}
		>
			{children}
		</button>
	);
}
