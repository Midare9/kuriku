import { Button } from "@heroui/react";
import Link from "next/link";

export const HeroBanner = () => {
  return (
    <div className="flex flex-col justify-center text-center space-y-4 min-h-[calc(100vh-64px)]">
      <div className="space-y-2">
        <h1 className="text-6xl font-bold tracking-tight text-zinc-500">
          Create Your Study Path
        </h1>{" "}
        <br />
        <span className="text-6xl font-bold tracking-tight">Effortlessly</span>
      </div>
      <p className="text-gray-600">
        Create a set of curriculum for anything you want to learn. <br />
        Let us help you to becoming an expertise.
      </p>
      <div className="flex gap-4 justify-center">
        <Link href="/dashboard">
          <Button color="default" size="lg">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};
