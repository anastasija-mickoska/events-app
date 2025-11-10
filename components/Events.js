import Event from "./Event";
import Image from "next/image";

export default function Events() {
    return(
        <section className="flex flex-col items-center justify-items-center w-full h-min bg-[#004A41] pb-24">
            <h1 id="events" className=" text-center justify-center text-[#FFFAEF] text-6xl font-bold tracking-[6.40px] mt-24 mb-24">ALL EVENTS</h1>
            <div className="flex flex-row w-full justify-between pl-48 pr-48">
                <div className="flex flex-row gap-4 bg-white/10 rounded-[10px] shadow-[0px_5px_5px_0px_rgba(0,0,0,0.50)] py-2.5 px-10 text-[#FFFAEF]">
                    <input type="text" placeholder="Search by city or country..."/>
                    <Image src="/search.svg" alt="Search..." width={25} height={25}/>
                </div>
                <div className="flex flex-row  bg-white/10 rounded-[10px] shadow-[0px_5px_5px_0px_rgba(0,0,0,0.50)] py-2.5 px-10 text-[#FFFAEF]">
                    <button>Sort by</button>
                </div>
            </div>
            <div className="w-full flex flex-col items-center mt-24 ml-24 mr-24">
                <Event/>
                <Event/>
            </div>
        </section>
    )
}