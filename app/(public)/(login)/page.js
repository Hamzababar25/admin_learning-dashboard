"use client";

import { useState } from "react";
import { useLogin } from "@/hooks/useLogin";
import { toast } from "sonner";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { login, loading, error } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(formData);

      console.log(data);

      if (data?.token) {
        toast.success("Login successful");
        setTimeout(() => {
          router.push("/dashboard");
        }, 1000);
      } else {
        toast.error(error || "Login failed");
      }
    } catch (err) {
      toast.error("An error occurred during login");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Left Content - Form Section */}
        <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col px-4 sm:px-6 py-10 md:py-0 relative">
          {/* Logo Section - Positioned at top left */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8">
            <div className="h-16 w-16 rounded-full bg-gray-300" />
          </div>

          {/* Form Container */}
          <div className="w-full max-w-md md:max-w-lg mx-auto mt-16 md:mt-24">
            <h2 className="text-xl sm:text-2xl font-bold font-malayalam text-gray-800 mb-3 sm:mb-6">
              Welcome back to{" "}
              <span className="text-[#C39D4C]">Learning App</span>
            </h2>
            <h3 className="text-3xl sm:text-4xl font-malayalam font-extrabold text-[#C39D4C] mb-4 sm:mb-6">
              Login
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6 mt-3"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-700 mb-1"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  className="w-full h-10 sm:h-12 rounded-3xl border px-4 py-2 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-bold text-gray-700 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full h-10 sm:h-12 rounded-3xl border px-4 py-2 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={18} className="text-gray-500" />
                    ) : (
                      <Eye size={18} className="text-gray-500" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <label
                  htmlFor="remember"
                  className="inline-flex items-center text-sm text-gray-600"
                >
                  <input
                    id="remember"
                    type="checkbox"
                    className="mr-2 rounded border-gray-300"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  Remember me
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-yellow-600 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <button
                className="w-full h-10 sm:h-12 rounded-3xl bg-gradient-to-r from-[#dab866] to-[#be9337] py-2 text-white font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
                type="submit"
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            {/* Mobile-only signup link */}
            <div className="mt-6 text-center md:hidden">
              <p className="text-sm text-gray-600">
                {"Don't have an account? "}
                <Link
                  href="/register"
                  className="text-yellow-600 font-medium hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block md:w-1/2 lg:w-2/5 relative h-screen">
          <Image
            src="/cos.png"
            alt="Login"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            style={{ objectFit: "cover" }}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
}
