"use client";
import Image from "next/image";
import Link from "next/link";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline"
import {usePathname} from "next/navigation";
import BannerTop from "./BannerTop";
import {useState} from "react";

const links = [
    {
        label: "INICIO",
        route: "/",
    },
    {
        label: "GALERIA",
        route: "/gallery",
    },
    {
        label: "SERVICIOS",
        route: "/services",
    },
    {
        label: "CONTACTO",
        route: "/contact",
    },
];

export default function Navigation() {
    const router = usePathname();
    const [menu, menuState] = useState(false);
    const handleToggleMenu = () => {
        menuState(!menu);
    }
    return (
        <>
            <BannerTop/>
            <div className="container-main w-full border-b bg-white">
                <header className="flex justify-between items-center">
                    <div>
                        <Image
                            src="/logo.png"
                            width={75}
                            height={75}
                            alt="logo"
                        />
                    </div>
                    <div className="hidden md:block">
                        <nav>
                            <ul className="flex flex-row gap-4 items-center">
                                {links.map(({label, route}) => (
                                    <li
                                        key={route}
                                        className={`text-vs-blue font-semibold hover:text-vs-blue-500 text-sm ${router === route ? 'text-vs-blue-500' : ''}`}
                                    >
                                        <Link href={route}>{label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="block md:hidden flex items-center">
                        <button onClick={handleToggleMenu}>
                            <Bars3Icon className="w-8"/>
                        </button>
                    </div>
                    <div
                        className={`fixed top-0 bottom-0 left-0 right-0 bg-gray-500 z-30 flex justify-center items-center ${menu ? 'block' : 'hidden'}`}>
                        <div>
                            <div>
                                <button onClick={handleToggleMenu}>
                                    <XMarkIcon className="text-white w-10"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
}
