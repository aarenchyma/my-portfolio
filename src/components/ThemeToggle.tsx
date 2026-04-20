'use client'
import { useTheme } from "./ThemeProvider";
import { GoMoon } from "react-icons/go";
import { IoSunny } from "react-icons/io5";

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="text-lg w-8 h-8 flex items-center justify-center rounded-lg transition-colors
        text-dark-primary cursor-pointer dark-mode:text-white-primary dark-mode:hover:text-white-primary"
    >
      {theme === "dark" ? "🌙" : <IoSunny size={25} />}
      {/* <GoMoon  size={30} /> */}
    </button>
  );
};

export default ThemeToggle;
"🌙"