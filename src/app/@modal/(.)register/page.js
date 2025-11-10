"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
    <button onClick={() => router.back()} className="absolute top-4 right-4 text-[#FFFAEF] text-2xl font-bold cursor-pointer"> × </button>
      <div className="flex flex-col justify-center w-[600px] h-[600px] bg-[#FFFAEF] rounded-[10px] shadow-[0px_5px_10px_0px_rgba(255,250,239,0.80)]">
        <h1 className="text-center text-[#6A161C] text-6xl font-bold tracking-[6.40px] mt-24">REGISTER</h1>
        <form className="flex flex-col gap-12 items-center justify-center mt-16">
            <input type="text" placeholder="Enter email..." className="rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#6A161C]/50 text-[#6A161C] w-[70%] px-5 py-2.5"/>
            <input type="password" placeholder="Enter password..." className="rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#6A161C]/50 text-[#6A161C] w-[70%] px-5 py-2.5"/>
            <button className="flex flex-row items-center justify-center gap-4 bg-[#6A161C] rounded-[10px] w-[50%] py-2.5 mb-24">
                <h4 className="text-[#FFFAEF] text-xl font-medium tracking-widest">REGISTER</h4>
                <Image src="/login.svg" width={25} height={25} alt="Login icon"/>
            </button>
        </form>
      </div>
    </div>
  );
}
