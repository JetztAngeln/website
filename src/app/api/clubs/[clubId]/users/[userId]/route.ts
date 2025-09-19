import { NextResponse } from "next/server";
import {
  deleteUserClubRelation,
  updateUserRole,
} from "@/app/lib/nhost/server/data/user_club_relation";

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ userId: string; clubId: string }> },
) {
  try {
    const { userId, clubId } = await params;
    if (!userId || !clubId) {
      return NextResponse.json(
        { error: "Missing userId or clubId" },
        { status: 400 },
      );
    }
    const success = await deleteUserClubRelation(userId, clubId);
    if (!success) {
      return NextResponse.json(
        { error: "Failed to delete user" },
        { status: 500 },
      );
    }
    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ userId: string }> },
) {
  try {
    const { userId } = await params;
    const { role } = await req.json();
    console.log("Updating user role:", { userId, role });
    if (!userId || !role) {
      return NextResponse.json(
        { error: "Missing userId or role" },
        { status: 400 },
      );
    }

    const success = await updateUserRole(userId, role);
    if (!success) {
      return NextResponse.json(
        { error: "Failed to update user role" },
        { status: 500 },
      );
    }
    return NextResponse.json(
      { message: "User role updated successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
