import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { Button } from "../ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Service", path: "#" },
    { name: "How it works", path: "#" },
    { name: "Why Jobify", path: "#" },
];

export function NavBar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
            <div className="flex px-6 md:px-10 py-3 justify-between items-center">
                {/* Logo & Mobile Menu Icon */}
                <div className="flex items-center gap-4">
                    <Link to="/">
                        <h1 className="text-2xl cursor-pointer text-gray-900 italic font-bold tracking-wide">
                            Jobify
                        </h1>
                    </Link>
                    {/* Mobile Menu Icon */}
                    <button
                        className="md:hidden ml-2 p-1 rounded hover:bg-gray-100 transition"
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        onClick={() => setMobileOpen((open) => !open)}
                    >
                        {mobileOpen ? <X className="size-6" /> : <AlignJustify className="size-6" />}
                    </button>
                </div>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex gap-4">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className={`font-normal text-lg py-1 px-3 rounded text-gray-900 hover:bg-gray-100 transition ${location.pathname === link.path ? "bg-gray-200 font-semibold" : ""
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Login Button */}
                <div>
                    <Button
                        aria-label="Login"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow transition px-4 py-2"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </Button>
                </div>
            </div>

            {/* Mobile Drawer */}
            {mobileOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg border-b border-gray-200 animate-slideDown">
                    <ul className="flex flex-col gap-1 p-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={`block py-2 px-3 rounded text-gray-900 hover:bg-gray-100 transition ${location.pathname === link.path ? "bg-gray-200 font-semibold" : ""
                                        }`}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Button
                                aria-label="Login"
                                className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow transition px-4 py-2"
                                onClick={() => {
                                    setMobileOpen(false);
                                    navigate("/login");
                                }}
                            >
                                Login
                            </Button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
