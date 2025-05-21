import { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  X,
  Home,
  Folder,
  Settings,
  Info,
  Book,
  Mail 
} from "lucide-react";
import Logo from '../assets/logonomy-1743222448018.png';
import logoText from "../assets/logo-text.png";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);
    
    // Improved active path detection
    const isActive = (path) => {
        if (path === "/") return location.pathname === "/";
        return location.pathname.startsWith(path);
    };

    // Nav items data with corresponding icons
    const navItems = [
        { name: "خانه", path: "/", icon: <Home size={18} className="ml-2" /> },
        { name: "پروژه ها", path: "/projects", icon: <Folder size={18} className="ml-2" /> }, 
        { name: "خدمات", path: "/coming-soon", icon: <Settings size={18} className="ml-2" /> },
        { name: "درباره ما", path: "/about-us", icon: <Info size={18} className="ml-2" /> },
        { name: "وبلاگ", path: "/coming-soon", icon: <Book size={18} className="ml-2" /> },
        { name: "ارتباط با ما", path: "/contact-us", icon: <Mail size={18} className="ml-2" /> }
    ];

    return (
        <Fragment>
            {/* Sticky Navbar */}
            <div className="bg-white w-full h-14 flex justify-center items-center shadow sticky top-0 z-50">
                <div className="flex justify-between items-center w-11/12 h-full" dir="rtl">
                    {/* Desktop Nav */}
                    <ul className="hidden md:flex font-sans text-sm">
                        {navItems.map((item) => (
                            <li key={item.path} className="px-2">
                                <Link 
                                    to={item.path}
                                    className={`
                                        px-4 py-2 rounded-lg transition-all duration-200
                                        ${isActive(item.path) 
                                            ? "bg-pyellow text-white font-bold" 
                                            : "hover:text-black hover:bg-pyellow"}
                                    `}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button onClick={toggleSidebar}>
                            <Menu size={24} />
                        </button>
                    </div>

                    {/* Logo */}
                    <Link to="/" className="h-full w-auto flex items-center gap-2">
                        <img src={logoText} alt="Company Text" className="w-36 object-contain hidden sm:block" />
                        <img src={Logo} alt="Company Logo" className="h-5/6 object-contain  " />
                    </Link>
                </div>
            </div>

            {/* Mobile Sidebar */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/40 z-40" onClick={closeSidebar} />
            )}

            <div className={`
                fixed top-0 right-0 h-full w-64 bg-ptext-gray z-50 shadow-lg
                transition-transform duration-300 ease-in-out
                ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
            `} dir="rtl">
                <div className="flex justify-between p-4">
                    <button onClick={closeSidebar}>
                        <X size={24} />
                    </button>
                    <img src={Logo} alt="Company Logo" className="w-9 object-contain  " />
                </div>
                <ul className="flex flex-col font-sans text-base px-6 space-y-4">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link 
                                to={item.path}
                                className={`
                                    block px-4 py-2 rounded-lg flex items-center border-b-2 border-black
                                    ${isActive(item.path) 
                                        ? " text-pyellow font-bold" 
                                        : "hover:text-pyellow"}
                                `}
                                onClick={closeSidebar}
                            >
                                {item.icon}
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

export default Navbar;