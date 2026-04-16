import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#244D3F] text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">

        {/* Logo */}
        <h1 className="text-3xl font-semibold mb-2">
          KeenKeeper
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-sm mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        
      <div className="flex justify-center gap-4 mb-6">
        <a
          href="#"
          className="w-9 h-9 flex items-center justify-center bg-white rounded-full text-black hover:scale-105 transition"
        >
          <FaFacebook size={16} />
        </a>

        <a
          href="#"
          className="w-9 h-9 flex items-center justify-center bg-white rounded-full text-black hover:scale-105 transition"
        >
          <FaTwitter size={16} />
        </a>

        <a
          href="#"
          className="w-9 h-9 flex items-center justify-center bg-white rounded-full text-black hover:scale-105 transition"
        >
          <FaInstagram size={16} />
        </a>
      </div>

   
        <div className="border-t border-gray-500 w-70% mx-auto mb-4"></div>

        
        <div className="flex flex-col md:flex-row justify-around items-center text-xs text-gray-400 gap-3">

         
          <p>
            © {new Date().getFullYear()} KeenKeeper. All rights reserved.
          </p>

          {/* Menu Links */}
          <div className="flex gap-6">
            <Link to="/" className="hover:text-gray-300">Privacy Policy </Link>
            <Link to="/" className="hover:text-gray-300">Terms of Service </Link>
            <Link to="/" className="hover:text-gray-300">Cookies</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}