import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="py-8 container mx-auto">
      {/* Top Row: Logo and Nav Links */}
      <div className="flex justify-between items-center mb-14">
        {/* Logo */}
        <h2 className="text-4xl lg:text-4xl font-black">
          🍜
          <NavLink
            to={"/"}
            className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg"
          >
             Recipe Explorer
          </NavLink>
        </h2>

        {/* Navigation Links */}
        <ul className="flex gap-8">
          <li>
            <NavLink
              to={"/"}
              className="text-white text-2xl font-semibold hover:text-orange-300 duration-300"
            >
              🏠 Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/about"}
              className="text-white text-2xl font-semibold hover:text-orange-300 duration-300"
            >
              ℹ️ About
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/favorites"}
              className="text-white text-2xl font-semibold hover:text-orange-300 duration-300"
            >
              ❤️ Favorites
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Search Bar - Centered */}
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="flex gap-2 w-full lg:w-auto">
          <input
            type="text"
            name="search"
            value={searchParam}
            onChange={(event) => setSearchParam(event.target.value)}
            placeholder="Search delicious recipes..."
            className="bg-white/90 p-4 px-8 rounded-full outline-none flex-1 lg:flex-none lg:w-[450px] text-gray-800 text-lg shadow-2xl border border-white/30 focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-full shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            🔍 Search
          </button>
        </form>
      </div>
    </nav>
  );
}