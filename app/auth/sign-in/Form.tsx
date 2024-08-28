"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";

const Form = ({ loginUser }: any) => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const loginDetails = Object.fromEntries(formData);

    await loginUser(loginDetails);
  };

  return (
    <form
      className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      onSubmit={handleSubmit}
    >
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in to your account
        </h1>
        <div className="space-y-4 md:space-y-6">
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="email"
            >
              Your email
            </label>
            <input
              className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              id="email"
              name="email"
              required={true}
              type="email"
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              id="password"
              name="password"
              required={true}
              type="password"
            />
          </div>
          <p className="text-center text-sm">
            Don&apos;t have an account ?{" "}
            <Link className="text-primary-500" href="/auth/sign-up">
              Sign Up
            </Link>
          </p>
          <br />
          <div className="w-full flex justify-center">
            <Button color="primary" type="submit" variant="solid">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
