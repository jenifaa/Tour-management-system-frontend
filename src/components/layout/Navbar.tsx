import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "./MoodToggler";
import { Link } from "react-router";
import {
  authApi,
  useLogoutMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";

import { useAppDispatch } from "@/redux/hook";
import { role } from "@/constants/role";

export default function Navbar() {
  const { data } = useUserInfoQuery(undefined);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const userRole = data?.data?.role;
  const [open, setOpen] = useState(false);

  // const links = (
  //   <>
  //     <Link to="/" role="PUBLIC" className="hover:text-blue-600">
  //       Home
  //     </Link>
  //     <Link to="/about" role="PUBLIC" className="hover:text-blue-600">
  //       About
  //     </Link>
  //     <Link to="/services" role="PUBLIC" className="hover:text-blue-600">
  //       Services
  //     </Link>
  //     <Link to="/contact" role="PUBLIC" className="hover:text-blue-600">
  //       Contact
  //     </Link>
  //     <Link to="/admin" role={role.admin} className="hover:text-blue-600">
  //       Dashboard
  //     </Link>
  //     <Link to="/user" role={role.user} className="hover:text-blue-600">
  //       Dashboard
  //     </Link>
  //   </>
  // );

  const navLinks = [
    { to: "/", label: "Home", role: "PUBLIC" },
    { to: "/about", label: "About", role: "PUBLIC" },
    { to: "/services", label: "Services", role: "PUBLIC" },
    { to: "/contact", label: "Contact", role: "PUBLIC" },
    { to: "/admin", label: "Dashboard", role: role.admin },
    { to: "/admin", label: "Dashboard", role: role.superAdmin },
    { to: "/user", label: "Dashboard", role: role.user },
  ];
  const handleLogout = () => {
    logout(undefined);
    dispatch(authApi.util.resetApiState());
  };

  return (
    <nav className="w-full border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <h1 className="text-xl font-bold">MyApp</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <>
            {/* {navLinks
              .filter((link) => link.role === "PUBLIC")
              .map((link, index) => (
                <Link key={index} to={link.to} className="hover:text-blue-600">
                  {link.label}
                </Link>
              ))} */}

            {navLinks
              .filter(
                (link) => link.role === "PUBLIC" || link.role === userRole,
              )
              .map((link, index) => (
                <Link key={index} to={link.to} className="hover:text-blue-600">
                  {link.label}
                </Link>
              ))}
          </>

          <div>
            {data?.data?.email && (
              <Button onClick={handleLogout} variant="outline">
                LogOut
              </Button>
            )}
            {!data?.data?.email && (
              <Button>
                <Link to="/login" className="w-full">
                  Login
                </Link>
              </Button>
            )}

            <ModeToggle />
          </div>
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
          {navLinks
            .filter((link) => link.role === "PUBLIC")
            .map((link, index) => (
              <Link key={index} to={link.to} className="hover:text-blue-600">
                {link.label}
              </Link>
            ))}
          {data?.data?.email && <Button variant="outline">LogOut</Button>}
          {!data?.data?.email && (
            <Button>
              <Link to="/login" className="w-full">
                Login
              </Link>
            </Button>
          )}
        </div>
      )}
    </nav>
  );
}
