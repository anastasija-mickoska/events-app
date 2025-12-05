"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { auth, db } from "../../../../lib/firebase/client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";

export default function Register() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      try {
        await setDoc(doc(db, "Users", user.uid), { email, favourites:[], interested:[] });
        router.replace("/");
      } catch (err) {
        await user.delete();
        throw new Error("Error registering user!");
      }
    } catch (error) {
      alert("Registration failed: " + error.message);
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <button onClick={() => router.back()} className="absolute top-4 right-4 text-[#FFFAEF] text-2xl font-bold cursor-pointer"> × </button>
      <div className="flex flex-col justify-center w-[600px] h-[600px] bg-[#FFFAEF] rounded-[10px] shadow-[0px_5px_10px_0px_rgba(255,250,239,0.80)]">
        <h1 className="text-center text-[#6A161C] text-6xl font-bold tracking-[6.40px] mt-24">REGISTER</h1>
        <form onSubmit={handleRegister} className="flex flex-col gap-12 items-center justify-center mt-16">
          <input
            type="email"
            placeholder="Enter email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-[10px] shadow border text-[#6A161C] w-[70%] px-5 py-2.5"
          />

          <input
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-[10px] shadow border text-[#6A161C] w-[70%] px-5 py-2.5"
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-4 bg-[#6A161C] rounded-[10px] w-[50%] py-2.5 mb-24 hover:bg-[#5E040A]"
          >
            <h4 className="text-[#FFFAEF] text-xl font-medium tracking-widest">REGISTER</h4>
            <Image src="/login.svg" width={25} height={25} alt="Register icon" />
          </button>
        </form>
      </div>
    </div>
  );
}
