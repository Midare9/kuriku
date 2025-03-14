import { Header } from "@/components/header";
import { Prompt } from "@/components/prompt";
import { Result } from "@/components/result";

export default function Page() {
	return (
		<container className="flex flex-col gap-2 p-4">
			<Header />
			<Prompt />
			<Result />
		</container>
	);
}
