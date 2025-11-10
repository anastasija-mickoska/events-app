import Image from "next/image"

export default function HomePage () {
    return (
        <div className="relative w-full h-[700px]">
            <Image src="/christmas.jpg" alt="Christmas market photo" fill className="object-cover brightness-75" priority/>
            <div className="absolute inset-0 flex flex-col items-start justify-end ml-24 text-[#FFFAEF] mb-24">
                <h1 className=" w-[900px] text-8xl font-bold tracking-[5px] leading-[120px]">Join the Christmas spirit</h1>
                <p className="w-[900px] text-2xl font-normal mt-8 tracking-[5px]">Explore the Christmas markets in Europe...</p>
            </div>
        </div>
    )
}