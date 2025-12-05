"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase/client";

export default function AddEvent() {
  const router = useRouter();
  const labelStyle = "text-left text-[#6A161C] font-medium tracking-wider mb-2";

  const [formData, setFormData] = useState({
    name: "",
    from: "",
    to: "",
    street: "",
    city: "",
    country: "",
    image: null,
    favouriteCount: 0,
    interestedCount: 0
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // const handleImageUpload = async (file) => {
  //   if (!file) return;
  //   const storageRef = ref(storage, `events/${Date.now()}_${file.name}`);
  //   await uploadBytes(storageRef, file);
  //   const url = await getDownloadURL(storageRef);
  //   setFormData(prev => ({ ...prev, image: url }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = formData.image;
    if (formData.image instanceof File) {
      const storageRef = ref(storage, `events/${Date.now()}_${formData.image.name}`);
      await uploadBytes(storageRef, formData.image);
      imageUrl = await getDownloadURL(storageRef);
    }

    const res = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        from: formData.from,
        to: formData.to,
        street: formData.street,
        city: formData.city,
        country: formData.country,
        image: imageUrl, 
        favouriteCount: formData.favouriteCount,
        interestedCount: formData.interestedCount
      }),
    });

    if (res.ok) router.push("/");
    else {
      const data = await res.json();
      alert("Error: " + data.error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <button
        onClick={() => router.back()}
        className="absolute top-4 right-4 text-[#FFFAEF] text-2xl font-bold cursor-pointer"
      >
        ×
      </button>

      <div className="flex flex-col w-[600px] bg-[#FFFAEF] rounded-[10px] max-h-[85vh] overflow-y-auto shadow-[0px_5px_10px_0px_rgba(255,250,239,0.80)]">
        <h1 className="text-center text-[#6A161C] text-6xl font-bold tracking-[6.40px] mt-24">
          ADD EVENT
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start justify-center mt-16 px-[15%]"
        >
          <label className={labelStyle}>Name</label>
          <input
            required
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="rounded-[10px] shadow border border-[#6A161C]/50 text-[#6A161C] w-full px-5 py-2.5 mb-6"
          />

          <div className="flex flex-row gap-16 mb-6">
            <div className="flex flex-col">
              <label className={labelStyle}>From</label>
              <input
                required
                name="from"
                type="date"
                value={formData.from}
                onChange={handleChange}
                className="rounded-[10px] shadow border border-[#6A161C]/50 py-2.5 px-5"
              />
            </div>
            <div className="flex flex-col">
              <label className={labelStyle}>To</label>
              <input
                required
                name="to"
                type="date"
                value={formData.to}
                onChange={handleChange}
                className="rounded-[10px] shadow border border-[#6A161C]/50 py-2.5 px-5"
              />
            </div>
          </div>

          <label className={labelStyle}>Street</label>
          <input
            name="street"
            type="text"
            value={formData.street}
            onChange={handleChange}
            className="rounded-[10px] shadow border border-[#6A161C]/50 text-[#6A161C] w-full px-5 py-2.5 mb-6"
          />

          <label className={labelStyle}>City</label>
          <input
            required
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            className="rounded-[10px] shadow border border-[#6A161C]/50 text-[#6A161C] w-full px-5 py-2.5 mb-6"
          />

          <label className={labelStyle}>Country</label>
          <input
            required
            name="country"
            type="text"
            value={formData.country}
            onChange={handleChange}
            className="rounded-[10px] shadow border border-[#6A161C]/50 text-[#6A161C] w-full px-5 py-2.5 mb-6"
          />

          <label className="w-48 bg-[#FFFAEF] text-[#6A161C] rounded-[10px] shadow-[5px_5px_10px_0px_rgba(0,0,0,0.25)] border border-[#6A161C] py-1 mt-4 hover:bg-[#6A161C] hover:text-[#FFFAEF] cursor-pointer text-center">
            Upload Image
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.files[0] }))}
              className="hidden"
            />
          </label>

          {formData.image && (
            <img
              src={typeof formData.image === "string" ? formData.image : URL.createObjectURL(formData.image)}
              alt="Selected Event Image"
              className="w-64 h-48 mt-2"
            />
          )}

          <button
            type="submit"
            className="bg-[#6A161C] text-[#FFFAEF] rounded-[10px] w-[50%] tracking-widest py-2.5 mb-24 mt-12 self-center hover:bg-[#5E040A]"
          >
            ADD EVENT
          </button>
        </form>
      </div>
    </div>
  );
}
