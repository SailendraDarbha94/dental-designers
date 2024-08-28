"use client";

import { getDatabase, ref, set } from "firebase/database";
import { useRouter } from "next/navigation";

import Form from "./Form";

import app from "@/config/firebase";

const Page = () => {
  const router = useRouter();
  const db = getDatabase(app);
  const saveUserData = async (userId: string, name: string, email: string) => {
    try {
      set(ref(db, "users/" + userId), {
        name: name,
        email: email,
        role: "user",
      });
      console.log("User Created");
      router.push("/auth/sign-in");
    } catch (err) {
      console.log(JSON.stringify(err));
    }
  };

  return (
    <main>
      <section className="font-medium p-4 md:px-14">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-3 space-y-4 md:space-y-6 sm:p-8">
              <Form saveUserData={saveUserData} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
