import { getEvents } from "@/lib/endpoints/server";
import {addEvent, addEventToFavourites} from '@/lib/endpoints/client';

export async function GET() {
  const events = await getEvents();
  return Response.json(events);
}

export async function POST(req) {
  try {
    const data = await req.json();
    const result = await addEvent(data);
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const data = await req.json();
    const result = await addEventToFavourites(id, data.favourites);
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}