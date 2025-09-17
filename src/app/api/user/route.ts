import { NextResponse } from "next/server";
import { getUserInfo } from "@/app/lib/nhost/server/data/user";

export async function GET(request: Request) {
  try {
    const user = await getUserInfo();

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    console.log("Fetched user info:", user);

    return NextResponse.json(user);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
