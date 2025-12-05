"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/app/context/AuthContext";

export default function EventFavourite ({id, name, from, to, street, city, country, onRemove}) {
    const router = useRouter();
    const {user, setUser} = useAuth();

    const navigateEvent = () => {
        router.push(`/events/${id}`); 
    }

    const removeFavourite = async(e) => {
        e.stopPropagation();
        if (!user) return;
        const updatedFavourites = user.favourites.filter((eventId) => eventId !== id);

        try {
        await fetch(`/api/users/${user.id}?type=favourite`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ favourites: updatedFavourites }),
        });
        const eventRes = await fetch(`/api/events/${id}`);
        const latestEvent = await eventRes.json();
        const currentCount = latestEvent.favouritesCount ?? 0;
        const favouritesCount = currentCount - 1;
        await fetch(`/api/events/${id}?type=favourite`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ favouritesCount: favouritesCount }),
        });
        setUser((prev) => ({ ...prev, favourites: updatedFavourites }));
        if (onRemove) onRemove(id);
        } catch (err) {
        console.error("Failed to update favourites:", err);
        }    
    }

    return (
        <div className="flex flex-col justify-between h-full bg-[#0E7C71] text-[#FFFAEF] rounded-[10px] cursor-pointer" onClick={navigateEvent}>
            <Image src="/christmas.jpg" width={400} height={280} alt="Event photo" className="rounded-t-[10px] w-full"/>
            <h4 className="text-center text-3xl font-bold tracking-wider mt-6 px-4">{name}</h4>
            <h5 className="justify-center text-xl font-medium tracking-wide mt-12 mx-6 px-4">{from} - {to}</h5>
            <div className="flex flex-row gap-4 items-start mx-6 my-6 px-4">
                <Image src="/location.svg" width={25} height={25} alt="Location icon"/>
                <h5 className="justify-center text-xl font-medium tracking-wide">{street ? `${street},` : ""} {city}, {country}</h5>
            </div>
            <button className="flex flex-row items-center justify-center gap-4 bg-[#6A161C] rounded-[10px] py-2.5 mb-4 mx-8 hover:bg-[#5E040A] cursor-pointer" onClick={removeFavourite}>
                <h4 className="text-[#FFFAEF] font-medium tracking-widest">Remove From Favourites</h4>
                <Image src="/favourite_fill.svg" width={25} height={25} alt="Favourite icon"/>
            </button>
        </div>
    )
}