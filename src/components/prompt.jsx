import Form from "next/form";
import { Button } from "@heroui/react";

export const Prompt = () => {
	return (
		<container className="flex justify-center">
			<Form
				action="/generate"
				className="flex flex-col gap-2 justify-center items-center w-full">
				<input
					type="text"
					className="w-1/2 h-10 border border-gray-500 rounded-2xl text-center drop-shadow-xl"
					placeholder="Type what subject you want to learn"
				/>
				<Button
					type="submit"
					className="w-1/4"
					color="primary"
					variant="ghost">
					Generate
				</Button>
			</Form>
		</container>
	);
};
