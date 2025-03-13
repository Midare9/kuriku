import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@heroui/react";

export const Result = () => {
	return (
		<container className="flex gap-4 mt-4">
			<Card className="max-w-[400px]">
				<CardHeader className="flex gap-3">
					<div className="flex flex-col">
						<p className="text-md">
							<b>Week 1</b> | Web Development Intro
						</p>
					</div>
				</CardHeader>
				<Divider />
				<CardBody>
					<p>You will learn basic of web development and its process.</p>
					<ul>
						<li>- Full-Stack Development Intro</li>
						<li>- Fundamental of HTML</li>
						<li>- Fundamental of CSS</li>
					</ul>
				</CardBody>
				<Divider />
			</Card>
		</container>
	);
};
