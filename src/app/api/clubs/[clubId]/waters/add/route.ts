import { addWaterToClub } from "@/app/lib/nhost/server/data/club_waters";
import { NextResponse } from "next/server";

export async function POST(req: Request, { params }: { params: Promise<{ clubId: string }> },) {
    const { clubId } = await params;

    if (!clubId) {
      return NextResponse.json(
        { error: "Missing clubId", data: [], total: 0 },
        { status: 400 },
      );
    }

    let body: { geometry?: any; name?: string };
    try {
      body = await req.json();
    } catch (e) {
      return NextResponse.json(
        { error: "Invalid JSON body." },
        { status: 400 }
      );
    }

    const { geometry, name } = body;

    if (!clubId || !geometry || !name) {
      return NextResponse.json(
        { error: "Missing clubId, geometry, or name in request." },
        { status: 400 }
      );
    }

  try {
        const result = await addWaterToClub(
            clubId,
            name,
            geometry
        );

        if (result) {
            return NextResponse.json(
                { message: "Water feature added successfully.", data: result },
                { status: 200 }
            );
        } else {
             return NextResponse.json(
                { error: "Failed to save water feature to database. Check server logs." },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Server error during water feature creation:", error);
        return NextResponse.json(
            { error: "Internal Server Error." },
            { status: 500 }
        );
    }
}
