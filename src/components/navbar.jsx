import { Button } from "@heroui/react";
import Link from "next/link";

export const Navbar = () => {
	return (
		<navbar>
			<div className="flex items-center justify-between h-20 pl-48 pr-48">
				<div className="kuriku-title">kuriku | curriculum generator</div>
				<div className="flex items-center gap-6">
					<Button
						color="primary"
						variant="ghost">
						Sign in
					</Button>
					<Link href="/">Get started</Link>
				</div>
			</div>
		</navbar>
	);
};
