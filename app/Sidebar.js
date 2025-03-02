"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faBook,
  faUser,
  faQuestionCircle,
  faShieldAlt,
  faFileContract,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { MdInterests } from "react-icons/md";

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="w-64 h-screen  p-4 fixed">
      <div className="mb-12 flex justify-center items-center">
        <div className="bg-[#fdf9ec] w-24 h-24 rounded-full p-3 mt-6">
          <h1 className="text-xl font-bold pt-5 pl-2">LOGO</h1>
        </div>
      </div>
      <div className="h-12 ">
        <h1 className="text-lg font-bold pl-3 ">Main Menu</h1>
      </div>
      <nav>
        <ul>
          <li
            className={`mb-4 ${
              router.pathname === "/dashboard" ? "bg-blue-100" : ""
            }`}
          >
            <Link href="/Dashboard">
              <div
                className={`flex items-center p-2 ${
                  router.pathname === "/dashboard"
                    ? "text-blue-600"
                    : "text-gray-700"
                } hover:text-blue-600`}
              >
                <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
                Dashboard
              </div>
            </Link>
          </li>
          <li
            className={`mb-4 ${
              router.pathname === "/manage-courses" ? "bg-blue-100" : ""
            }`}
          >
            <Link href="/Courses">
              <div
                className={`flex items-center p-2 ${
                  router.pathname === "/manage-courses"
                    ? "text-blue-600"
                    : "text-gray-700"
                } hover:text-blue-600`}
              >
                <FontAwesomeIcon icon={faBook} className="mr-2" />
                Manage Courses
              </div>
            </Link>
          </li>
          <li
            className={`mb-4 ${
              router.pathname === "/manage-users" ? "bg-blue-100" : ""
            }`}
          >
            <Link href="/Users">
              <div
                className={`flex items-center p-2 ${
                  router.pathname === "/manage-users"
                    ? "text-blue-600"
                    : "text-gray-700"
                } hover:text-blue-600`}
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Manage Users
              </div>
            </Link>
          </li>
          <li
            className={`mb-4 ${
              router.pathname === "/qa-forum" ? "bg-blue-100" : ""
            }`}
          >
            <Link href="/QA">
              <div
                className={`flex items-center p-2 ${
                  router.pathname === "/qa-forum"
                    ? "text-blue-600"
                    : "text-gray-700"
                } hover:text-blue-600`}
              >
                <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
                Q&A Forum
              </div>
            </Link>
          </li>
          <li
            className={`mb-4 ${
              router.pathname === "/privacy-policy" ? "bg-blue-100" : ""
            }`}
          >
            <Link href="/Privacy">
              <div
                className={`flex items-center p-2 ${
                  router.pathname === "/privacy-policy"
                    ? "text-blue-600"
                    : "text-gray-700"
                } hover:text-blue-600`}
              >
                <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
                Privacy Policy
              </div>
            </Link>
          </li>
          <li
            className={`mb-4 ${
              router.pathname === "/interests" ? "bg-blue-100" : ""
            }`}
          >
            <Link href="/Interests">
              <div
                className={`flex items-center p-2 ${
                  router.pathname === "/interests"
                    ? "text-blue-600"
                    : "text-gray-700"
                } hover:text-blue-600`}
              >
                <MdInterests className="mr-2" />
                Interests
              </div>
            </Link>
          </li>
          {/* <li
            className={`mb-4 ${
              router.pathname === "/terms-conditions" ? "bg-blue-100" : ""
            }`}
          >
            <Link href="/terms-conditions">
              <div
                className={`flex items-center p-2 ${
                  router.pathname === "/terms-conditions"
                    ? "text-blue-600"
                    : "text-gray-700"
                } hover:text-blue-600`}
              >
                <FontAwesomeIcon icon={faFileContract} className="mr-2" />
                Terms & Conditions
              </div>
            </Link>
          </li> */}
          <li>
            <Link href="/logout">
              <div
                className={`flex items-center p-2 text-gray-700 hover:text-blue-600`}
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                Logout
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
