import { Button } from "@heroui/react";
import Link from "next/link";

export const HeroBanner = () => {
	return (
		<div className="flex flex-col justify-center text-center min-h-[calc(100vh-160px)]">
			<h1 className="text-6xl font-bold tracking-tight text-zinc-500">Create Your Study Path</h1> <br />
			<span className="text-6xl font-bold tracking-tight">Effortlessly</span>
			<p className="m-4 text-gray-600">
				Create a set of curriculum for anything you want to learn. <br />
				Let us help you to becoming an expertise.
			</p>
			<div className="flex gap-4 justify-center">
				<Link href="/dashboard">
					<Button
						color="default"
						size="lg">
						Start creating
					</Button>
				</Link>
			</div>
		</div>
	);
};
