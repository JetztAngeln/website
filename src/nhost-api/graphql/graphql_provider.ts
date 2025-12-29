import { NhostClient } from "@nhost/nhost-js";
import { DocumentNode } from "graphql/language";
import { getSdk } from "./generated/sdks";

async function sendGraphQLRequest<TData, TVariables>(
  query: string,
  variables: TVariables,
  nhost: NhostClient
): Promise<TData> {
  const headers = new Headers();

  if (process.env.STAGING_NHOST_ACCESS_TOKEN != null) {
    headers.set("X-Access-Token", process.env.STAGING_NHOST_ACCESS_TOKEN);
  }

  try {
    const { body } = await nhost.graphql.request<TData, TVariables>(
      {
        query: query,
        variables: variables,
      },
      {
        headers,
      }
    );

    if (body.errors) {
      throw new Error(body.errors[0].message);
    }

    if (!body.data) throw new Error("GraphQL response missing data");

    return body.data;
  } catch (e) {
    console.error("GraphQL Error:", e);
    throw new Error(`GraphQL Error: ${e}`);
  }
}

// requester-Funktion
function createRequester(nhost: NhostClient) {
  return async <R, V>(doc: DocumentNode, vars?: V): Promise<R> => {
    return sendGraphQLRequest<R, V>(
      doc.loc!.source.body,
      vars ?? ({} as V),
      nhost
    );
  };
}

export function getGraphQLClient(nhost: NhostClient) {
  return getSdk(createRequester(nhost));
}
