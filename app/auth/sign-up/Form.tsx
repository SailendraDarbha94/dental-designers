"use client";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useContext, useState } from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";

import { emptyUserFormData, User } from "./constants";

import app from "@/config/firebase";
import { ToastContext } from "@/providers/ToastContextProvider";

const Form = ({ saveUserData }: any) => {
  const auth = getAuth(app);

  const [loading, setLoading] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<User>(emptyUserFormData);
  const { toast } = useContext(ToastContext);
  const handleChange = (e: any) => {
    const { name, value }: any = e.target;

    setUserDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    if (userDetails.password.length < 8) {
      setLoading(false);
      toast({
        message: "Password must be at least 8 characters long",
        type: "warning",
      });

      return;
    }

    if (userDetails.password !== userDetails.confirmPassword) {
      setLoading(false);
      toast({
        message: "Password and Confirm Password are not matching",
        type: "warning",
      });
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        userDetails.email,
        userDetails.password,
      );

      saveUserData(user.uid, userDetails.name, userDetails.email);
      setUserDetails(emptyUserFormData);
      toast({
        message: "User Account Created",
        type: "success",
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast({
        message: `${JSON.stringify(err)}`,
        type: "error",
      });
    }
  };

  return (
    <>
      {loading ? (
        <div className="w-full h-full flex justify-center items-center font-pExtraBold">
          Loading...
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create Account
          </h1>
          <br />
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              id="name"
              name="name"
              placeholder=""
              required={true}
              type="text"
              value={userDetails.name}
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="email"
            >
              Electronic Mail Address
            </label>
            <input
              className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              id="email"
              name="email"
              placeholder="someone@example.com"
              required={true}
              type="email"
              value={userDetails.email}
              onChange={handleChange}
            />
          </div>
          <br />
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
              placeholder=""
              required={true}
              type="password"
              value={userDetails.password}
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              id="confirmPassword"
              name="confirmPassword"
              placeholder=""
              required={true}
              type="password"
              value={userDetails.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <p className="text-center text-sm my-4">
            Already have an account ?{" "}
            <Link className="text-primary-500" href="/auth/sign-in">
              Login
            </Link>{" "}
          </p>
          <br />
          <div className="w-full flex justify-center">
            <Button color="primary" type="submit" variant="solid">
              Submit
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default Form;
