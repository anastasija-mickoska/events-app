"use client";

import Image from "next/image";
import { useState, useEffect, use } from "react";
import { useAuth } from "../../context/AuthContext";

export default function EventDetails({ params }) {
  const { eventId } = use(params);
  const { user, setUser } = useAuth();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  const isFav = user?.favourites?.includes(eventId);
  const isInterested = user?.interested?.includes(eventId);

  const [favourite, setFavourite] = useState({
    isFav: isFav ?? false,
    src: isFav ? "/favourite_fill.svg" : "/favourite.svg",
    text: isFav ? "Favourite" : "Add to Favourites",
  });

  const [interested, setInterested] = useState({
    isInterested: isInterested ?? false,
    src: isInterested ? "/favourite_fill.svg" : "/favourite.svg",
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/events/${eventId}`);
        if (!res.ok) throw new Error("Failed to fetch event");
        const data = await res.json();
        setEvent(data);
      } catch (err) {
        console.error(err);
        setEvent(null);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [eventId]);

  const toggleFavourite = async () => {
    if (!user) return;
    const currentFavourites = user.favourites ?? [];
    const wasFav = currentFavourites.includes(eventId);
    const isAdding = !wasFav;

    const updatedFavourites = isAdding
      ? [...currentFavourites, eventId]
      : currentFavourites.filter((id) => id !== eventId);

    let favouritesCount = event.favouritesCount ?? 0;
    favouritesCount += isAdding ? 1 : -1;

    setFavourite({
      isFav: !favourite.isFav,
      src: !favourite.isFav ? "/favourite_fill.svg" : "/favourite.svg",
      text: !favourite.isFav ? "Favourite" : "Add to Favourites",
    });

    try {
      await fetch(`/api/users/${user.id}?type=favourite`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ favourites: updatedFavourites }),
      });
      const eventRes = await fetch(`/api/events/${eventId}`);
      const latestEvent = await eventRes.json();
      const currentCount = latestEvent.favouritesCount ?? 0;
      const favouritesCount = isAdding ? currentCount + 1 : currentCount - 1;
      await fetch(`/api/events/${eventId}?type=favourite`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ favouritesCount: favouritesCount }),
      });
      setUser((prev) => ({ ...prev, favourites: updatedFavourites }));
    } catch (err) {
      console.error("Failed to update favourites:", err);
    }
  };

  const toggleInterested = async () => {
    if (!user) return;

    const currentInterested = user.interested ?? [];
    const wasInterested = currentInterested.includes(eventId);
    const isAdding = !wasInterested;

    const updatedInterested = isAdding
      ? [...currentInterested, eventId]
      : currentInterested.filter((id) => id !== eventId);

    let interestedCount = event.interestedCount ?? 0;
    interestedCount += isAdding ? 1 : -1;

    setInterested({
      isInterested: !interested.isInterested,
      src: !interested.isInterested ? "/favourite_fill.svg" : "/favourite.svg",
    });

    try {
      await fetch(`/api/users/${user.id}?type=interested`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ interested: updatedInterested }),
      });
      const eventRes = await fetch(`/api/events/${eventId}`);
      const latestEvent = await eventRes.json();
      const currentCount = latestEvent.interestedCount ?? 0;
      const interestedCount = isAdding ? currentCount + 1 : currentCount - 1;
      await fetch(`/api/events/${eventId}?type=interested`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ interestedCount: interestedCount }),
      });
      setUser((prev) => ({ ...prev, interested: updatedInterested }));
    } catch (err) {
      console.error("Failed to update interested events:", err);
    }
  };

  if (loading) return <p className="text-[#6A161C] text-center">Loading...</p>;
  if (!event)
    return <p className="text-[#6A161C] text-center">Event not found.</p>;

  return (
    <section className="flex flex-col justify-between gap-24 w-full h-min bg-[#0E7C71]">
      <div className="w-full h-[400px] relative">
        <Image
          src="/christmas.jpg"
          alt="Event photo"
          fill
          className="object-cover"
          priority
        />
      </div>
      <h1 className="text-center justify-center text-[#FFFAEF] text-5xl font-bold tracking-[4.80px]">
        {event.name}
      </h1>
      <div className="flex flex-row items-center justify-between mx-24">
        <h3 className="text-[#FFFAEF] text-3xl font-medium tracking-wider">
          {event.from} - {event.to}
        </h3>
        <div className="flex flex-row gap-4 items-center justify-between">
          <Image
            src="/location.svg"
            width={30}
            height={30}
            alt="Location Icon"
          />
          <h3 className="text-[#FFFAEF] text-3xl font-medium tracking-wider">
            {event.street ? `${event.street},` : ""} {event.city},{" "}
            {event.country}
          </h3>
        </div>
      </div>
      <hr className="text-[#FFFAEF] mx-24" />
      <div className="justify-center text-[#FFFAEF] text-xl font-medium leading-8 tracking-wide mx-24">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar
        eros eu massa posuere, ut lobortis velit ornare. Aliquam nec lacinia
        lectus. Morbi ultricies dui vitae arcu rhoncus bibendum. Praesent
        pretium mauris nec massa maximus dignissim. Sed lorem dui, scelerisque
        in ornare sed, luctus vel tortor. Vivamus venenatis lobortis diam, at
        sodales ligula lacinia vitae. Vivamus erat nulla, maximus at sem sed,
        condimentum mollis mi. Sed viverra, felis gravida mollis dignissim, nisl
        nisl tincidunt est, ac suscipit odio diam sit amet tellus. Suspendisse
        pharetra nec sapien convallis tristique. Phasellus arcu ligula, tempor
        eu maximus eget, porttitor sit amet erat. Nulla iaculis accumsan
        faucibus. Sed malesuada nibh enim, ac laoreet nunc pharetra non. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Quisque vel tortor semper, dictum tortor varius,
        aliquam sem. Aenean hendrerit pretium dignissim.
        <br />
      </div>
      <div className="flex flex-row items-start gap-12 mx-24 mb-24">
        {user && user.email !== "admin@gmail.com" && (
          <button
            onClick={toggleFavourite}
            className="flex flex-row items-center justify-center gap-4 bg-[#004A41] text-[#FFFAEF] tracking-wider rounded-[10px] py-2.5 px-5
                hover:bg-[#0E7C71] hover:border hover:border-[#FFFAEF]"
          >
            <h5 className="text-center justify-center text-xl font-medium tracking-widest">
              {favourite.text}
            </h5>
            <Image
              src={favourite.src}
              width={25}
              height={25}
              alt="favourite icon"
            />
          </button>
        )}
        {user && user.email !== "admin@gmail.com" && (
          <button
            onClick={toggleInterested}
            className="flex flex-row items-center justify-center gap-4 bg-[#6A161C] text-[#FFFAEF] tracking-wider rounded-[10px] py-2.5 px-5 hover:bg-[#5E040A]"
          >
            <h5 className="text-center justify-center text-xl font-medium tracking-widest">
              Interested/Going
            </h5>
            <Image
              src={interested.src}
              width={25}
              height={25}
              alt="favourite icon"
            />
          </button>
        )}
      </div>
    </section>
  );
}
