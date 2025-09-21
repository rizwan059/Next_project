"use client";
import Link from "next/link";
import { useState } from "react";
import { Search } from "lucide-react";

 function NavBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Heading */}
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
          MyWebsite
        </h1>

        {/* Links */}
        <div className="flex space-x-6">
          <Link
            href="/"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/store"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            Store
          </Link>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full px-3 py-1"
        >
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent outline-none px-2 text-gray-700 dark:text-gray-200"
          />
          <button
            type="submit"
            className="p-1 text-gray-500 hover:text-blue-600 transition"
          >
            <Search size={18} />
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar