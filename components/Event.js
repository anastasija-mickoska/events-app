"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Event() {
    const [favourite, setFavourite] = useState({
        isFav: false,
        src: '/favourite.svg',
        text: 'Add to Favourites'
    });
    const router = useRouter();

    const handleEditClick = (e) => {
        e.stopPropagation();
        router.push('/editEvent/123'); //the event id to be changed
    }
    const handleDeleteClick = (e) => {
        e.stopPropagation();
        router.push('/deleteEvent/123'); //the event id to be changed
    }
    const toggleFavourite = (e) => {
        e.stopPropagation();
        setFavourite(prev => ({
            isFav: !prev.isFav,
            src: prev.isFav ? '/favourite.svg' : '/favourite_fill.svg',
            text: prev.isFav ? 'Add to Favourites' : 'Favourite'
        }));
    };

    const navigateToEvent = () => {
        router.push('/events/event123'); //event id to be changed
    }

    return (
        <div className="flex flex-row w-max h-min bg-[#004A41] border-b-2 border-[#FFFAEF] gap-20 p-8 cursor-pointer" onClick={navigateToEvent}>
            <Image src="/christmas.jpg" alt="Event photo" width={220} height={150} />
            <div className="flex flex-col text-[#FFFAEF]">
                <div className="w-full justify-center text-3xl font-bold tracking-[3.20px] mb-12">CHRISTMAS MARKET NAME</div>
                <div className="w-full justify-center text-2xl font-medium tracking-widest">DD/MM/YYYY - DD/MM/YYYY</div>
                <div className="flex flex-row gap-4 py-4">
                    <Image src="/location.svg" alt="Location" width={30} height={30}/>
                    <div className="w-full justify-center text-2xl font-medium tracking-widest">Street, City, Country</div>
                </div>
            </div>
            <div className="flex flex-col gap-4 items-end justify-end">
                <button onClick={handleEditClick} className="w-48 flex flex-row items-center justify-center gap-4 bg-[#0E7C71] text-[#FFFAEF] rounded-[10px] py-2.5 px-5">
                    <h5 className="text-center justify-center text-xl font-medium tracking-widest">Edit</h5>
                    <Image src="/edit.svg" width={25} height={25} alt="edit icon"/> 
                </button>
                <button onClick={handleDeleteClick} className="w-48 flex flex-row items-center justify-center gap-4 bg-[#6A161C] text-[#FFFAEF] rounded-[10px] py-2.5 px-5">
                    <h5 className="text-center justify-center text-xl font-medium tracking-widest">Delete</h5>
                    <Image src="/delete.svg" width={25} height={25} alt="delete icon"/> 
                </button>
                <button onClick={toggleFavourite} className="w-64 flex flex-row items-center justify-center gap-4 bg-[#0E7C71] text-[#FFFAEF] rounded-[10px] py-2.5 px-5">
                    <h5 className="text-center justify-center text-lg font-medium tracking-widest">{favourite.text}</h5>
                    <Image src={favourite.src} width={25} height={25} alt="favourite icon"/> 
                </button>
            </div>
        </div>
    )
}