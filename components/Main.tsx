"use client";

import { useRef, useState } from "react";
import Poster, { PosterImage } from "./Poster";
import Settings from "./Settings";

export default function Main() {
	const posterRef = useRef<HTMLDivElement>(null);
	const [poster, setPoster] = useState<PosterImage>({
		pictureURL: undefined,
		title: undefined,
		year: undefined,
		sublist: [
			{ title: "directed by", value: "" },
			{ title: "genres", value: "" },
			{ title: "starring", value: "" },
		],
		additional: {
			posterPadding: 24,
			sublistGap: 8,
			bgColor: '#F0F0F0',
			textColor: '#2f2f2f',
			photoCornerRadius: 0,
			bottomSpace: 120,
		}
	});

	return (
		<div className="grid grid-cols-12 gap-5">
			<div className="col-span-12 bg-blue-300 p-5 md:p-7 md:pb-8 lg:col-span-6 xl:col-span-7">
				<Settings posterRef={posterRef} poster={poster} setPoster={setPoster} />
			</div>
			<div className="col-span-12 lg:col-span-6 xl:col-span-5">
				<Poster posterRef={posterRef} poster={poster} />
			</div>
		</div>
	);
}
