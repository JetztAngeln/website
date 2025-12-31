"use server";

import { createNhostClient } from "../../lib/nhost/server";
import type { _Enumtable_User_Club_Role_Enum } from "../graphql/generated/sdks";
import { getGraphQLClient } from "../graphql/graphql_provider";

export async function acceptNewJoiner(
    userId: string,
    clubId: string,
): Promise<boolean> {
    const nhost = await createNhostClient();
    const session = nhost.getUserSession();

    if (!session) {
        return false;
    }

    if (session.user?.id === userId) {
        return false;
    }

    try {
        await getGraphQLClient(nhost).AcceptNewJoiner({ userId, clubId });

        return true;
    } catch (error) {
        console.error("Failed to accept new joiner:", error);
        return false;
    }
}

export async function deleteUserClubRelation(
    userId: string,
    clubId: string,
): Promise<boolean> {
    const nhost = await createNhostClient();
    const session = nhost.getUserSession();

    if (!session) {
        return false;
    }

    if (session.user?.id === userId) {
        return false;
    }

    try {
        await getGraphQLClient(nhost).DeleteUserClubRelation({
            userId,
            clubId,
        });

        return true;
    } catch (error) {
        console.error("Failed to delete user:", error);
        return false;
    }
}

export async function updateUserRole(
    userId: string,
    role: string,
): Promise<boolean> {
    const nhost = await createNhostClient();
    const session = nhost.getUserSession();

    if (!session) {
        return false;
    }
    if (session.user?.id === userId) {
        return false;
    }

    try {
        await getGraphQLClient(nhost).UpdateUserRole({
            userId,
            role: role as _Enumtable_User_Club_Role_Enum,
        });

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
