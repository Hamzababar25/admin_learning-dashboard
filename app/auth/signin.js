"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white">
      <div className="flex w-full h-full  ">
        {/* Left Content */}
        <div className="w-3/5 flex justify-center   ">
          <div className="text-center py-8 xl:pr-6 lg:pl-4 2xl:pr-20">
            <div className="h-16 w-16 rounded-full bg-gray-300 mx-auto" />
          </div>
          <div className="w-3/4 2xl:w-4/6 flex flex-col justify-center  xl:mb-40 lg:mb-32 mr-10 2xl:mr-24  ">
            <h2 className="text-2xl font-bold font-malayalam text-gray-800 mb-6">
              Welcome back to{" "}
              <span className="text-[#C39D4C]">Learning App</span>
            </h2>
            <h3 className="text-4xl font-malayalam font-extrabold text-[#C39D4C] mb-6">
              Login
            </h3>

            <form className="space-y-6 mt-3">
              <div>
                <label className="block text-sm font-bold text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="mt-1 w-full h-12 rounded-3xl  border px-4 py-2 focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="mt-1 w-full h-12 rounded-3xl  border  px-4 py-2 focus:border-yellow-500 focus:ring-yellow-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="inline-flex items-center text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="mr-2 rounded border-gray-300"
                  />
                  Remember me
                </label>
                <a href="#" className="text-sm text-yellow-600 hover:underline">
                  Forgot your password?
                </a>
              </div>
              <Link href="/Dashboard">
                <button
                  className="w-full h-12 rounded-3xl bg-gradient-to-r from-[#dab866] 
                to-[#be9337] py-2 text-white font-medium hover:bg-yellow-600"
                >
                  Sign In
                </button>
              </Link>
            </form>

            {/* <div className="my-6 flex items-center">
              <div className="h-px flex-1 bg-gray-300"></div>
              <span className="px-4 text-gray-600 text-sm">or</span>
              <div className="h-px flex-1 bg-gray-300"></div>
            </div> */}

            {/* <div className="flex flex-col space-y-3">
              <button className="flex items-center justify-center rounded-md border bg-white py-2 font-medium text-gray-700 hover:bg-gray-50">
                <img
                  src="/google-icon.svg"
                  alt="Google"
                  className="h-5 w-5 mr-2"
                />
                Sign In with Google
              </button>
              <button className="flex items-center justify-center rounded-md border bg-white py-2 font-medium text-gray-700 hover:bg-gray-50">
                <img
                  src="/facebook-icon.svg"
                  alt="Facebook"
                  className="h-5 w-5 mr-2"
                />
                Sign In with Facebook
              </button>
            </div> */}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-2/4 2xl:w-4/6  relative   ">
          <Image
            src="/cos.png"
            // width={1200}
            // height={1200}
            alt="Loading"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
