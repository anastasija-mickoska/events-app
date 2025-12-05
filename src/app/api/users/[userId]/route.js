import { addEventToFavourites, addEventToInterested } from "@/lib/endpoints/client";

export async function PUT(req, { params }) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type");
    const { userId } = await params;
    const data = await req.json(); 

    let updatedUser = null;

    if (type === "favourite") {
      updatedUser = await addEventToFavourites(userId, data.favourites);
    } else if (type === "interested") {
      updatedUser = await addEventToInterested(userId, data.interested);
    } else {
      return Response.json({ error: "Invalid type" }, { status: 400 });
    }

    return Response.json(updatedUser, { status: 200 });
  } catch (err) {
    console.error("API error:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}