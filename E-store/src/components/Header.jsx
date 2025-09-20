"use client"

import Link from 'next/link'
import React from 'react'
import { ShoppingCart, Heart } from "lucide-react";

function Header() {
  return (
    <header className="w-full shadow-md bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="text-4xl font-bold text-pink-600">
            E-Store.
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-pink-600">
              Home
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-pink-600">
              Shop
            </Link>
            {/* <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link> */}
            {/* <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link> */}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-5">
            {/* Favourite */}
            <button className="relative p-2 text-gray-700 hover:text-red-500">
              <Heart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                3
              </span>
            </button>

            {/* Cart */}
            <button className="relative p-2 text-gray-700 hover:text-blue-600">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full px-1">
                5
              </span>
            </button>
          </div>
        </div>
      </header>
  )
}

export default Header