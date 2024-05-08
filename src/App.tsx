import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PokemonTable } from "./components/PokemonTable";

const client = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={client}>
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
    </QueryClientProvider>
  );
};
