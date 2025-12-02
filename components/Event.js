"use client";

import { useAuth } from "../src/app/context/AuthContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Event({id, from, to, name, street, city, country, image}) {
  const [favourite, setFavourite] = useState({
    isFav: false,
    src: "/favourite.svg",
    text: "Add to Favourites",
  });
  const router = useRouter();
  const {user} = useAuth();

  const handleEditClick = (e) => {
    e.stopPropagation();
    router.push(`/editEvent/${id}`); //the event id to be changed
  };
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    router.push(`/deleteEvent/${id}`); //the event id to be changed
  };
  const toggleFavourite = (e) => {
    e.stopPropagation();
    setFavourite((prev) => ({
      isFav: !prev.isFav,
      src: prev.isFav ? "/favourite.svg" : "/favourite_fill.svg",
      text: prev.isFav ? "Add to Favourites" : "Favourite",
    }));
  };

  const navigateToEvent = () => {
    router.push(`/events/${id}`); //event id to be changed
  };

  return (
    <div
      className="flex flex-row justify-between items-center w-full h-min bg-[#004A41] border-b-2 border-[#FFFAEF] gap-20 p-8 cursor-pointer"
      onClick={navigateToEvent}
    >
      <Image src={image ? image : "/christmas.jpg"} alt="Event photo" width={220} height={150} className="w-[220px] h-[150px]" />
      <div className="flex flex-col text-[#FFFAEF] w-full items-start justify-start">
        <div className="w-full justify-center text-3xl font-bold tracking-[3.20px] mb-12">
          {name}
        </div>
        <div className="w-full justify-center text-2xl font-medium tracking-widest">
          {from} - {to}
        </div>
        <div className="flex flex-row gap-4 py-4">
          <Image src="/location.svg" alt="Location" width={30} height={30} />
          <div className="w-full justify-center text-2xl font-medium tracking-widest">
            {street ? `${street} ,` : ""} {city}, {country}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-end justify-end">
        {user && user.email === "admin@gmail.com" && <button
          onClick={handleEditClick}
          className="w-48 flex flex-row items-center justify-center gap-4 bg-[#0E7C71] text-[#FFFAEF] rounded-[10px] py-2.5 px-5 hover:bg-[#004A41] hover:border hover:border-[#FFFAEF]"
        >
          <h5 className="text-center justify-center text-xl font-medium tracking-widest">
            Edit
          </h5>
          <Image src="/edit.svg" width={25} height={25} alt="edit icon" />
        </button>}
        {user && user.email === "admin@gmail.com" &&<button
          onClick={handleDeleteClick}
          className="w-48 flex flex-row items-center justify-center gap-4 bg-[#6A161C] text-[#FFFAEF] rounded-[10px] py-2.5 px-5 hover:bg-[#5E040A]"
        >
          <h5 className="text-center justify-center text-xl font-medium tracking-widest">
            Delete
          </h5>
          <Image src="/delete.svg" width={25} height={25} alt="delete icon" />
        </button>}
        {user && user.email !== "admin@gmail.com" &&<button
          onClick={toggleFavourite}
          className="w-64 flex flex-row items-center justify-center gap-4 bg-[#0E7C71] text-[#FFFAEF] rounded-[10px] py-2.5 px-5hover:bg-[#004A41] hover:bg-[#004A41] hover:border hover:border-[#FFFAEF]"
        >
          <h5 className="text-center justify-center text-lg font-medium tracking-widest">
            {favourite.text}
          </h5>
          <Image
            src={favourite.src}
            width={25}
            height={25}
            alt="favourite icon"
          />
        </button>}
      </div>
    </div>
  );
}
