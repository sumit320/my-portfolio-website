import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef(null);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sectionRef.current && !sectionRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-blue-600 text-white fixed w-full top-0 left-0 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold">Sumit Kumar</h1>

        <ul className="hidden md:flex space-x-6 font-medium">
          <li className="hover:text-gray-800">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-800">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-800">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="hover:text-gray-800">
            <Link to="/contacts">Contact</Link>
          </li>
        </ul>

        <button className="p-2 md:hidden cursor-pointer" onClick={handleMenu}>
          <FaBars size={24} />
        </button>
      </div>

      {isOpen && (
        <ul
          ref={sectionRef}
          className="md:hidden bg-blue-700 w-full px-4 pb-4 space-y-2 text-left"
        >
          <li className="hover:bg-blue-800">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="hover:bg-blue-800">
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li className="hover:bg-blue-800">
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li className="hover:bg-blue-800">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
