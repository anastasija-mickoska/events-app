import {getUserFavourites} from "@/lib/endpoints/client";

export async function GET(request, { params }) {
  const { userId } = await params; 
  try {
    const events = await getUserFavourites(userId);
    if (!events) {
      return Response.json({ error: "Couldn't get user favourites." }, { status: 404 });
    }
    return Response.json(events);
  } catch (error) {
    console.error("API error:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}