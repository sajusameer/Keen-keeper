import { NavLink } from "react-router-dom";
import { FaHome, FaClock, FaChartLine, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import logoImg from "../assets/logo.png"

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-md transition ${
      isActive
        ? "bg-[#244D3F] text-white font-semibold"
        : "text-[#64748B] hover:text-[#244D3F]"
    }`;

  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
       <img src={logoImg} alt="" />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
          <NavLink to="/" className={navLinkClass}>
            <FaHome /> Home
          </NavLink>

          <NavLink to="/timeline" className={navLinkClass}>
            <FaClock /> Timeline
          </NavLink>

          <NavLink to="/stats" className={navLinkClass}>
            <FaChartLine /> Stats
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-2 px-4 pb-4">

          <NavLink onClick={() => setOpen(false)} to="/" className={navLinkClass}>
            <FaHome /> Home
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/timeline" className={navLinkClass}>
            <FaClock /> Timeline
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/stats" className={navLinkClass}>
            <FaChartLine /> Stats
          </NavLink>

        </div>
      )}
    </div>
  );
}