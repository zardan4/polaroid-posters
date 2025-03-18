import type { Metadata } from "next";
import { Afacad, Roboto } from "next/font/google";
import 'material-symbols';
import "./globals.css";

const afacad = Afacad({
	variable: "--font-afacad",
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	style: ["normal"],
});

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
	style: ["italic", "normal"],
	weight: ["400", "500", "900"],
});

export const metadata: Metadata = {
	title: "Movie polaroid banner",
	description: "A movie polaroid banner generator based on custom data.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${afacad.variable} ${roboto.variable} antialiased bg-gray-600`}
			>
				{children}
			</body>
		</html>
	);
}
