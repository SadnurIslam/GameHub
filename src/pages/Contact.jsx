import React from "react";
import { Mail, MessageSquare, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="text-white px-6 md:px-10 py-14 max-w-5xl mx-auto">

      <div className="text-center space-y-3 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          Have questions or need support? We’re here to help!
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">

        <div className="bg-[#1e1e2f] p-6 rounded-2xl shadow-lg border border-[#2c2c40] text-center">
          <Mail size={32} className="mx-auto text-blue-400 mb-3" />
          <h3 className="font-semibold text-lg mb-1">Email</h3>
          <p className="text-gray-300 text-sm">support@gamehub.com</p>
        </div>

        <div className="bg-[#1e1e2f] p-6 rounded-2xl shadow-lg border border-[#2c2c40] text-center">
          <Phone size={32} className="mx-auto text-green-400 mb-3" />
          <h3 className="font-semibold text-lg mb-1">Phone</h3>
          <p className="text-gray-300 text-sm">+880 1234-567890</p>
        </div>

        <div className="bg-[#1e1e2f] p-6 rounded-2xl shadow-lg border border-[#2c2c40] text-center">
          <MessageSquare size={32} className="mx-auto text-purple-400 mb-3" />
          <h3 className="font-semibold text-lg mb-1">Support</h3>
          <p className="text-gray-300 text-sm">We respond within 24 hours</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-[#1a1a28] p-8 rounded-2xl shadow-xl border border-[#2d2d40]">

        <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

        <form className="space-y-5">

          <div>
            <label className="text-gray-300 text-sm">Your Name</label>
            <input
              type="text"
              className="w-full mt-1 p-3 rounded-lg bg-[#11111c] border border-[#2f2f42] outline-none 
              focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-3 rounded-lg bg-[#11111c] border border-[#2f2f42] outline-none 
              focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Message</label>
            <textarea
              rows="5"
              className="w-full mt-1 p-3 rounded-lg bg-[#11111c] border border-[#2f2f42] outline-none 
              focus:border-blue-500 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-semibold shadow-lg"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
};

export default Contact;
