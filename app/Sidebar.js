import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-100 p-4 fixed">
      <div className="mb-8">
        <h1 className="text-xl font-bold">LOGO</h1>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/dashboard">
              <div className="flex items-center text-gray-700 hover:text-blue-600">
                Dashboard
              </div>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/manage-courses">
              <div className="text-gray-700 hover:text-blue-600">
                Manage Courses
              </div>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/manage-users">
              <div className="text-gray-700 hover:text-blue-600">
                Manage Users
              </div>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/privacy-policy">
              <div className="text-gray-700 hover:text-blue-600">
                Privacy Policy
              </div>
            </Link>
          </li>
          <li>
            <Link href="/logout">
              <div className="text-gray-700 hover:text-blue-600">Logout</div>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
