import Logo from "./logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NavBar = () => {
    return (
        <div className="w-full px-4 mx-auto pt-4">
            <nav className="flex items-center justify-between bg-green-900 rounded-full px-6 py-3">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Logo />
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex uppercase text-white font-semibold items-center gap-x-12">
                    <Link href="/" className="hover:text-yellow-400 hover:underline">Home</Link>
                    <Link href="/services" className="hover:text-yellow-400 hover:underline">Services</Link>
                    <Link href="/about" className="hover:text-yellow-400 hover:underline">About</Link>
                    <Link href="/projects" className="hover:text-yellow-400 hover:underline">Projects</Link>
                </div>

                {/* Contact Button */}
                <Button className="bg-white text-green-900 rounded-full px-6 py-2 hover:bg-yellow-400">
                    Contact Me
                </Button>
            </nav>
        </div>
    );
};

export default NavBar;