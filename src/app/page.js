import { Header } from "@/_components/header";
import { Prompt } from "@/_components/prompt";
import { Result } from "@/_components/result";

export default function Page() {
	return (
		<container className="flex flex-col gap-2 p-4">
			<Header />
			<Prompt />
			<Result />
		</container>
	);
}


