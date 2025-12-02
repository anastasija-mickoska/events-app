"use client";

export default function AddEvent() {
  const labelStyle = "text-left text-[#6A161C] font-medium tracking-wider mb-2";

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <button
        onClick={() => window.history.back()}
        className="absolute top-4 right-4 text-[#FFFAEF] text-2xl font-bold cursor-pointer"
      >
        ×
      </button>

      <div className="flex flex-col w-[600px] bg-[#FFFAEF] rounded-[10px] max-h-[85vh] overflow-y-auto shadow-[0px_5px_10px_0px_rgba(255,250,239,0.80)]">
        <h1 className="text-center text-[#6A161C] text-6xl font-bold tracking-[6.40px] mt-24">
          ADD EVENT
        </h1>

        <form className="flex flex-col items-start justify-center mt-16 px-[15%]">
          <label className={labelStyle}>Name</label>
          <input
            type="text"
            className="rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#6A161C]/50 text-[#6A161C] w-full px-5 py-2.5 mb-6"
          />

          <div className="flex flex-row gap-16 mb-6">
            <div className="flex flex-col">
              <label className={labelStyle}>From</label>
              <input
                type="date"
                className="rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#6A161C]/50 py-2.5 px-5"
              />
            </div>
            <div className="flex flex-col">
              <label className={labelStyle}>To</label>
              <input
                type="date"
                className="rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#6A161C]/50 py-2.5 px-5"
              />
            </div>
          </div>

          <label className={labelStyle}>Street</label>
          <input
            type="text"
            className="rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#6A161C]/50 text-[#6A161C] w-full px-5 py-2.5 mb-6"
          />

          <label className={labelStyle}>City</label>
          <input
            type="text"
            className="rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#6A161C]/50 text-[#6A161C] w-full px-5 py-2.5 mb-6"
          />

          <label className={labelStyle}>Country</label>
          <input
            type="text"
            className="rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#6A161C]/50 text-[#6A161C] w-full px-5 py-2.5 mb-6"
          />

          <button className="w-48 bg-[#FFFAEF] text-[#6A161C] rounded-[10px] shadow-[5px_5px_10px_0px_rgba(0,0,0,0.25)] border border-[#6A161C] py-1 mt-4
          hover:bg-[#6A161C] hover:text-[#FFFAEF]">
            Upload Image
          </button>

          <button className="bg-[#6A161C] text-[#FFFAEF] rounded-[10px] w-[50%] tracking-widest py-2.5 mb-24 mt-12 self-center hover:bg-[#5E040A]">
            ADD EVENT
          </button>
        </form>
      </div>
    </div>
  );
}
