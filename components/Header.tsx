"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <section className="p-5">
      <header
        className="rounded-2xl px-4 md:px-14 pb-16 bg-center bg-no-repeat bg-cover relative"
        // style={{
        //   backgroundImage: "url('/consulty-assets/headers/picture5.png')",
        // }}
      >
    
        {/* Header */}
        <nav className="relative h-fit py-4 ">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3  ">
              <Link href="/" className="inline-block">
                <Image
                  className="h-ful w-auto"
                  src="/logo.png"
                  alt="PitStop Logo"
                  width={300}
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
                      Products
                    </span>
                    <div className="text-white group-hover:text-black transition duration-200">
                      ▼
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="inline-block py-2 px-3 hover:bg-gray-100 hover:text-black transition duration-200 text-white text-xl font-medium tracking-tight rounded-full"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="inline-block py-2 px-3 hover:bg-gray-100 hover:text-black transition duration-200 text-white text-xl font-medium tracking-tight rounded-full"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="inline-block py-2 px-3 hover:bg-gray-100 group transition duration-200 rounded-full"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-white group-hover:text-black text-xl font-medium tracking-tight">
                      Resources
                    </span>
                    <div className="text-white group-hover:text-black transition duration-200">
                      ▼
                    </div>
                  </div>
                </Link>
              </li>
            </ul>

            {/* CTA Button */}
            <Link
              href="tel:+1234567890"
              className="rounded-full border border-gray-200 bg-white px-5 py-3 h-14 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 hidden xl:inline-flex items-center justify-center gap-2 transition duration-200"
            >
              <span className="text-md font-semibold tracking-tight">
                Get A Free Call
              </span>
              →
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
                    className="h-16 w-auto"
                    src="/logo.png"
                    alt="PitStop Logo"
                    width={50}
                    height={28}
                  />
                </Link>
                <button onClick={() => setMobileNavOpen(false)}>✕</button>
              </div>
              <ul className="flex flex-col gap-12 py-12 ">
                <li>
                  <Link
                    href="/"
                    className="inline-block  py-2 px-3 hover:bg-gray-50 transition duration-200 rounded-full"
                  >
                    Products ▼
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 text-sm font-medium tracking-tight rounded-full"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 text-sm font-medium tracking-tight rounded-full"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 rounded-full"
                  >
                    Resources ▼
                  </a>
                </li>
              </ul>
              <div className="flex flex-col gap-4">
                <Link
                  href="/tel:+1234567890"
                  className="rounded-full bg-black px-5 py-3 h-14 hover:bg-orange-600 focus:bg-orange-500 focus:ring-4 focus:ring-orange-200 inline-flex items-center justify-center gap-2 transition duration-200"
                >
                  <span className="text-white text-sm font-semibold tracking-tight">
                    Get A Free Call
                  </span>
                  →
                </Link>
              </div>
            </nav>
          </div>
        )}

        {/* Hero Content */}
        <div className="py-20">
          
          <h1 className="font-heading tracking-tight text-5xl md:text-7xl text-white font-medium max-w-xs md:max-w-xl mb-6">
            Get help from the industry experts.
          </h1>
          <p className="tracking-tight text-white text-lg mb-8 max-w-md">
            We are passionate about transforming spaces into extraordinary
            experiences. With a seamless fusion of architecture and interior
            design.
          </p>
          <a
            href="#"
            className="rounded-full border border-gray-200 bg-white px-6 py-4 h-16 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 inline-flex items-center justify-center gap-2 transition duration-200"
          >
            <span className="font-bold tracking-tight">Book A Free Call</span> →
          </a>
          
        </div>
        

        {/* Decoration */}
        <div className="hidden md:block absolute bottom-8 right-8">
          
          <Image
            src="/consulty-assets/headers/arrow-circle2.svg"
            alt="Decoration"
            width={200}
            height={200}
          />
        </div>
      </header>
          <video
          src="/main-vid.mp4"
          width={500}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          style={{ zIndex: -1, opacity: 1}}
        ></video>
    </section>
  );
}
