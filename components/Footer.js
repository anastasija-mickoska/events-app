import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex items-center w-full h-24 bg-[#6A161C]">
            <div className="flex flex-row items-center gap-4 ml-24 text-[#FFFAEF] font-medium tracking-[3px]">
                <Image src="/copyright.svg" alt="Copyright icon" width={20} height={20} />
                <span>2025 COMPANY NAME</span>
            </div>
        </div>
    )
}