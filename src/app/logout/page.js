"use client";

import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function LogoutButton() {
  const router = useRouter();
  const { logout } = useAuth();

  useEffect(() => {
    const doLogout = async () => {
      try {
        await signOut(getAuth());
        logout();
        router.replace("/");
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };

    doLogout();
  }, [logout, router]);

  return null;
}
