import { type Table } from "@tanstack/react-table";
import { FC } from "hono/jsx";

export const Pagination: FC<{ table: Table<any> }> = ({ table }) => (
  <div>
    <button
      onClick={() => table.firstPage()}
      disabled={!table.getCanPreviousPage()}
    >
      {"«"}
    </button>
    <button
      onClick={() => table.previousPage()}
      disabled={!table.getCanPreviousPage()}
    >
      {"‹"}
    </button>
    <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
      {"›"}
    </button>
    <button onClick={() => table.lastPage()} disabled={!table.getCanNextPage()}>
      {"»"}
    </button>{" "}
    <span>
      Page{" "}
      <strong>
        {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount().toLocaleString()}
      </strong>
    </span>
  </div>
);
