"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function EventFavourite () {
    const router = useRouter();z

    const navigateEvent = () => {
        router.push('/events/event123'); //id to be changed
    }

    const removeFavourite = (e) => {
        e.stopPropagation();
        //remove logic
    }

    return (
        <div className="flex flex-col justify-between h-min bg-[#0E7C71] text-[#FFFAEF] rounded-[10px] cursor-pointer" onClick={navigateEvent}>
            <Image src="/christmas.jpg" width={400} height={280} alt="Event photo" className="rounded-t-[10px] w-full"/>
            <h4 className="text-center text-3xl font-bold tracking-wider mt-6">CHRISTMAS MARKET NAME</h4>
            <h5 className="justify-center text-xl font-medium tracking-wide mt-12 mx-6">DD/MM/YYYY - DD/MM/YYYY</h5>
            <div className="flex flex-row gap-4 items-start mx-6 my-6">
                <Image src="/location.svg" width={25} height={25} alt="Location icon"/>
                <h5 className="justify-center text-xl font-medium tracking-wide">Street, City, Country</h5>
            </div>
            <button className="flex flex-row items-center justify-center gap-4 bg-[#6A161C] rounded-[10px] py-2.5 mb-4 mx-8 hover:bg-[#5E040A]" onClick={removeFavourite}>
                <h4 className="text-[#FFFAEF] font-medium tracking-widest">Remove From Favourites</h4>
                <Image src="/favourite_fill.svg" width={25} height={25} alt="Favourite icon"/>
            </button>
        </div>
    )
}