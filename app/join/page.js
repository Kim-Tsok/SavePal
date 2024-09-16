"use client";
import Logo from "@/Components/Logo";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import google from "./google.png";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient"; // Ensure your Supabase client is set up properly
import { useRouter } from "next/navigation";

const Joinpage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // This ensures that when the authentication state changes (like after a user logs in), we can act on it
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        // If the user is authenticated, redirect to the dashboard
        router.push("/dashboard");
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  const GoogleLogin = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "http://localhost:3000/dashboard", // Change this to your production URL
        },
      });
      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
      setLoading(false); // Stop loading if there's an error
    }
  };

  return (
    <div className="bg-white h-screen">
      <div className="md:mx-[38rem] mx-44 pt-60 flex md:pt-28">
        <Logo />
      </div>
      <div className="md:mx-[22rem] text-center">
        <h2 className="md:text-[2.6rem] leading-tight text-3xl text-black font-medium p-6">
          Save the right way, <br /> Use{" "}
          <span className="text-[#06D6A0] font-semibold">Padi</span>
        </h2>
      </div>
      <div className="mx-auto">
        <button
          onClick={GoogleLogin}
          className="bg-[#d5dcf97a] mx-auto flex p-2 rounded-full md:w-96 w-[20rem] border border-[#d5dcf9]"
        >
          <Image alt="google-img" className="h-7 w-7 mx-3" src={google} />
          <h4 className="text-black text-[17px] font-medium py-[2px]">
            {loading ? "Authenticating..." : "Continue with Google"}
          </h4>
        </button>
        <p className="text-black mx-auto w-96 py-3 md:px-0 px-5">
          By clicking continue you agree to the{" "}
          <Link href="/t&c" className="text-blue-700">
            terms and conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" className="text-blue-700">
            privacy policy
          </Link>{" "}
          of Padi.
        </p>
      </div>
    </div>
  );
};

export default Joinpage;
