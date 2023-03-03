"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BannerTop from "./BannerTop";

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
    return (
        <>
            <BannerTop />
            <div className="px-16 py-2 w-full border-b bg-white">
                <header className="flex justify-between items-center">
                    <div>
                        <Image
                            src="/logo.png"
                            width={75}
                            height={75}
                            alt="logo"
                        />
                    </div>
                    <div>
                        <nav>
                            <ul className="flex flex-row gap-4 items-center">
                                {links.map(({ label, route }) => (
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
                </header>
            </div>
        </>
    );
}
