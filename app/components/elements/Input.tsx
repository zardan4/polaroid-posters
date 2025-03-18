import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

export default function Input({ className, ...args }: InputProps) {
	return (
		<input
			className={twMerge(
				"px-4 py-2 text-gray-800 text-xl font-afacad bg-yellow-200 outline-0 placeholder:text-opacity-50",
				className
			)}
			{...args}
		/>
	);
}
