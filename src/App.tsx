import { PokemonTable } from "./components/PokemonTable";
import { Client, Provider, cacheExchange, fetchExchange } from "urql";

export const App = () => {
  return (
    <Provider
      value={
        new Client({
          url: "https://beta.pokeapi.co/graphql/v1beta",
          exchanges: [cacheExchange, fetchExchange],
        })
      }
    >
      <header>
        <h1>
          <code>@tanstack/react-table</code> with <code>hono/jsx/dom</code>
        </h1>
      </header>
      <main>
        <div>
          <p>
            The table below is created using{" "}
            <a
              href="https://pokeapi.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              PokéAPI
            </a>{" "}
            GraphQL API.
          </p>
        </div>
        <hr />
        <PokemonTable />
      </main>
    </Provider>
  );
};
