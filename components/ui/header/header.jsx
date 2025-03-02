// components/ui/Header.jsx
import React, { useState, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../avatar";
import { useRouter } from "next/navigation";
import { getAdminDetails, logoutAdmin } from "@/services/admin";
import { LogOut, User, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = ({ title }) => {
  const [admin, setAdmin] = useState({
    name: "Loading...",
    email: "",
    role: "",
    image: "",
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await getAdminDetails();
        if (response.success && response.admin) {
          setAdmin({
            name: response.admin.name || "Unknown User",
            email: response.admin.email || "admin@example.com",
            role: response.admin.role || "Admin",
            image: response.admin.image || "https://github.com/shadcn.png",
          });
        }
      } catch (err) {
        console.error("Error fetching admin data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminData();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await logoutAdmin();
      if (response.success) {
        router.push("/");
      }
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const handleViewProfile = () => {
    router.push("/profile");
  };

  return (
    <header className="flex items-center justify-between py-4 px-6 mb-3 bg-white shadow-sm">
      <div>
        <h1 className="text-xl font-bold text-gray-800">{title}</h1>
      </div>

      <div className="flex items-center space-x-3">
        <button className="text-gray-600 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.7492 2.92127C15.3326 2.75 14.8044 2.75 13.748 2.75C12.6917 2.75 12.1635 2.75 11.7469 2.92127C11.1914 3.14963 10.75 3.58765 10.5199 4.13896C10.4149 4.39063 10.3738 4.68331 10.3577 5.11024C10.3341 5.73764 10.0098 6.31838 9.46199 6.6323C8.91412 6.94621 8.24526 6.93448 7.68597 6.6411C7.30537 6.44146 7.02942 6.33045 6.75728 6.2949C6.16115 6.217 5.55825 6.37733 5.08122 6.7406C4.72345 7.01305 4.45936 7.46701 3.93118 8.37492C3.40301 9.28284 3.13892 9.73679 3.08006 10.1805C3.00157 10.7722 3.16312 11.3705 3.52916 11.8439C3.69624 12.0601 3.93104 12.2416 4.29546 12.4689C4.83119 12.803 5.1759 13.3721 5.17587 14C5.17584 14.6279 4.83114 15.1969 4.29546 15.5309C3.93098 15.7583 3.69614 15.9399 3.52905 16.1561C3.16301 16.6295 3.00147 17.2277 3.07995 17.8194C3.13881 18.2631 3.4029 18.7171 3.93107 19.625C4.45925 20.5329 4.72334 20.9869 5.08111 21.2593C5.55813 21.6225 6.16103 21.7829 6.75717 21.705C7.0293 21.6695 7.30523 21.5584 7.68579 21.3589C8.24513 21.0655 8.91403 21.0537 9.46193 21.3676C10.0098 21.6816 10.334 22.2623 10.3577 22.8899C10.3738 23.3167 10.4149 23.6094 10.5199 23.8611C10.75 24.4123 11.1914 24.8504 11.7469 25.0788C12.1635 25.25 12.6917 25.25 13.748 25.25C14.8044 25.25 15.3326 25.25 15.7492 25.0788C16.3047 24.8504 16.7461 24.4123 16.9761 23.8611C17.0812 23.6094 17.1224 23.3167 17.1385 22.8898C17.1621 22.2623 17.4862 21.6816 18.0341 21.3676C18.5819 21.0536 19.2509 21.0655 19.8102 21.3589C20.1908 21.5584 20.4667 21.6694 20.7388 21.7049C21.3349 21.7829 21.9378 21.6225 22.4148 21.2593C22.7727 20.9868 23.0367 20.5329 23.5649 19.6249C24.0931 18.717 24.3571 18.2631 24.4161 17.8194C24.4945 17.2277 24.3329 16.6293 23.967 16.1559C23.7998 15.9398 23.565 15.7582 23.2005 15.5309C22.6649 15.1969 22.3202 14.6277 22.3202 13.9999C22.3202 13.372 22.6649 12.8031 23.2005 12.4691C23.5651 12.2417 23.7999 12.0602 23.9671 11.8439C24.3331 11.3706 24.4946 10.7722 24.4162 10.1806C24.3572 9.73687 24.0932 9.28291 23.565 8.375C23.0368 7.46709 22.7728 7.01313 22.4149 6.74068C21.9379 6.3774 21.335 6.21708 20.7389 6.29498C20.4668 6.33053 20.1908 6.44153 19.8103 6.64115C19.251 6.93454 18.5821 6.94627 18.0342 6.63233C17.4863 6.3184 17.1621 5.73762 17.1383 5.11018C17.1223 4.68329 17.0812 4.39062 16.9761 4.13896C16.7461 3.58765 16.3047 3.14963 15.7492 2.92127ZM13.748 17.375C15.6262 17.375 17.1487 15.864 17.1487 14C17.1487 12.136 15.6262 10.625 13.748 10.625C11.8699 10.625 10.3473 12.136 10.3473 14C10.3473 15.864 11.8699 17.375 13.748 17.375Z"
              fill="#212121"
            />
          </svg>
        </button>

        <button className="relative text-gray-600 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100">
          <svg
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5958 17.3321C22.5115 17.2306 22.4288 17.129 22.3475 17.031C21.2303 15.6797 20.5544 14.8642 20.5544 11.0388C20.5544 9.05836 20.0807 7.43336 19.1468 6.21461C18.4582 5.31426 17.5274 4.63125 16.3005 4.12648C16.2847 4.1177 16.2706 4.10618 16.2589 4.09246C15.8176 2.61473 14.61 1.625 13.248 1.625C11.8861 1.625 10.679 2.61473 10.2377 4.09094C10.2259 4.10415 10.212 4.11531 10.1966 4.12395C7.33354 5.30258 5.94214 7.56387 5.94214 11.0373C5.94214 14.8642 5.26725 15.6797 4.14905 17.0295C4.0678 17.1275 3.98503 17.227 3.90073 17.3306C3.68298 17.5932 3.54502 17.9127 3.50317 18.2513C3.46132 18.5898 3.51734 18.9333 3.6646 19.241C3.97792 19.9012 4.64569 20.311 5.40792 20.311H21.0937C21.8524 20.311 22.5156 19.9017 22.8299 19.2446C22.9778 18.9368 23.0344 18.593 22.9929 18.2541C22.9514 17.9151 22.8136 17.5952 22.5958 17.3321Z"
              fill="#212121"
            />
            <path
              d="M13.248 24.4819C13.9818 24.4813 14.7018 24.2822 15.3316 23.9055C15.9613 23.5288 16.4774 22.9887 16.8251 22.3425C16.8414 22.3116 16.8495 22.2769 16.8486 22.2419C16.8476 22.2068 16.8375 22.1727 16.8195 22.1427C16.8014 22.1127 16.7758 22.0878 16.7453 22.0706C16.7148 22.0534 16.6803 22.0444 16.6453 22.0444H9.85179C9.81671 22.0443 9.7822 22.0533 9.75161 22.0705C9.72103 22.0876 9.69542 22.1124 9.67726 22.1424C9.65911 22.1725 9.64904 22.2067 9.64803 22.2417C9.64703 22.2768 9.65512 22.3115 9.67151 22.3425C10.0191 22.9887 10.5351 23.5287 11.1648 23.9054C11.7945 24.282 12.5143 24.4812 13.248 24.4819Z"
              fill="#212121"
            />
          </svg>

          <span className="absolute top-2 right-3 inline-block w-2 h-2 bg-red-500  rounded-full"></span>
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-3 cursor-pointer rounded-lg hover:bg-gray-50 py-1 px-2 outline-none">
            <Avatar className="h-8 w-8">
              <AvatarImage src={admin.image} />
              <AvatarFallback>
                {!loading && admin.name
                  ? admin.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                  : "..."}
              </AvatarFallback>
            </Avatar>
            <div className="text-sm text-gray-800 flex flex-col">
              <p className="font-bold">
                {admin.name.charAt(0).toUpperCase() + admin.name.slice(1)}
              </p>
              <p className="text-xs text-[#21212199] text-left">Admin</p>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-64" align="end">
            <div className="px-2 py-2.5">
              <div className="flex items-center space-x-3 mb-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={admin.image} />
                  <AvatarFallback>
                    {!loading && admin.name
                      ? admin.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                      : "..."}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-800">{admin.name}</p>
                  <p className="text-xs text-gray-500 truncate max-w-[180px]">
                    {admin.email}
                  </p>
                </div>
              </div>
              <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                {admin.role}
              </span>
            </div>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={handleViewProfile}
              className="py-2.5 cursor-pointer"
            >
              <User className="w-4 h-4 mr-3 text-gray-500" />
              <span>View Profile</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={handleLogout}
              className="py-2.5 text-red-600 focus:text-red-600 cursor-pointer"
            >
              <LogOut className="w-4 h-4 mr-3" />
              <span>Log Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
