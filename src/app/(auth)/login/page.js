"use client";
import { Button, Input } from "@heroui/react";
import { OauthButton } from "../_components/oauthButton";
import { useActionState } from "react";
import { loginAction } from "./action";
import Link from "next/link";
import { StateStatus } from "@/libs/state-status";

export default function Page() {
  const [state, formAction, pending] = useActionState(loginAction, null);

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          Welcome back
        </h1>

        <form className="mt-8 space-y-6" action={formAction}>
          <div className="space-y-4">
            <Input
              label="Email address"
              placeholder="Enter your email"
              name="email"
              type="email"
              variant="underlined"
              size="lg"
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              name="password"
              type="password"
              variant="underlined"
              size="lg"
            />
          </div>

          <Button
            isLoading={pending}
            type="submit"
            fullWidth
            color="primary"
            size="lg"
          >
            Sign in
          </Button>
          <StateStatus state={state} />
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              or continue with
            </span>
          </div>
        </div>

        <OauthButton />

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-primary-600 hover:text-primary-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
