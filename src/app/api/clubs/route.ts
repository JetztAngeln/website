import { NextResponse } from "next/server";
import { getClubsForCurrentUser } from "@/app/lib/nhost/server/data/clubs";

export async function GET(request: Request) {
  try {
    const clubs = await getClubsForCurrentUser();

    if (!clubs) {
      return NextResponse.json(
        { error: "No clubs were found" },
        { status: 404 },
      );
    }

    console.log("Fetched user clubs:", clubs);

    return NextResponse.json(clubs);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
