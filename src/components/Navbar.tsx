'use client';

// Import Lucide icons for search and user
import { Search, User } from 'lucide-react';
import Link from 'next/link'; // Import Link from next/link for internal navigation

export default function Navbar() {
  // Function to handle smooth scrolling to a section
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); // Prevent default jump behavior

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Standard CSS for the Navbar */}
      <style jsx>{`
        .navbar {
          background-color: #161b22; /* Dark background color */
          color: white; /* White text color */
          padding: 1rem 1.5rem; /* py-4 px-6 */
          position: fixed;
          width: 100%;
          z-index: 20;
        }

        .navbar-container {
          max-width: 72rem; /* max-w-6xl */
          margin-left: auto;
          margin-right: auto;
          display: flex;
          justify-content: space-between; /* justify-between */
          align-items: center; /* items-center */
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          color: white; /* Ensure logo text color is white */
        }

        .navbar-logo-link { /* Added a specific class for the Link component */
          font-size: 1.5rem; /* text-2xl */
          font-weight: 700; /* font-bold */
          letter-spacing: 0.05em; /* tracking-wider */
          color: white; /* Ensure logo link is white */
          text-decoration: none; /* Remove underline from link */
        }

        .navbar-links {
          display: flex;
          gap: 2rem; /* gap-8 */
          font-size: 1rem; /* text-base */
          font-weight: 500; /* font-medium */
        }

        .navbar-links li a {
          transition: color 0.3s ease; /* transition */
          color: white; /* Explicitly set link color to white */
          text-decoration: none; /* Remove underline from links */
          cursor: pointer; /* Indicate it's clickable */
        }

        .navbar-links li a:hover {
          color: #60a5fa; /* hover:text-blue-400 */
        }

        .navbar-icons {
          display: flex;
          align-items: center;
          gap: 1.5rem; /* gap-6 */
        }

        .navbar-icon-button {
          padding: 0.5rem; /* p-2 */
          border-radius: 9999px; /* rounded-full */
          transition: background-color 0.3s ease; /* transition */
          background-color: transparent; /* Ensure no default button background */
          border: none; /* Remove default button border */
          cursor: pointer; /* Indicate it's clickable */
          color: white; /* Ensure icon color is white */
        }

        .navbar-icon-button:hover {
          background-color: #1f2937; /* hover:bg-gray-800 */
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-container">

          {/* Navigation Links - Centered */}
          <ul className="navbar-links">
            <li>
              <a href="#eventos" onClick={(e) => handleSmoothScroll(e, 'eventos')}>
                Próximos Eventos
              </a>
            </li>
            <li>
              <a href="#news" onClick={(e) => handleSmoothScroll(e, 'news')}>
                Noticias
              </a>
            </li>
            <li>
              <a href="#cities" onClick={(e) => handleSmoothScroll(e, 'cities')}>
                Ciudades
              </a>
            </li>
            <li>
              <a href="#quienes-somos" onClick={(e) => handleSmoothScroll(e, 'quienes-somos')}>
                Quiénes Somos
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={(e) => handleSmoothScroll(e, 'contacto')}>
                Contacto
              </a>
            </li>
          </ul>

          {/* Right-side Icons */}
          <div className="navbar-icons">
            <button className="navbar-icon-button">
              <Search size={20} />
            </button>
            <button className="navbar-icon-button">
              <User size={20} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
