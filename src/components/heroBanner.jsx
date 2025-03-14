import { Button } from "@heroui/react";

export const HeroBanner = () => {
	return (
		<div className="flex flex-col justify-center text-center min-h-[calc(100vh-160px)]">
			<h1 className="text-6xl font-bold tracking-tight text-gray-700">Create Your Study Path</h1> <br />
			<span className="text-6xl font-bold tracking-tight text-blue-400">Effortlessly</span>
			<p className="m-4 text-gray-600">
				Create a set of curriculum for anything you want to learn. <br />
				Let us help you to becoming an expertise.
			</p>
			<div className="flex gap-4 justify-center">
				<Button
					color="primary"
					size="lg">
					Start creating
				</Button>
				<Button
					color="default"
					size="lg"
					variant="light">
					Explore Curriculum
				</Button>
			</div>
		</div>
	);
};
