"use client";

import Image from "next/image";

export default function EditEvent() {
  const labelStyle =
    "items-start text-[#6A161C] text-base font-medium tracking-wider";

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <button
        onClick={() => window.history.back()}
        className="absolute top-4 right-4 text-[#FFFAEF] text-2xl font-bold cursor-pointer"
      >
        ×
      </button>
      <div className="flex flex-col w-[600px] bg-[#FFFAEF] rounded-[10px] max-h-[85vh] overflow-y-auto shadow-[0px_5px_10px_0px_rgba(255,250,239,0.80)]">
        <h1 className="text-center justify-center text-[#6A161C] text-6xl font-bold tracking-[6.40px] mt-24">
          EDIT EVENT
        </h1>
        <form className="flex flex-col items-start justify-center mt-16 px-[15%]">
          <label className={labelStyle}>Name</label>
          <input
            type="text"
            className="w-full rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#6A161C]/50 text-[#6A161C] px-5 py-2.5 mb-6"
            defaultValue={"Christmas Market Name"}
          />
          <div className="flex flex-row gap-16 mb-6">
            <div className="flex flex-col">
              <label className={labelStyle}>From</label>
              <input
                type="date"
                defaultValue={""}
                className="w-full rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#6A161C]/50 py-2.5 px-5"
              />
            </div>
            <div className="flex flex-col">
              <label className={labelStyle}>To</label>
              <input
                type="date"
                defaultValue={""}
                className="w-full rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#6A161C]/50 py-2.5 px-5"
              />
            </div>
          </div>
          <label className={labelStyle}>Street</label>
          <input
            type="text"
            className="rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#6A161C]/50 text-[#6A161C] w-full px-5 py-2.5 mb-6"
            defaultValue={"Street"}
          />
          <label className={labelStyle}>City</label>
          <input
            type="text"
            className="rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#6A161C]/50 text-[#6A161C] w-full px-5 py-2.5 mb-6"
            defaultValue={"City"}
          />
          <label className={labelStyle}>Country</label>
          <input
            type="text"
            className="rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#6A161C]/50 text-[#6A161C] w-full px-5 py-2.5 mb-6"
            defaultValue={"Country"}
          />
          <div className="flex flex-col gap-4 items-center justify-center">
            <Image
              src="/christmas.jpg"
              width={250}
              height={220}
              alt="Christmas market photo"
              className="rounded-[10px]"
            />
            <div className="flex flex-row items-center justify-center gap-4">
              <button className="w-48 bg-[#FFFAEF] text-[#6A161C] rounded-[10px] shadow-[5px_5px_10px_0px_rgba(0,0,0,0.25)] border border-[#6A161C] py-1">
                Upload Image
              </button>
              <button className="w-48 bg-[#FFFAEF] text-[#6A161C] rounded-[10px] shadow-[5px_5px_10px_0px_rgba(0,0,0,0.25)] border border-[#6A161C] py-1">
                Delete Image
              </button>
            </div>
          </div>
          <button className="bg-[#6A161C] text-[#FFFAEF] rounded-[10px] w-[50%] tracking-widest py-2.5 mb-24 mt-12 self-center">
            SAVE CHANGES
          </button>
        </form>
      </div>
    </div>
  );
}
