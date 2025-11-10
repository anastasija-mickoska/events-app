import Link from "next/link";

export default function Header() {
    return (
        <nav className="h-24 w-full bg-[#6A161C] shadow-md flex items-center justify-between text-[#FFFAEF] text-xl">
            <ul className="flex items-center gap-48 font-medium ml-32">
                <li className="flex items-center justify-center h-full tracking-widest">
                    <Link href="/">HOME</Link>
                </li>
                <li className="flex items-center justify-center h-full tracking-widest">
                <Link href="/#events">EVENTS</Link>
                </li>
                <li className="flex items-center justify-center h-full tracking-widest">
                <Link href="/addEvent">ADD EVENT</Link>
                </li>
                <li className="flex items-center justify-center h-full tracking-widest">
                <Link href="/favourites/123">FAVOURITES</Link>
                </li>
                <li className="flex items-center justify-center h-full tracking-widest">
                <Link href="/login">LOGIN</Link>
                </li>
            </ul>
        </nav>
    )
} 