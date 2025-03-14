import { Button } from "@heroui/react";
import Link from "next/link";

export const Navbar = () => {
	return (
		<div className="flex items-center justify-between h-20 pl-48 pr-48">
			<div className="kuriku-title">kuriku | curriculum generator</div>
			<div className="flex items-center gap-6">
				<Link href="/login">
					<Button
						color="default"
						variant="ghost">
						Sign in
					</Button>
				</Link>
				<Link href="/dashboard">Get started</Link>
			</div>
		</div>
	);
};
