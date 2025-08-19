'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneFlip } from "react-icons/fa6";

const HeaderMain = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-gray-600">
      <nav className="container mx-auto px-4 py-4 md:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="inline-block flex-shrink-0">
            <Image
              src="/logo.png"
              alt="PitStop Mobile Tire Change Edmonton Logo"
              width={200}
              height={50}
              className="h-auto w-48 md:w-64"
            />
          </Link>

          {/* Desktop Menu & CTA */}
          <div className="hidden xl:flex items-center gap-6">
            <ul className="flex items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="inline-block py-2 px-3 text-white hover:text-gray-200 transition duration-200 rounded-full text-xl font-medium tracking-tight"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="inline-block py-2 px-3 text-white hover:text-gray-200 transition duration-200 rounded-full text-xl font-medium tracking-tight"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="inline-block py-2 px-3 text-white hover:text-gray-200 transition duration-200 rounded-full text-xl font-medium tracking-tight"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-block py-2 px-3 text-white hover:text-gray-200 transition duration-200 rounded-full text-xl font-medium tracking-tight"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Link
              href="tel:+16474512391"
              className="rounded-full bg-white px-5 py-3 h-14 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 inline-flex items-center justify-center gap-2 transition duration-200"
            >
              <span className="text-black font-semibold tracking-tight text-base">
                Get A Free Call
              </span>
              <FaPhoneFlip color="black" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="xl:hidden text-white p-2"
            aria-label="Toggle mobile menu"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 56 56"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="56" rx="28" fill="currentColor"></rect>
              <path
                d="M37 32H19M37 24H19"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setMobileNavOpen(false)}></div>
      )}

      {/* Mobile Menu Content */}
      <div
        className={`fixed top-0 right-0 h-full w-5/6 max-w-sm bg-white shadow-lg transition-transform duration-300 ease-in-out z-50
          ${mobileNavOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-12">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="PitStop Mobile Tire Change Edmonton Logo"
                width={150}
                height={37.5}
                className="h-auto w-40"
              />
            </Link>
            <button
              onClick={() => setMobileNavOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-3xl leading-none"
              aria-label="Close mobile menu"
            >
              &times;
            </button>
          </div>
          <ul className="flex flex-col gap-6">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-lg font-bold text-gray-800 hover:bg-gray-100 rounded-full"
                onClick={() => setMobileNavOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block py-2 px-3 text-lg font-bold text-gray-800 hover:bg-gray-100 rounded-full"
                onClick={() => setMobileNavOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 text-lg font-bold text-gray-800 hover:bg-gray-100 rounded-full"
                onClick={() => setMobileNavOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 text-lg font-bold text-gray-800 hover:bg-gray-100 rounded-full"
                onClick={() => setMobileNavOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="mt-12">
            <Link
              href="tel:+16474512391"
              className="block rounded-full bg-red-700 text-white text-center py-3 font-semibold transition duration-200 hover:bg-red-800"
              onClick={() => setMobileNavOpen(false)}
            >
              Get A Free Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;