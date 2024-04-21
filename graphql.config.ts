import { type NitrogqlConfig } from "@nitrogql/cli";

export default {
  schema: "./src/schema/pokeapi.json",
  documents: "./src/**/*.graphql",
  extensions: {
    nitrogql: { generate: { schemaOutput: ".nitrogql/schema.d.ts" } },
  },
} satisfies NitrogqlConfig;
