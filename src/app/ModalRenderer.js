"use client";

import { usePathname } from "next/navigation";
import RegisterModal from "./@modal/(.)register/page";
import LoginModal from "./@modal/(.)login/page";
import AddEventModal from "./@modal/(.)addEvent/page";

export default function ModalRenderer() {
  const pathname = usePathname();

  if (pathname === "/register") return <RegisterModal />;
  if (pathname === "/login") return <LoginModal />;
  if (pathname === "/addEvent") return <AddEventModal/>
  //other modals here!!!
  return null;
}
