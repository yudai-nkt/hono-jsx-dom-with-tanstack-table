import nitrogql from "@nitrogql/rollup-plugin";
import { type UserConfig } from "vite";

export default {
  resolve: { alias: { react: "hono/jsx/dom", "react-dom": "hono/jsx/dom" } },
  plugins: [nitrogql({ include: ["**/*.graphql"] })],
} satisfies UserConfig;
