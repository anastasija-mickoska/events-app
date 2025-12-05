"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function EventsSearchSort({ initialEvents=[], setFilteredEvents }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState(null);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    let filtered = [...initialEvents];

    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter((event) => {
        const city = event.city?.toLowerCase() ?? "";
        const country = event.country?.toLowerCase() ?? "";
        return city.includes(term) || country.includes(term);
      });
    }
    if (sortOption) {
      switch (sortOption) {
        case "startDateAsc":
          filtered.sort((a, b) => new Date(a.from) - new Date(b.from));
          break;
        case "startDateDesc":
          filtered.sort((a, b) => new Date(b.from) - new Date(a.from));
          break;
        case "endDateAsc":
          filtered.sort((a, b) => new Date(a.to) - new Date(b.to));
          break;
        case "endDateDesc":
          filtered.sort((a, b) => new Date(b.to) - new Date(a.to));
          break;
        default:
          break;
      }
    }
    setFilteredEvents(filtered); 
  }, [searchTerm, sortOption, initialEvents, setFilteredEvents]);

  return (
    <div className="flex flex-row w-full justify-between px-48 relative mb-12">
      <div className="flex flex-row gap-4 bg-white/10 rounded-[10px] shadow-md py-2.5 px-10 text-[#FFFAEF]">
        <input
          type="text"
          placeholder="Search by city or country..."
          className="bg-transparent outline-none text-white placeholder:text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Image src="/search.svg" alt="Search..." width={25} height={25} />
      </div>

      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex flex-row cursor-pointer bg-white/10 rounded-[10px] shadow-md py-2.5 px-10 text-[#FFFAEF] hover:bg-[#0E7C71]"
        >
          Sort by
        </button>

        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 mt-2 w-64 bg-[#FFFAEF] rounded shadow-lg z-50"
          >
            <ul className="flex flex-col">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded"
                onClick={() => {
                  setSortOption("startDateDesc");
                  setIsDropdownOpen(false);
                }}
              >
                Start Date (newest - oldest)
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded"
                onClick={() => {
                  setSortOption("startDateAsc");
                  setIsDropdownOpen(false);
                }}
              >
                Start Date (oldest - newest)
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded"
                onClick={() => {
                  setSortOption("endDateDesc");
                  setIsDropdownOpen(false);
                }}
              >
                End Date (newest - oldest)
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded"
                onClick={() => {
                  setSortOption("endDateAsc");
                  setIsDropdownOpen(false);
                }}
              >
                End Date (oldest - newest)
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
