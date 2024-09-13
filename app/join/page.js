"use client";
import Logo from "@/Components/Logo";
import Image from "next/image";
import React from "react";
import google from "./google.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
const Joinpage = () => {
  const router = useRouter();

  const GoogleLogin = async () => {
    const { data, session, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.error(`Error during Authentiation: ${error.message}`);
    } else {
      console.log(`Logged in succesfully: ${data}`);
    }

    if (session) {
      router.push("/dashboard");
    }
  };
  return (
    <div className="bg-white h-screen">
      <div className="md:mx-[41rem] mx-44 pt-60 flex md:pt-28">
        <Logo />
      </div>
      <div className="md:mx-[22rem] text-center">
        <h2 className="md:text-[2.6rem] text-3xl text-black font-normal p-6">
          Save the right way, <br /> Use{" "}
          <span className="text-[#06D6A0] font-medium">SavePal</span>
        </h2>
      </div>
      <div className="mx-auto">
        <button
          onClick={GoogleLogin}
          className="bg-[#D5DCF9] mx-auto lg:mx-[35vw] flex p-2 rounded-full md:w-96 w-[20rem] border border-gray-400"
        >
          <Image alt="google-img" className="h-7 w-7 mx-3" src={google} />
          <h4 className="text-black text-[19px] font-medium px-1">
            Continue with google.
          </h4>
        </button>
        <p className="text-black mx-auto w-96 py-3 md:px-0 px-5">
          By clicking continue you agree to the{" "}
          <Link href="t&c" className="text-blue-700">
            terms and conditions
          </Link>{" "}
          and{" "}
          <Link href="privacy-policy" className="text-blue-700">
            privacy policy
          </Link>{" "}
          of SavePal.
        </p>
      </div>
    </div>
  );
};

export default Joinpage;
