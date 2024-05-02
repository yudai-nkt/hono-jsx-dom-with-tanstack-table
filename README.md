# `@tanstack/react-table` with `hono/jsx/dom`

A sample app to investigate React Table compatibilty with Hono's client component (cf. [yudai-nkt/awesome-hono#4](https://github.com/yudai-nkt/awesome-hono/issues/4))

## Result

- Basic table rendering: compatible
- Client-side interaction:
  - sort: compatible
  - pagination: compatible
  - filter: compatible

### Additional notes

I also tried `@tanstack/react-query`'s `useSuspenseQuery`, but it was incompatible with Hono because `useSyncExternalStore` is missing.

## License

This repository is released under the MIT license, except for [`src/schema/pokeapi.json`](./src/schema/pokeapi.json), which is an introspection JSON for PokéAPI and [is MIT-licensed by uhyo](https://github.com/uhyo/nitrogql/tree/master/examples/vite).
