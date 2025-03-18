"use client";

import clsx from "clsx";
import { SettingListItem } from "./SettingList";

export type PosterImage = {
	pictureURL?: string;
	title: string | undefined;
	year: number | undefined;
	sublist: SettingListItem[];
	additional: {
		posterPadding: number;
		sublistGap: number;
		bgColor: string;
		textColor: string;
		photoCornerRadius: number;
		bottomSpace: number;
	};
};

export default function Poster({
	poster,
	posterRef,
}: {
	poster: PosterImage;
	posterRef: React.RefObject<HTMLDivElement | null>;
}) {
	return (
		<div
			ref={posterRef}
			className={
				`font-roboto h-fit w-full max-w-110 max-lg:mx-auto ` + clsx({})
			}
			style={{
				backgroundColor: poster.additional.bgColor,
				color: poster.additional.textColor,
				padding: `${poster.additional.posterPadding}px`,
			}}
		>
			<div
				className={
					"bg-gray-800 w-full " +
					clsx({
						"aspect-video": !poster.pictureURL,
					})
				}
				style={{
					borderRadius: `${poster.additional.photoCornerRadius}px`,
					overflow: "hidden",
				}}
			>
				{poster.pictureURL ? (
					<img
						className="w-full block"
						src={poster.pictureURL}
						alt={poster.title}
					/>
				) : null}
			</div>
			<div className="mt-4">
				<div className="uppercase">
					<span className="text-4xl font-black">{poster.title}</span>
					&nbsp; &nbsp; &nbsp;
					<span className="text-2xl ">{poster.year}</span>
				</div>
			</div>
			<div
				className="mt-4 flex flex-col"
				style={{
					gap: `${poster.additional.sublistGap}px`,
					marginBottom: `${poster.additional.bottomSpace}px`,
				}}
			>
				{poster.sublist.map((item, i) => (
					<div key={i} className="flex items-center">
						<div className="text-base italic">{item.title}</div>
						<div className="ml-2 text-[18px] font-medium uppercase">
							{item.value}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
