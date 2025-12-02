"use client"

import Image from "next/image";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function EventDetails({params}) {
    const [favourite, setFavourite] = useState({
        isFav: false,
        src: '/favourite.svg',
        text: 'Add to Favourites'
    });
    const [interested, setInterested] = useState({
        isInterested: false,
        src: '/favourite.svg'
    });
    const {user} = useAuth();

    const toggleFavourite = () => {
        setFavourite(prev => ({
            isFav: !prev.isFav,
            src: prev.isFav ? '/favourite.svg' : '/favourite_fill.svg',
            text: prev.isFav ? 'Add to Favourites' : 'Favourite'
        }));
    };

    const toggleInterested = () => {
        setInterested(prev => ({
            isInterested: !prev.isInterested,
            src: prev.isInterested ? '/favourite.svg' : '/favourite_fill.svg',
        }));   
    }

    return (
        <section className="flex flex-col justify-between gap-24 w-full h-min bg-[#0E7C71]">
            <div className="w-full h-[400px] relative">
            <Image src="/christmas.jpg" alt="Event photo" fill className="object-cover" priority/>
            </div>
            <h1 className="text-center justify-center text-[#FFFAEF] text-5xl font-bold tracking-[4.80px]">CHRISTMAS MARKET NAME</h1>
            <div className="flex flex-row items-center justify-between mx-24">
                <h3 className="text-[#FFFAEF] text-3xl font-medium tracking-wider">DD/MM/YYYY - DD/MM/YYYY</h3>
                <div className="flex flex-row gap-4 items-center justify-between">
                    <Image src="/location.svg" width={30} height={30} alt="Location Icon"/>
                    <h3 className="text-[#FFFAEF] text-3xl font-medium tracking-wider">Street, City, Country</h3>
                </div>
            </div>
            <hr className="text-[#FFFAEF] mx-24"/>
            <div className="justify-center text-[#FFFAEF] text-xl font-medium leading-8 tracking-wide mx-24">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar eros eu massa posuere, ut lobortis velit ornare.
                 Aliquam nec lacinia lectus. Morbi ultricies dui vitae arcu rhoncus bibendum. Praesent pretium mauris nec massa maximus dignissim.
                  Sed lorem dui, scelerisque in ornare sed, luctus vel tortor. Vivamus venenatis lobortis diam, at sodales ligula lacinia vitae. 
                  Vivamus erat nulla, maximus at sem sed, condimentum mollis mi. Sed viverra, felis gravida mollis dignissim, nisl nisl tincidunt 
                  est, ac suscipit odio diam sit amet tellus. Suspendisse pharetra nec sapien convallis tristique. Phasellus arcu ligula, 
                  tempor eu maximus eget, porttitor sit amet erat. Nulla iaculis accumsan faucibus. Sed malesuada nibh enim, ac laoreet nunc 
                  pharetra non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque vel tortor 
                  semper, dictum tortor varius, aliquam sem. Aenean hendrerit pretium dignissim.<br/></div>
            <div className="flex flex-row items-start gap-12 mx-24 mb-24">
                {user && user.email !== "admin@gmail.com" && <button onClick={toggleFavourite} className="flex flex-row items-center justify-center gap-4 bg-[#004A41] text-[#FFFAEF] tracking-wider rounded-[10px] py-2.5 px-5
                hover:bg-[#0E7C71] hover:border hover:border-[#FFFAEF]">
                    <h5 className="text-center justify-center text-xl font-medium tracking-widest">{favourite.text}</h5>
                    <Image src={favourite.src} width={25} height={25} alt="favourite icon"/> 
                </button>}
                {user && user.email !== "admin@gmail.com" &&<button onClick={toggleInterested} className="flex flex-row items-center justify-center gap-4 bg-[#6A161C] text-[#FFFAEF] tracking-wider rounded-[10px] py-2.5 px-5 hover:bg-[#5E040A]">
                    <h5 className="text-center justify-center text-xl font-medium tracking-widest">Interested/Going</h5>
                    <Image src={interested.src} width={25} height={25} alt="favourite icon"/> 
                </button>}
            </div>
        </section>
    )
}