// import Sidebar from "@/app/Sidebar";

// export default function Layout({ children }) {
//   const pathname = usePathname();

//   // Define routes where you do NOT want to apply the layout
//   const noLayoutRoutes = ["/auth/signin", "/", "/signup", "/auth/forgot"];

//   // Check if the current route is in noLayoutRoutes
//   const isNoLayoutRoute = noLayoutRoutes.includes(pathname);
//   return (

//     <div className="flex">
//       <Sidebar />
//       <main className="ml-64 w-full pl-4 bg-gray-50 min-h-screen">
//         {children}
//       </main>
//     </div>
//   );
// }
"use client";

import Sidebar from "@/app/Sidebar";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();

  // Define routes where you do NOT want to apply the layout
  const noLayoutRoutes = ["/"];

  // Check if the current route is in noLayoutRoutes
  const isNoLayoutRoute = noLayoutRoutes.includes(pathname);

  return (
    <div className="flex">
      {!isNoLayoutRoute && <Sidebar />}
      <main
        className={`${
          isNoLayoutRoute ? "w-full" : "ml-64 pl-4 w-full"
        } bg-gray-50 min-h-screen`}
      >
        {children}
      </main>
    </div>
  );
}
