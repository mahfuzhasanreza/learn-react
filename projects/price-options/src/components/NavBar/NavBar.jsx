import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About Us" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact Us" },
        { id: 5, path: "/faq", name: "FAQ" }
    ];

    return (
        <nav className="text-black p-6 bg-yellow-200">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open ?
                        <IoMdClose></IoMdClose>
                        : <HiMenuAlt1></HiMenuAlt1>
                }
            </div>
            <ul className={`md:flex absolute md:static duration-1000 ${open ? 'top-16' : '-top-60'} bg-yellow-200 px-5`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;