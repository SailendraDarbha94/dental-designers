"use client";

import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

import Form from "./Form";

import app from "@/config/firebase";
import { ToastContext } from "@/providers/ToastContextProvider";

interface LoginUser {
  email: string;
  password: string;
}
const Page = () => {
  const router = useRouter();
  const auth = getAuth(app);

  const { toast } = useContext(ToastContext);

  const [loading, setLoading] = useState<boolean>(false);

  const loginUser = async (userDetails: LoginUser) => {
    setLoading(true);

    setPersistence(auth, browserLocalPersistence).then(() => {
      signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
        .then((cb) => {
          console.log(cb);
          if (cb.user) {
            setTimeout(() => {
              router.push("/home");
            }, 1000);
            setLoading(false);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
          toast({
            message: `${JSON.stringify(err.message)}`,
            type: "error",
          });
        });
    });
  };

  return (
    <main className="min-h-screen">
      <section className="font-pMedium p-4">
        <div className="flex flex-col items-center justify-center mx-auto md:min-h-screen lg:py-0">
          {loading ? (
            <span className="block mx-auto text-3xl animate-pulse">
              Loading...
            </span>
          ) : (
            <Form loginUser={loginUser} />
          )}
        </div>
      </section>
    </main>
  );
};

export default Page;
