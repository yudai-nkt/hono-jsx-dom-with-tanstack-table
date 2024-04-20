import { useState } from "hono/jsx/dom";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>
          TanStack Table with <code>hono/jsx/dom</code>
        </h1>
      </header>
      <main>
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/app.tsx</code> and save to test HMR
          </p>
        </div>
      </main>
    </>
  );
};
