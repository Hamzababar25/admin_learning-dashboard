import Sidebar from "@/app/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 w-full p-8 bg-gray-50 min-h-screen">
        {children}
      </main>
    </div>
  );
}
