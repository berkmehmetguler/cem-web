"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="bg-gray-900 overflow-hidden text-white  "

    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap lg:items-center pt-16 pb-8 -mx-4">
          {/* Sol kısım */}
          <div className="w-full md:w-3/4 px-4">
            <Link href="/" className="block mb-6 max-w-max">
              <Image
                src="/logo.png"
                alt="PitStop Mobile Tire Change Edmonton Logo"
                width={220}
                height={60}
                className="h-20 w-auto"
              />
            </Link>
            <p className="mb-8 text-base md:text-lg text-white font-medium md:max-w-md">
              Fast, reliable, and professional mobile tire change service in Edmonton. 
              Available 24/7 — we come to you, wherever you are.
            </p>

            {/* Menü */}
            <div className="flex flex-wrap gap-6">
              {[
                { name: "Home", link: "/" },
                { name: "Services", link: "/services" },
                { name: "About Us", link: "/about" },
                { name: "Contact", link: "/contact" },
                { name: "Privacy Policy", link: "/privacy" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="text-white hover:text-gray-400 font-medium transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Sağ kısım - CTA */}
          <div className="w-full md:w-1/4 px-4 mt-8 md:mt-0">
            <div className="lg:ml-auto">
              <Link
                href="tel:+16474512391"
                className="rounded-full bg-red-700/90 px-6 py-3 h-14 hover:bg-orange-600 focus:ring-4 focus:ring-orange-200 inline-flex items-center justify-center gap-3 transition duration-200"
              >
                <span className="text-white text-sm font-semibold tracking-tight">
                  Call Us Now
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-coolGray-800"></div>

      {/* Alt bilgi */}
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-between py-8">
        

          {/* Sosyal ikonlar */}
          <div className="flex gap-6 text-white text-lg">
            <Link href="/" className="hover:text-gray-400">
              <FaFacebookF />
            </Link>
            <Link href="/" className="hover:text-gray-400">
              <FaTwitter />
            </Link>
            <Link href="/" className="hover:text-gray-400">
              <FaInstagram />
            </Link>
            <Link href="/" className="hover:text-gray-400">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
          <p className="text-white my-4 text-sm font-medium">
            © {new Date().getFullYear()} PitStop Edmonton. All rights reserved.
          </p>
      </div>
    </footer>
  );
}
