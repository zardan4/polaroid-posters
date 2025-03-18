"use client";

import { Dispatch, SetStateAction, useRef, useState } from "react";
import Button from "./elements/Button";
import Input from "./elements/Input";
import SettingList, { SettingListItem } from "./SettingList";
import { PosterImage } from "./Poster";
import clsx from "clsx";
// @ts-expect-error no types provided by a library
import domtoimage from "dom-to-image";
import Loader from "./Loader";
import FilerobotImageEditor from "react-filerobot-image-editor";

export default function Settings({
	poster,
	setPoster,
	posterRef,
}: {
	poster: PosterImage;
	setPoster: Dispatch<SetStateAction<PosterImage>>;
	posterRef: React.RefObject<HTMLDivElement | null>;
}) {
	const pictureInputRef = useRef<HTMLInputElement>(null);
	const [saving, setSaving] = useState(false);

	const [isImgEditorShown, setIsImgEditorShown] = useState(false);
	const [imgEditorTmp, setImgEditorTmp] = useState<string | undefined>(
		undefined
	);

	return (
		<div>
			{isImgEditorShown ? (
				<FilerobotImageEditor source={imgEditorTmp as string} savingPixelRatio={1} previewPixelRatio={1} />
				// <FilerobotImageEditor
				// 	source={imgEditorTmp as string}
				// 	onSave={(editedImageObject, designState) =>
				// 		console.log("saved", editedImageObject, designState)
				// 	}
				// 	// onClose={closeImgEditor}
				// 	annotationsCommon={{
				// 		fill: "#ff0000",
				// 	}}
				// 	savingPixelRatio={1}
				// 	previewPixelRatio={1}
				// 	Text={{ text: "Filerobot..." }}
				// 	Rotate={{ angle: 90, componentType: "slider" }}
				// 	// tabsIds={[editor.TABS.ADJUST, editor.TABS.ANNOTATE, editor.TABS.WATERMARK]} // or {['Adjust', 'Annotate', 'Watermark']}
				// 	// defaultTabId={editor.TABS.ANNOTATE} // or 'Annotate'
				// 	// defaultToolId={editor.TOOLS.TEXT} // or 'Text'
				// />
			) : null}

			<h3 className="font-afacad lowercase text-4xl text-gray-800 font-medium">
				Poster
			</h3>
			<div className="flex gap-4 mt-4 flex-col sm:flex-row">
				<Button
					onClick={() => {
						pictureInputRef.current?.click();
					}}
					className="w-full sm:w-fit"
				>
					add picture
				</Button>
				<input
					onChange={() => {
						const file = pictureInputRef.current?.files?.[0];

						if (file && file.type.startsWith("image/")) {
							// setPoster({
							// 	...poster,
							// 	pictureURL: URL.createObjectURL(file),
							// });
							setIsImgEditorShown(true);
							setImgEditorTmp(URL.createObjectURL(file));
						}
					}}
					type="file"
					accept="image/png, image/jpeg"
					className="hidden"
					ref={pictureInputRef}
				/>
				<Button
					className={
						"duration-300 w-full sm:w-fit " +
						clsx({
							"opacity-0 max-sm:hidden": !poster.pictureURL,
						})
					}
					onClick={() => {
						setPoster({
							...poster,
							pictureURL: undefined,
						});
					}}
				>
					remove picture
				</Button>
			</div>
			<h3 className="font-afacad lowercase text-4xl text-gray-800 font-medium mt-6">
				title
			</h3>
			<Input
				onChange={(e) => {
					setPoster({
						...poster,
						title: e.target.value.trim()
							? e.target.value.trim()
							: undefined,
					});
				}}
				placeholder="enter movie’s title here"
				className="mt-4 w-full"
			/>
			<h3 className="font-afacad lowercase text-4xl text-gray-800 font-medium mt-6">
				year
			</h3>
			<Input
				onChange={(e) => {
					setPoster({
						...poster,
						year: Number(e.target.value)
							? Number(e.target.value)
							: undefined,
					});
				}}
				placeholder="enter movie’s year here"
				className="mt-4 w-full"
			/>
			<h3 className="font-afacad lowercase text-4xl text-gray-800 font-medium mt-6">
				sublist
			</h3>
			<SettingList
				className="mt-4"
				items={poster.sublist}
				setItems={(newItems: SettingListItem[]) => {
					setPoster({
						...poster,
						sublist: newItems,
					});
				}}
			/>
			{/*  */}
			<h3 className="font-afacad lowercase text-4xl text-gray-800 font-medium mt-6">
				additional
			</h3>
			<div className="grid gap-4 sm:grid-cols-2 mt-4">
				<div>
					<h4 className="text-gray-800 text-2xl font-afacad">
						poster padding(px)
					</h4>
					<Input
						onChange={(e) => {
							const parsed = parseInt(e.target.value);
							setPoster({
								...poster,
								additional: {
									...poster.additional,
									posterPadding: parsed ? parsed : 0,
								},
							});
						}}
						value={poster.additional.posterPadding}
						placeholder="ex. 20"
						className="w-full mt-2"
					/>
				</div>
				<div>
					<h4 className="text-gray-800 text-2xl font-afacad">
						sublist gap(px)
					</h4>
					<Input
						onChange={(e) => {
							const parsed = parseInt(e.target.value);
							setPoster({
								...poster,
								additional: {
									...poster.additional,
									sublistGap: parsed ? parsed : 0,
								},
							});
						}}
						value={poster.additional.sublistGap}
						placeholder="ex. 14"
						className="w-full mt-2"
					/>
				</div>
				<div>
					<h4 className="text-gray-800 text-2xl font-afacad">
						background color
					</h4>
					<Input
						onChange={(e) => {
							setPoster({
								...poster,
								additional: {
									...poster.additional,
									bgColor: e.target.value,
								},
							});
						}}
						className="w-full mt-2 h-11"
						type="color"
						value={poster.additional.bgColor}
					/>
				</div>
				<div>
					<h4 className="text-gray-800 text-2xl font-afacad">
						text color
					</h4>
					<Input
						onChange={(e) => {
							setPoster({
								...poster,
								additional: {
									...poster.additional,
									textColor: e.target.value,
								},
							});
						}}
						className="w-full mt-2 h-11"
						type="color"
						value={poster.additional.textColor}
					/>
				</div>
				<div>
					<h4 className="text-gray-800 text-2xl font-afacad">
						photo corner radius(px)
					</h4>
					<Input
						onChange={(e) => {
							const parsed = parseInt(e.target.value);
							setPoster({
								...poster,
								additional: {
									...poster.additional,
									photoCornerRadius: parsed ? parsed : 0,
								},
							});
						}}
						placeholder="ex. 16"
						className="w-full mt-2"
						value={poster.additional.photoCornerRadius}
					/>
				</div>
				<div>
					<h4 className="text-gray-800 text-2xl font-afacad">
						bottom space(px)
					</h4>
					<Input
						onChange={(e) => {
							const parsed = parseInt(e.target.value);
							setPoster({
								...poster,
								additional: {
									...poster.additional,
									bottomSpace: parsed ? parsed : 0,
								},
							});
						}}
						placeholder="ex. 100"
						className="w-full mt-2"
						value={poster.additional.bottomSpace}
					/>
				</div>
			</div>
			{/*  */}
			<Button
				onClick={() => {
					setSaving(true);
					domtoimage
						.toPng(posterRef.current as HTMLElement, {
							width: posterRef.current?.clientWidth,
							height: posterRef.current?.clientHeight,
						})
						.then(function (dataUrl: string) {
							const link = document.createElement("a");
							link.download = poster.title + ".png";
							link.href = dataUrl;
							link.click();
							link.remove();

							setSaving(false);
						})
						.catch(() => {
							setSaving(false);
						});
					// html2canvas(posterRef.current as HTMLElement, {
					// 	width: posterRef.current?.clientWidth,
					// 	height: posterRef.current?.clientHeight,
					// }).then(canvas => {
					// 	document.body.appendChild(canvas);
					// });;
				}}
				className="mt-7 w-full bg-gray-600 text-yellow-200 hover:bg-gray-800"
			>
				save
			</Button>
			<Loader active={saving} />
		</div>
	);
}
