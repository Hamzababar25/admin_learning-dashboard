// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4  flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Q&A Forum</h1>
      <nav className="flex gap-4">
        <Link href="/">
          <div className="text-gray-600 hover:text-gray-800">Home</div>
        </Link>
        <Link href="/Submit">
          <div className="text-gray-600 hover:text-gray-800">
            Submit Question
          </div>
        </Link>
      </nav>
    </header>
  );
}
