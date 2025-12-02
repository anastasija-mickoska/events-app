import { getEvents } from "@/lib/endpoints/server";

export async function GET() {
  const events = await getEvents();
  return Response.json(events);
}