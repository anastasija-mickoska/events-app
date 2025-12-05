"use client";

import { useState } from "react";
import Event from "./Event";
import SearchAndSortOptions from "./SearchAndSortOptions";

export default function EventsList({ initialEvents = [] }) {
  const [filteredEvents, setFilteredEvents] = useState(initialEvents);

  return (
    <div className="w-full flex flex-col items-center mt-24 ml-24 mr-24 px-24">
      <SearchAndSortOptions
        initialEvents={initialEvents} 
        setFilteredEvents={setFilteredEvents} 
      />
      {filteredEvents.map((e) => (
        <Event key={e.id} {...e} />
      ))}
    </div>
  );
}
