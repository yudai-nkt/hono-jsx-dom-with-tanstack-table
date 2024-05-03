import { useMemo } from "hono/jsx";
import { useQuery } from "urql";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Pagination } from "./Pagination";
import { SortIndicator } from "./SortIndicator";
import Query from "../graphql/pokemon.graphql";

type Pokemon = {
  id: number;
  name: string;
  type1: string;
  type2: string;
  gen: number | null | undefined;
};

export const PokemonTable = () => {
  const [{ fetching, data }] = useQuery({ query: Query });

  return fetching || !data ? (
    <p>Loading...</p>
  ) : (
    <Table
      data={data.pokemon.map((p) => ({
        id: p.id,
        name: p.name,
        type1: p.types[0]?.pokemon_v2_type?.name ?? "N/A",
        type2: p.types[1]?.pokemon_v2_type?.name ?? "N/A",
        gen: p.specy?.generation_id,
      }))}
    />
  );
};

const Table = ({ data }: { data: Pokemon[] }) => {
  const columnHelper = createColumnHelper<Pokemon>();
  const columns = useMemo(
    () => [
      columnHelper.accessor("id", {
        header: ({ column }) => (
          <span>
            Pokédex #{" "}
            <button onClick={column.getToggleSortingHandler()}>
              <SortIndicator direction={column.getIsSorted()} />
            </button>
          </span>
        ),
      }),
      columnHelper.accessor("name", { header: "Name" }),
      columnHelper.accessor("type1", { header: "Type 1" }),
      columnHelper.accessor("type2", { header: "Type 2" }),
      columnHelper.accessor("gen", {
        header: "Debut in",
        cell: ({ row }) => `Gen ${row.original.gen}`,
        filterFn: (row, _, filter: string) =>
          filter === "" || row.getValue("gen") === Number(filter),
      }),
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    initialState: {
      pagination: { pageSize: 200 },
    },
    enableSortingRemoval: false,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  return (
    <>
      <label for="gen-filter">Filter by generation:</label>
      <select
        name="generation"
        id="gen-filter"
        onChange={({ target }) =>
          target instanceof HTMLSelectElement &&
          table.getColumn("gen")?.setFilterValue(target.value)
        }
        value={table.getColumn("gen")?.getFilterValue() as string}
      >
        <option value="">Choose a generation</option>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((gen) => (
          <option value={gen} key={gen}>
            Gen {gen}
          </option>
        ))}
      </select>
      <Pagination table={table} />
      <table>
        <caption>List of all Pokémon</caption>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
