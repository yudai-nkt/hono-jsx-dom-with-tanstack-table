import Query from "../graphql/pokemon.graphql";
import { useQuery } from "urql";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Pagination } from "./Pagination";

export const PokemonTable = () => {
  const [{ fetching, data }] = useQuery({ query: Query });

  if (fetching) {
    return <p>Loading...</p>;
  }

  const pokemon = data!.pokemon.map((p) => ({
    id: p.id,
    name: p.name,
    type1: p.types[0]?.pokemon_v2_type?.name ?? "N/A",
    type2: p.types[1]?.pokemon_v2_type?.name ?? "N/A",
    gen: p.specy?.generation_id,
  }));

  const columnHelper = createColumnHelper<(typeof pokemon)[number]>();
  const columns = [
    columnHelper.accessor("id", { header: "Pokédex #" }),
    columnHelper.accessor("name", { header: "Name" }),
    columnHelper.accessor("type1", { header: "Type 1" }),
    columnHelper.accessor("type2", { header: "Type 2" }),
    columnHelper.accessor("gen", {
      header: "First appeared in",
      cell: ({ row }) => `Gen ${row.original.gen}`,
    }),
  ];

  const table = useReactTable({
    data: pokemon,
    columns,
    initialState: { pagination: { pageSize: 100 } },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
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
