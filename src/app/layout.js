import { Inter } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "700"], // Adjust as needed
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Kuri-ku | Curriculum Generator",
	description: "Curriculum Generator",
	icons: {
		icon: "/icon.svg",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${roboto.className}`}>
				<HeroUIProvider>{children}</HeroUIProvider>
			</body>
		</html>
	);
}
