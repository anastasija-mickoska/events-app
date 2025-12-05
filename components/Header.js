"use client";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../src/app/context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <nav className="h-24 w-full bg-[#6A161C] shadow-md flex items-center justify-between text-[#FFFAEF] text-xl">
      <ul className="h-full flex items-center gap-32 font-medium ml-32">
        <li className="flex items-center justify-center h-full cursor-pointer px-5 tracking-widest hover:border-b-[#FFFAEF] hover:border-b-3">
          <Link href="/">HOME</Link>
        </li>

        <li className="flex items-center justify-center h-full cursor-pointer px-5 tracking-widest hover:border-b-[#FFFAEF] hover:border-b-3">
          <Link href="/#events">EVENTS</Link>
        </li>

        {user?.email === "admin@gmail.com" && (
          <li className="flex items-center justify-center h-full cursor-pointer px-5 tracking-widest hover:border-b-[#FFFAEF] hover:border-b-3">
            <Link href="/addEvent">ADD EVENT</Link>
          </li>
        )}

        {user && user.email !== "admin@gmail.com" && (
          <li className="flex items-center justify-center h-full cursor-pointer px-5 tracking-widest hover:border-b-[#FFFAEF] hover:border-b-3">
            <Link href={`/favourites/${user.id}`}>FAVOURITES</Link>
          </li>
        )}

        <li className="flex items-center justify-center h-full cursor-pointer px-5 tracking-widest hover:border-b-[#FFFAEF] hover:border-b-3">
          {!user ? (
            <Link href="/login">LOGIN</Link>
          ) : (
            <button className="cursor-pointer" onClick={logout}>LOGOUT</button>
          )}
        </li>
        <li className="flex flex-row gap-2 items-center justify-center h-full px-5 tracking-widest text-[#FFFAEF]">
          <Image src="/user.svg" width={30} height={30} alt="User Icon"/>
          {user && <p>{user.email}</p>}
        </li>
      </ul>
    </nav>
  );
}
