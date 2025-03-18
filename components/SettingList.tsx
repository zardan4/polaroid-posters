import { twMerge } from "tailwind-merge";
import Input from "./elements/Input";
import Button from "./elements/Button";

export type SettingListItem = {
	title: string;
	value: string;
};

export default function SettingList({
	items,
	className,
	setItems,
}: {
	items: SettingListItem[];
	setItems: (newItems: SettingListItem[]) => void;
	className?: string;
}) {
	return (
		// <input
		// 	className={twMerge(
		// 		"px-4 py-2 text-gray-800 text-xl font-afacad bg-yellow-200 outline-0 placeholder:text-opacity-50",
		// 		className
		// 	)}
		// 	placeholder={placeholder}
		// />
		<div className={twMerge("", className)}>
			<div className="flex flex-col gap-4">
				{items.map((item, index) => (
					<div key={index}>
						<input
							className="ml-9 text-gray-800 text-2xl font-afacad bg-none outline-0 underline placeholder:no-underline"
							placeholder="title"
							value={item.title}
							onChange={(e) => {
								const newItems = [...items];
								newItems[index].title = e.target.value;
								setItems(newItems);
							}}
						/>
						<div className="flex items-center mt-2">
							<button
								className="cursor-pointer"
								onClick={() => {
									const newItems = [...items].filter(
										(_, i) => i !== index
									);
									setItems(newItems);
								}}
							>
								<span className="material-symbols-outlined !text-[28px] text-gray-800">
									close
								</span>
							</button>
							<Input
								value={item.value}
								onChange={(e) => {
									const newItems = [...items];
									newItems[index].value = e.target.value;
									setItems(newItems);
								}}
								className="ml-2 w-full"
								placeholder="enter point’s value here"
							/>
						</div>
					</div>
				))}
			</div>
			{/*  */}
			<Button
				onClick={() => {
					const newItems = [...items];
					newItems.push({ title: "", value: "" });
					setItems(newItems);
				}}
				className="mt-4 w-full sm:w-fit"
			>
				add punct
			</Button>
		</div>
	);
}
