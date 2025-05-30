"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-800 text-white p-6 sticky top-0 z-20 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-extrabold tracking-tight transform transition duration-300 hover:scale-105">
            DriveEasy Rentals
          </Link>
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="relative text-lg font-medium hover:text-blue-300 transition duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full">
                Home
              </Link>
            </li>
            <li>
              <Link href="#fleet" className="relative text-lg font-medium hover:text-blue-300 transition duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full">
                Our Fleet
              </Link>
            </li>
            <li>
              <Link href="#contact" className="relative text-lg font-medium hover:text-blue-300 transition duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-blue-100 to-teal-100 animate-fadeIn">
        <div className="container mx-auto px-4 text-center">
          <Image
            src="/car.webp"
            alt="Luxury Car"
            width={900}
            height={500}
            className="rounded-2xl shadow-2xl mb-8 transform transition duration-500 hover:scale-105"
          />
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 animate-slideUp">
            Rent Your Dream Car Today
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto animate-slideUp delay-100">
            Explore our premium fleet and hit the road with style, comfort, and ease. Book now for an unforgettable journey!
          </p>
          <Link href="#contact" className="mt-6 inline-block bg-blue-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1">
            Book Now
          </Link>
        </div>
      </section>

      {/* Our Fleet Section */}
      <section id="fleet" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-8 animate-fadeIn">
            Our Premium Fleet
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center leading-relaxed animate-fadeIn delay-100">
            Choose from a wide range of vehicles, from sleek sedans to spacious SUVs and luxury cars. All our vehicles are well-maintained, insured, and ready for your next adventure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 animate-fadeIn delay-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Economy</h3>
              <p className="text-gray-600">Affordable and fuel-efficient cars for budget-conscious travelers.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 animate-fadeIn delay-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">SUVs</h3>
              <p className="text-gray-600">Spacious and versatile vehicles for family trips or group adventures.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 animate-fadeIn delay-400">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Luxury</h3>
              <p className="text-gray-600">Premium cars for a stylish and comfortable driving experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-50 to-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-slideUp">
            Get in Touch
          </h2>
          <div className="text-lg text-gray-700 max-w-md mx-auto space-y-4 animate-slideUp delay-100">
            <p>
              Email: <a href="mailto:bookings@driveeasyrentals.com" className="text-blue-600 hover:text-blue-800 transition duration-300">bookings@driveeasyrentals.com</a>
            </p>
            <p>
              Phone: <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800 transition duration-300">+1 (234) 567-890</a>
            </p>
          </div>
          <Link href="/booking" className="mt-6 inline-block bg-blue-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1">
            Start Your Booking
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white p-6">
        <div className="container mx-auto text-center space-y-4">
          <p className="text-sm">© 2025 DriveEasy Rentals. All rights reserved.</p>
          <Link href="/" className="text-blue-200 hover:text-white transition duration-300">
            Back to Home
          </Link>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-in-out;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}