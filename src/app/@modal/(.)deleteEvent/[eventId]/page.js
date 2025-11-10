"use client";

export default function DeleteEvent() {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-12 w-[700px] bg-[#FFFAEF] rounded-[10px] shadow-[0px_5px_10px_0px_rgba(255,250,239,0.80)] p-10">
        <h1 className="text-center text-[#6A161C] text-5xl font-bold tracking-[6.40px]">
          DELETE EVENT
        </h1>

        <p className="text-center text-[#6A161C] font-medium text-xl tracking-wider">
          Are you sure you want to delete this event?
        </p>

        <div className="flex flex-row justify-center gap-8 w-full mt-4">
          <button
            onClick={() => window.history.back()}
            className="w-1/3 bg-[#FFFAEF] text-[#6A161C] rounded-[10px] border border-[#6A161C] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-2.5 font-medium"
          >
            CANCEL
          </button>
          <button className="w-1/3 bg-[#6A161C] text-[#FFFAEF] rounded-[10px] py-2.5 font-medium">
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}
