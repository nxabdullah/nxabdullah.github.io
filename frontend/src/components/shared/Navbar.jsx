import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center flex-wrap p-3">
      <Link to="/" className="inline-flex items-center p-2 mr-4 ">
        <span className="text-xl uppercase tracking-wide">
          <strong>NX</strong>ABDULLAH
        </span>
      </Link>

      <div className="w-full lg:inline-flex lg:flex-grow lg:w-auto">
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <Link
            href="/"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-200 hover:text-black "
          >
            Home
          </Link>
          <Link
            to="/"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-200 hover:text-black"
          >
            Projects
          </Link>
          <Link
            to="/"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-gray-200 hover:text-black"
          >
            Writing
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
