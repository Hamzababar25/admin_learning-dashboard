"use client";

import Sidebar from "@/app/Sidebar";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  const noLayoutRoutes = ["/"];

  const isNoLayoutRoute = noLayoutRoutes.includes(pathname);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {!isNoLayoutRoute && <Sidebar />}
      <main
        className={`${
          isNoLayoutRoute
            ? "w-full"
            : isMobile
            ? "w-full pt-16"
            : "md:ml-64 w-full"
        } transition-all duration-300 ease-in-out flex-grow overflow-x-hidden`}
      >
        <div className="">{children}</div>
      </main>
    </div>
  );
}
