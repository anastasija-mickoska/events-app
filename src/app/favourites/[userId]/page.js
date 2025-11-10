import EventFavourite from '../../../../components/EventFavourite.js';

export default function Favourites() {
    return (
        <section className="flex flex-col gap-24 justify-between w-full h-min bg-[#FFFAEF] text-[#6A161C] py-24">
            <h1 className="text-center justify-center text-5xl font-bold tracking-[6.40px]">MY FAVOURITES</h1>
            <div className="flex flex-col gap-12 justify-between mx-24">
                <h3 className="text-start text-4xl font-medium underline capitalize tracking-[4.80px]">Upcoming events</h3>
                <div className="grid grid-cols-3 gap-4">
                    <EventFavourite/>
                </div>
            </div>
            <div className="flex flex-col gap-12 justify-between mx-24">
                <h3 className="text-start text-4xl font-medium underline capitalize tracking-[4.80px]">Past events</h3>
                <div className="flex flex-row gap-5">
                    <EventFavourite/>
                    <EventFavourite/>
                    <EventFavourite/>
                </div>
            </div>
        </section>
    )
}