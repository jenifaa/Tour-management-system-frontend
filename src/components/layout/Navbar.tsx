import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "./MoodToggler";
import { Link } from "react-router";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <Link to="/" className="hover:text-blue-600">
        Home
      </Link>
      <Link to="/about" className="hover:text-blue-600">
        About
      </Link>
      <Link to="/services" className="hover:text-blue-600">
        Services
      </Link>
      <Link to="/contact" className="hover:text-blue-600">
        Contact
      </Link>
    </>
  );

  return (
    <nav className="w-full border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <h1 className="text-xl font-bold">MyApp</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {links}
          <Button>
            <Link to="/login" className="w-full">
              Login
            </Link>
          </Button>
          <ModeToggle />
        </div>

        {/* Mobile Right Side */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />

          <button onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
          {links}
          <Link to="/login" className="w-full">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
