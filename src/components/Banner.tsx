'use client';

export default function Banner() {
  return (
    <>
      {/* Standard CSS for the Banner */}
      <style jsx>{`
        .banner {
          position: relative;
          height: 100vh; /* h-screen */
          display: flex;
          flex-direction: column; /* flex-col */
          align-items: center; /* items-center */
          justify-content: center; /* justify-center */
          padding-left: 1.5rem; /* px-6 */
          padding-right: 1.5rem; /* px-6 */
          text-align: center; /* text-center */
          color: white; /* text-white */
          background-image: url('/images/concierto.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .banner-overlay {
          position: absolute;
          inset: 0; /* inset-0 */
          background-color: black; /* bg-black */
          opacity: 0.5; /* opacity-50 */
        }

        .banner-heading {
          position: relative; /* relative */
          z-index: 10; /* z-10 */
          font-size: 3rem; /* text-5xl */
          line-height: 1; /* For md:text-6xl, adjust as needed or use media queries */
          font-weight: 800; /* font-extrabold */
          margin-bottom: 2rem; /* mb-8 */
          /* Simple drop shadow */
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* drop-shadow-lg approximation */
        }

        /* Responsive font size for heading */
        @media (min-width: 768px) { /* Corresponds to md: breakpoint */
          .banner-heading {
            font-size: 3.75rem; /* md:text-6xl */
          }
        }

        .banner-search-container {
          position: relative; /* relative */
          z-index: 10; /* z-10 */
          width: 100%; /* w-full */
          max-width: 48rem; /* max-w-3xl (approximate, adjust as needed) */
        }

        .banner-search-input {
          width: 100%; /* w-full */
          border-radius: 0.375rem; /* rounded-md */
          padding: 0.75rem 1rem; /* px-4 py-3 */
          color: #1f2937; /* text-gray-800 */
          background-color: white; /* Ensure input background is white */
          border: 1px solid transparent; /* Default border */
        }

        .banner-search-input::placeholder {
          color: #6b7280; /* placeholder-gray-500 */
        }

        .banner-search-input:focus {
          outline: none; /* focus:outline-none */
          border-color: #3b82f6; /* focus:ring-2 focus:ring-blue-600 (border as ring) */
          box-shadow: 0 0 0 2px #3b82f6; /* focus:ring-2 (box-shadow as ring) */
        }
      `}</style>

      <section className="banner">
        {/* Overlay for better text readability */}
        <div className="banner-overlay"></div>
  
        {/* Main heading */}
        <h1 className="banner-heading">
          IA TICKET COLOMBIA
        </h1>
  
        {/* Search input container */}
        <div className="banner-search-container">
          <input
            type="search"
            placeholder="Busqueda por artista o por evento"
            className="banner-search-input"
          />
        </div>
      </section>
    </>
  );
}
