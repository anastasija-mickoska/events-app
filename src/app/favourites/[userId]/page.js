"use client"

import { useState, useEffect } from 'react';
import EventFavourite from '../../../../components/EventFavourite.js';
import { useAuth } from '../../context/AuthContext.js';

export default function Favourites() {
    const {user} = useAuth();
    const [events, setEvents] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);

    const handleRemoveFavourite = (removedEventId) => {
    const updatedEvents = events.filter(event => event.id !== removedEventId);
    setEvents(updatedEvents);
    };

    useEffect(() => {
        if (!user?.id) return; 
        const fetchFavourites = async () => {
            const res = await fetch(`http://localhost:3000/api/events/favourites/${user.id}`);
            const events = await res.json();
            setEvents(events);
            console.log('Events:', events);
        };

        fetchFavourites();
    }, [user?.id]);

    useEffect(() => {
        if(!events) return;
        const today = new Date();
        let future = [];
        let past = [];
        events.forEach(e => {
            const eventToDate = new Date(e.to); 
            if(eventToDate >= today) {
                future.push(e);
            }
            else if(eventToDate < today) {
                past.push(e);
            }
        });
        setUpcomingEvents(future);
        setPastEvents(past);
        console.log("Upcoming events:", future);
        console.log("Past events:", past);
    }, [events]);   

    return (
        <section className="flex flex-col gap-24 justify-between w-full h-min bg-[#FFFAEF] text-[#6A161C] py-24">
            <h1 className="text-center justify-center text-5xl font-bold tracking-[6.40px]">MY FAVOURITES</h1>
            <div className="flex flex-col gap-12 justify-between mx-24">
                <h3 className="text-start text-4xl font-medium underline capitalize tracking-[4.80px]">Upcoming events</h3>
                <div className="grid grid-cols-3 gap-4">
                    {upcomingEvents.length !== 0 ? upcomingEvents.map(event => <EventFavourite key={event.id} {...event} onRemove={handleRemoveFavourite}/>) :
                    <p className="text-[#6A161C] text-lg">No events available.</p>
                    }
                </div>
            </div>
            <div className="flex flex-col gap-12 justify-between mx-24">
                <h3 className="text-start text-4xl font-medium underline capitalize tracking-[4.80px]">Past events</h3>
                <div className="grid grid-cols-3 gap-4">
                    {pastEvents.length !== 0 ? pastEvents.map(event => <EventFavourite key={event.id} {...event} onRemove={handleRemoveFavourite}/>) :
                    <p className="text-[#6A161C] text-lg tracking-widest">No events available.</p>
                    }
                </div>
            </div>
        </section>
    )
}