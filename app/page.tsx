import Main from "./components/Main";

export default function Home() {
	return (
		<div className="container mx-auto px-2 py-8 md:py-10">
			<h1 className="text-4xl md:text-5xl text-blue-300 font-afacad lowercase">
				Create <strong>your own</strong> polaroid movie poster
			</h1>
			<div className="mt-5 md:mt-8">
				<Main />
			</div>
		</div>
	);
}
