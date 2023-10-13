import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Link  - see 2. Header Component 14:00

export default function Header() {
  return (
    // HEADER BAR: slate 200 + shadow fx
    <header className="bg-slate-200 shadow-md">
      {/* centre header */}
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/* style header: 
        bold font, small text for mobile, larger text non-mobile, flex and wrap to fit available space */}

        {/* Link company name to hme page */}
        <Link to="/">
          <h1 className="font-bold sm-text sm:text-xl flex flex-wrap">
            <span className="text-slate-500">QLEN</span>
            <span className="text-slate-700">Properties</span>
          </h1>
        </Link>
        {/* FORM: search box */}
        <form className="bg-slate-100 p-3 rounded-lg flex items-center just">
          <input
            type="text"
            placeholder="Search..."
            // remove search box bg & outline, add 1px margin, set width mobile and above
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>

        {/* UNORDERED LIST: Menu */}
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/signin">
            <li className="text-slate-700 hover:underline">SIgn In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
