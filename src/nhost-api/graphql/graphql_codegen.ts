import type { CodegenConfig } from "@graphql-codegen/cli";

const scalars = {
  jsonb: "Record<string, unknown> | Array<unknown>",
  timestamptz: "string",
  uuid: "string",
  citext: "string",
};

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/nhost-api/graphql/schema.graphql",
  documents: ["**/*.gql"],
  allowPartialOutputs: true,
  generates: {
    "src/nhost-api/graphql/generated/sdks.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-generic-sdk",
      ],
      config: {
        scalars: scalars,
      },
    },
  },
};

export default config;
