import DarkMode from "./DarkMode";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import Signout from "./Signout";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-3">
          <Logo />
          <span className="text-xl font-semibold">MyApp</span>
        </div>

        {/* Middle Section: Search Bar */}
        <div className="flex-1 max-w-lg mx-auto">
          <NavSearch />
        </div>

        {/* Right Section: Dark Mode and Sign Out */}
        <div className="flex items-center space-x-4">
          <DarkMode />
          <Signout />
        </div>
      </div>
    </nav>
  );
}
