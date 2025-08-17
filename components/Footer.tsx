"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section
      className="bg-coolGray-900 overflow-hidden"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundColor: "#1a202c",
        
        backgroundSize: "cover",
        backgroundImage: "url('/flex-ui-assets/elements/pattern-dark.svg')",
        backgroundPosition: "center",
      }}
    >

  
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap lg:items-center pt-24 pb-12 -mx-4">
          {/* Sol kısım */}
          <div className="w-full md:w-3/4 px-4">
            <Link href="/" className="block mb-8 max-w-max ">
              <Image
                src="/logo.png"
                alt="Flex Logo"
                width={120}
                height={40}
              />
            </Link>
            <p className="mb-12 text-base md:text-lg text-white font-medium md:max-w-sm">
              Launch your own Software As A Service Application with Flex Solutions.
            </p>

            {/* Menü */}
            <div className="mb-12 md:mb-0 flex flex-wrap -mx-3 md:-mx-6 ">
              {["Product", "Features", "Pricing", "Resources", "Careers", "Help", "Privacy"].map(
                (item) => (
                  <div key={item} className="w-full md:w-auto p-3 md:py-0 md:px-6">
                    <Link
                      href="/"
                      className="inline-block  text-white hover:text-coolGray-500 font-medium"
                    >
                      {item}
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Sağ kısım - Store butonları */}
          <div className="w-full md:w-1/4 px-4">
            <div className="lg:pr-10 lg:ml-auto lg:max-w-max">
              <Link href="/" className="block mb-4">
                <Image
                  src="/app-store-dark.svg"
                  alt="App Store"
                  width={150}
                  height={50}
                />
              </Link>
              <Link href="/" className="block">
                <Image
                  src="/google-play-dark.svg"
                  alt="Google Play"
                  width={150}
                  height={50}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-coolGray-800"></div>

      {/* Alt bilgi */}
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center py-12 md:pb-32">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <p className=" text-white font-medium">
              © 2025 Flex. All rights reserved.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-wrap md:justify-end -mx-5">
              {/* Sosyal ikonlar */}
              {["facebook", "twitter", "instagram", "github", "linkedin"].map((icon, i) => (
                <div key={i} className="px-5">
                  <Link
                    href="/"
                    className="inline-block text-coolGray-400 hover:text-coolGray-500"
                  >
                    <span className="sr-only">{icon}</span>
                    {/* Burada inline svg yerine icon component ekleyebilirsin */}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
