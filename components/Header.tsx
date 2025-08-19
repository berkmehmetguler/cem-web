"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FaPhoneFlip } from "react-icons/fa6";

export default function HeroSection() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <section className="p-5 relative">
      {/* Background Video */}
      <video
        src="/main-vid.mp4"
        width={500}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        style={{ zIndex: 0, opacity: 1 }}
      ></video>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <header
        className="relative z-10 rounded-2xl px-4 md:px-14 pb-16 bg-center bg-no-repeat bg-cover"
      >
        {/* Header */}
        <nav className="relative h-fit py-4 ">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3  ">
              <Link href="/" className="inline-block">
                <Image
                  className="h-32 w-auto"
                  src="/logo.png"
                  alt="PitStop Mobile Tire Change Edmonton Logo"
                  width={400}
                  height={100}
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden  xl:flex items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full text-3xl font-extrabold "
                >
                  <div className="flex items-center gap-2">
                    <span className="text-white group-hover:text-black text-xl font-medium tracking-tight">
                      Home
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="inline-block py-2 px-3 hover:bg-gray-100 hover:text-black transition duration-200 text-white text-xl font-medium tracking-tight rounded-full"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="inline-block py-2 px-3 hover:bg-gray-100 hover:text-black transition duration-200 text-white text-xl font-medium tracking-tight rounded-full"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-white group-hover:text-black text-xl font-medium tracking-tight">
                      Contact
                    </span>
                  </div>
                </Link>
              </li>
            </ul>

            {/* CTA Button */}
            <Link
              href="tel:+16474512391"
              className="rounded-full border border-gray-200 bg-white px-5 py-3 h-14 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 hidden xl:inline-flex items-center justify-center gap-2 transition duration-200"
            >
              <span className="text-md font-semibold tracking-tight">
                Get A Free Call
              </span>
              <FaPhoneFlip />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="xl:hidden text-white"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="navbar-burger"
                width="51"
                height="51"
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

        {/* Mobile Menu */}
        {mobileNavOpen && (
          <div className="fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50">
            <div
              onClick={() => setMobileNavOpen(false)}
              className="fixed inset-0 bg-black opacity-20"
            ></div>
            <nav className="relative p-8 w-full h-full bg-white overflow-y-auto">
              <div className="flex items-center justify-between">
                <Link href="/" className="inline-block">
                  <Image
                    className="h-32 w-auto"
                    src="/logo.png"
                    alt="PitStop Mobile Tire Change Edmonton Logo"
                    width={250}
                    height={128}
                  />
                </Link>
                <button onClick={() => setMobileNavOpen(false)}>✕</button>
              </div>
              <ul className="flex flex-col gap-12 py-12 ">
                <li>
                  <Link
                    href="/"
                    className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 text-xl font-black tracking-tight rounded-full"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 text-xl font-black tracking-tight rounded-full"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 text-xl font-black tracking-tight rounded-full"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 text-xl font-black tracking-tight rounded-full"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="flex flex-col gap-4">
                <Link
                  href="tel:+16474512391"
                  className="rounded-full bg-red-700/90 px-5 py-3 h-14  hover:bg-orange-600 focus:bg-orange-500 focus:ring-4 focus:ring-orange-200 inline-flex items-center justify-center gap-4 transition duration-200"
                >
                  <span className="text-white font-mono text-sm tracking-tight">
                    Get A Free Call
                  </span>
                  <FaPhoneFlip color="white" />
                </Link>
              </div>
            </nav>
          </div>
        )}

        {/* Hero Content */}
        <div className="py-20">
          <h1 className="font-heading tracking-tight text-5xl md:text-7xl text-white font-medium max-w-xs md:max-w-xl mb-6">
            Available 24/7 Across Edmonton
          </h1>
          <p className="tracking-tight text-white text-xl mb-8 max-w-md">
            Get Your Tires Changed Anytime, Anywhere in Edmonton
          </p>
          <a
            href="tel:+16474512391"
            className="rounded-full border border-gray-200 bg-white px-6 py-4 h-16 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 inline-flex items-center justify-center gap-2 transition duration-200"
          >
            <span className="font-bold tracking-tight ">Book A Free Call</span>{" "}
            <FaPhoneFlip color="black" />
          </a>
        </div>
      </header>
    </section>
  );
}
