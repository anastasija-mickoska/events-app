import EventsList from "./EventsList";

export default async function Events() {
  const res = await fetch("http://localhost:3000/api/events");
  const events = await res.json();
  return (
    <section className="flex flex-col items-center justify-items-center w-full h-min bg-[#004A41] pb-24">
      <h1
        id="events"
        className=" text-center justify-center text-[#FFFAEF] text-6xl font-bold tracking-[6.40px] mt-24 mb-24"
      >
        ALL EVENTS
      </h1>
      <EventsList initialEvents={events} />
    </section>
  );
}
