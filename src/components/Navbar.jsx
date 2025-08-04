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

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <button className="p-2 md:hidden cursor-pointer" onClick={handleMenu}>
          <FaBars size={24} />
        </button>
      </div>

      {/* Optional: Backdrop for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {isOpen && (
        <ul
          ref={sectionRef}
          className="md:hidden bg-blue-700 w-full px-4 pb-4 space-y-2 text-left z-50 relative transition-all duration-300"
        >
          <li className="hover:bg-blue-800 rounded px-2 py-1">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="hover:bg-blue-800 rounded px-2 py-1">
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li className="hover:bg-blue-800 rounded px-2 py-1">
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li className="hover:bg-blue-800 rounded px-2 py-1">
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
