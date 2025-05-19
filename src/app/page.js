import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-700 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            My App
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-blue-200">
                About
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Image Section */}
      <section className="flex flex-col items-center justify-center py-16 bg-gray-100">
        <Image
          src="/pexels.jpg"
          alt="Hero Image"
          width={600}
          height={400}
          className="rounded-lg shadow-lg mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to My App
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Discover amazing content and connect with us!
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
            We are a passionate team dedicated to building innovative web
            applications. Our mission is to create user-friendly and impactful
            digital experiences for everyone.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            Contact Us
          </h2>
          <div className="text-lg text-gray-600 max-w-md mx-auto text-center">
            <p>Email: <a href="mailto:info@myapp.com" className="text-blue-600 hover:underline">info@myapp.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white p-4">
        <div className="container mx-auto text-center">
          <p>© 2025 My App. All rights reserved.</p>
          <Link href="/" className="text-blue-200 hover:underline">
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}