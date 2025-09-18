import { NextResponse } from "next/server";
import { MemberSortEnum } from "@/app/lib/enums/MemberSortEnum";
import { getUsersByClubId } from "@/app/lib/nhost/server/data/users";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ clubId: string }> },
) {
  try {
    const { clubId } = await params;

    if (!clubId) {
      return NextResponse.json(
        { error: "Missing clubId", data: [], total: 0 },
        { status: 400 },
      );
    }

    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") ?? "1", 10);
    const pageSize = parseInt(url.searchParams.get("pageSize") ?? "10", 10);
    const search = url.searchParams.get("search") ?? "";
    const sortParam =
      (url.searchParams.get("sort") as MemberSortEnum) ??
      MemberSortEnum.DISPLAY_NAME_ASC;

    const result = await getUsersByClubId(
      clubId,
      page,
      pageSize,
      search,
      sortParam,
    );

    if (!result) {
      return NextResponse.json(
        { error: "Failed to fetch users", data: [], total: 0 },
        { status: 500 }, // Use a 500 error for failed operations
      );
    }

    if (result.users.length === 0) {
      return NextResponse.json(
        { data: [], total: 0 }, // No error message needed, just empty data
        { status: 200 }, // A 200 OK is appropriate here
      );
    }

    return NextResponse.json(
      { data: result.users, total: result.total },
      { status: 200 },
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", data: [], total: 0 },
      { status: 500 },
    );
  }
}
