"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  HelpCircle,
  Shield,
  FileText,
  LogOut,
  Menu,
  X,
  Wallpaper,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      activePath: "/dashboard",
    },
    {
      href: "/courses",
      label: "Manage Courses",
      icon: <BookOpen size={20} />,
      activePath: "/manage-courses",
    },
    {
      href: "/interests",
      label: "Manage Interest",
      icon: <BookOpen size={20} />,
      activePath: "/manage-interest",
    },
    {
      href: "/banners",
      label: "Manage Banners",
      icon: <Wallpaper size={20} />,
      activePath: "/manage-banners",
    },
    {
      href: "/users",
      label: "Manage Users",
      icon: <Users size={20} />,
      activePath: "/manage-users",
    },
    {
      href: "/QA",
      label: "Q&A Forum",
      icon: <HelpCircle size={20} />,
      activePath: "/qa-forum",
    },
    {
      href: "/Privacy",
      label: "Privacy Policy",
      icon: <Shield size={20} />,
      activePath: "/privacy-policy",
    },
    {
      href: "/Terms",
      label: "Terms & Conditions",
      icon: <FileText size={20} />,
      activePath: "/terms-conditions",
    },
    {
      href: "/logout",
      label: "Logout",
      icon: <LogOut size={20} />,
      activePath: "",
    },
  ];

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 bg-white rounded-md shadow-md"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-64 h-screen bg-white shadow-md fixed top-0 left-0 z-40 md:translate-x-0`}
      >
        <div className="mb-8 flex justify-center items-center">
          <div className="bg-[#fdf9ec] w-24 h-24 rounded-full p-3 mt-6 border flex items-center justify-center">
            <h1 className="text-xl font-bold text-amber-500">LOGO</h1>
          </div>
        </div>

        <div className="h-10 mb-2">
          <h1 className="text-lg font-semibold pl-3 text-gray-800">
            Main Menu
          </h1>
        </div>

        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`mb-2 rounded-r-lg ${
                  pathname === item.href || pathname === item.activePath
                    ? "bg-[#F6DC942E] border-l-4 border-[#BB8F32] "
                    : ""
                }`}
              >
                <Link href={item.href}>
                  <div
                    className={`flex items-center px-4 py-3 ${
                      pathname === item.href || pathname === item.activePath
                        ? "text-[#BB8F32]"
                        : "text-gray-700"
                    } hover:text-[#BB8F32] transition-colors duration-200`}
                  >
                    <span className="mr-3 opacity-75">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
