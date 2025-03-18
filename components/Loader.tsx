import clsx from "clsx";
import React from "react";
import { BeatLoader } from "react-spinners";

export default function Loader({ active }: { active: boolean }) {
	return (
		<div
			className={
				`fixed top-0 left-0 w-full h-full z-50 pointer-events-none opacity-0 ` +
				clsx({
					"opacity-100 pointer-events-auto": active,
				})
			}
		>
			<BeatLoader color="#7DB2B6" className={`absolute z-1 left-[50%] top-[50%] -translate-1/2`} />
			<div className="bg-gray-800 opacity-65 absolute top-0 left-0 w-full h-full"></div>
		</div>
	);
}
