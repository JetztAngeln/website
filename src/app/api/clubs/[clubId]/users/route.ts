import { NextResponse } from "next/server";
import { MemberSortEnum } from "@/app/lib/enums/MemberSortEnum";
import {
  getUsersByClubId,
  type UserInfo,
} from "@/app/lib/nhost/server/data/users";

export async function GET(
  req: Request,
  { params }: { params: { clubId: string } },
) {
  try {
    const { clubId } = params;

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
    const sortParam = MemberSortEnum.DISPLAY_NAME_ASC;

    const validKeys: Array<keyof UserInfo> = [
      "id",
      "avatarUrl",
      "displayName",
      "email",
      "role",
      "lastSeen",
    ];

    // let sortBy: { id: keyof UserInfo; desc: boolean } | null = null;

    // if (sortParam) {
    //   const [id, direction] = sortParam.split(":");
    //   if (validKeys.includes(id as keyof UserInfo)) {
    //     sortBy = { id: id as keyof UserInfo, desc: direction === "desc" };
    //   } else {
    //     console.warn(`Invalid sort key: ${id}, ignoring sort`);
    //   }
    // }

    const result = await getUsersByClubId(
      clubId,
      page,
      pageSize,
      search,
      sortParam,
    );

    if (!result || result.users.length === 0) {
      return NextResponse.json(
        { error: "No users found", data: [], total: 0 },
        { status: 404 },
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
