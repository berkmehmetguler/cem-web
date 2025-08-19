import Image from "next/image";
import Link from "next/link";
import { FaPhoneFlip,FaWrench, FaCarSide    } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Services Hero Section */}
      <section className="relative bg-gray-900 text-white py-6 md:py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 font-light">
            Providing professional and convenient mobile tire change services
            across Edmonton, 24/7.
          </p>
          <Link
            href="tel:+16474512391"
            className="rounded-full bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-200 transition duration-200 inline-flex items-center gap-2"
          >
            <FaPhoneFlip />
            Call Us Anytime
          </Link>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-800">
          Mobile Tire Services At Your Doorstep
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Service Card 1 */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
            <Image
              src="/tire-change.png"
              alt="Mobile Tire Change Service"
              width={600}
              height={400}
              className="w-full full object-cover  "
            />
            <div className="p-6">
              <div className="flex items-center gap-4 mb-2">
                <FaWrench className="text-blue-500 text-3xl" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Seasonal Tire Change
                </h3>
              </div>
              <p className="text-gray-600">
                Easily switch between winter and summer tires without the hassle
                of driving to a shop. We come to you, saving you time and effort.
              </p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
            <Image
               src="/tire-change2.png"
              alt="Flat Tire Repair Service"
              width={600}
              height={400}
              className="w-full h-50 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-4 mb-2">
                <FaTools  className="text-blue-500 text-3xl" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Flat Tire Repair
                </h3>
              </div>
              <p className="text-gray-600">
                Got a flat? We can repair punctures and get you back on the road
                quickly and safely, wherever you are in Edmonton.
              </p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
            <Image
              src="/balancing.jpg"
              alt="Tire Balancing Service"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-4 mb-2">
                <FaCarSide className="text-blue-500 text-3xl" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Tire Rotation & Balancing
                </h3>
              </div>
              <p className="text-gray-600">
                Ensure even tire wear and a smooth ride with our professional
                tire rotation and balancing service, all performed at your location.
              </p>
            </div>
          </div>

          {/* You can add more service cards here following the same structure */}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16 md:py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need A Tire Service Right Now?
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            Our team is ready to assist you 24/7.
          </p>
          <Link
            href="tel:+16474512391"
            className="rounded-full bg-white text-blue-600 px-10 py-4 text-lg font-semibold hover:bg-gray-200 transition duration-200 inline-flex items-center gap-2"
          >
            <FaPhoneFlip />
            Get A Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;