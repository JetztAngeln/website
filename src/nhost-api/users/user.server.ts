import { createNhostClient } from "@nhost/nhost-js";
import { getGraphQLClient } from "../graphql/graphql_provider";

export async function isUserAdmin(userId: string): Promise<boolean> {
	const nhost = createNhostClient();

	const result = await getGraphQLClient(nhost).GetAdminRole({
		userId,
	});

	return result.user_club_relation.length > 0;
}
