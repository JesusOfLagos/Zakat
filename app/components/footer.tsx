import React from "react";
import logo from "@/public/zakat.svg";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="text-white">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-2">Subscribe to our newsletter</h2>
        <p className="text-gray-400 mb-6">
          Never miss a beat. Get a weekly dose of Zakat updates, sadaqah around the world, tips, trends, and Islamic reminders in your inbox.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full md:w-1/3 px-4 py-2 text-black rounded-lg focus:outline-none"
          />
          <button className="bg-[#FF6801] text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>

      <div className="space-y-20 mb-10">


        {/* Footer Section */}
        <div className="border-t border-gray-700 py-6">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-2">
                <img
                  src={logo.src}
                  alt="ZakatChain Logo"
                  className="w-50 h-10"
                />
                {/* <span className="text-lg font-bold">ZakatChain</span> */}
              </div>
            </div>

            <div className="flex items-center gap-24 mt-4 md:mt-0">
              <a
                href="mailto:hello@zakatchain.com"
                className="text-white hover:text-gray-500"
              >
                Contact us: <span className="text-[#FF9606] underline">hello@zakatchain.com</span>
              </a>
              <div className="flex gap-4">
                <FaFacebook color="#FF9606" className="bg-white rounded-full" />
                <FaTwitter color="#FF9606" className="rounded-full" />
                <FaInstagram color="#FF9606" className="rounded-full" />
                <FaLinkedin color="#FF9606" className="rounded-full" />
              </div>
            </div>
          </div>


        </div>



        <div className="flex justify-between px-6 mb-10">
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Use
            </a>
          </div>
          <div className="flex gap-20">
            <p>&copy; 2024 . Powered by</p>
            <p>. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
