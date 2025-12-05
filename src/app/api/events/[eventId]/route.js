import { getEventById, changeFavouritesCount, changeInterestedCount } from "@/lib/endpoints/client";

export async function GET(request, { params }) {
  const { eventId } = await params; 
  try {
    const event = await getEventById(eventId);
    if (!event) {
      return Response.json({ error: "Event not found" }, { status: 404 });
    }
    return Response.json(event);
  } catch (error) {
    console.error("API error:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type");
    const { eventId } = await params;
    const data = await req.json(); 

    let updatedEvent = null;

    if (type === "favourite") {
      updatedEvent = await changeFavouritesCount(eventId, data.favouritesCount);
    } else if (type === "interested") {
      updatedEvent = await changeInterestedCount(eventId, data.interestedCount);
    } else {
      return Response.json({ error: "Invalid type" }, { status: 400 });
    }

    return Response.json(updatedEvent, { status: 200 });
  } catch (err) {
    console.error("API error:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}