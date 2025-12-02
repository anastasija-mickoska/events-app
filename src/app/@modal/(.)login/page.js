"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase/client";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const router = useRouter();
  const {login} = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDocRef = doc(db, "Users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (!userDocSnap.exists()) {
        alert("User data not found in Firestore.");
        return;
      }
      const userData = { id: user.uid, email: user.email };
      login(userData);
      router.replace("/");

    } catch (error) {
      alert("Login failed: " + error.message);
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <button
        onClick={() => window.history.back()}
        className="absolute top-4 right-4 text-[#FFFAEF] text-2xl font-bold cursor-pointer"
      >
        ×
      </button>

      <div className="flex flex-col justify-center w-[600px] h-[600px] bg-[#FFFAEF] rounded-[10px] shadow-[0px_5px_10px_0px_rgba(255,250,239,0.80)]">
        <h1 className="text-center text-[#6A161C] text-6xl font-bold tracking-[6.40px] mt-24">
          LOGIN
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-12 items-center justify-center mt-16">
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

          <div>
            <span className="text-[#6A161C] font-medium">No account? </span>
            <span
              onClick={() => router.push("/register")}
              className="text-[#6A161C] font-bold cursor-pointer hover:underline"
            >
              Register now!
            </span>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-4 bg-[#6A161C] rounded-[10px] w-[50%] py-2.5 mb-24 hover:bg-[#5E040A]"
          >
            <h4 className="text-[#FFFAEF] text-xl font-medium tracking-widest">LOGIN</h4>
            <Image src="/login.svg" width={25} height={25} alt="Login icon" />
          </button>
        </form>
      </div>
    </div>
  );
}
