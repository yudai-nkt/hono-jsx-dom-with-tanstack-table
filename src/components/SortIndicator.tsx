import { type SortDirection } from "@tanstack/react-table";

export const SortIndicator = ({
  direction,
}: {
  direction: SortDirection | false;
}) => {
  switch (direction) {
    case "asc":
      // lucide:arrow-down-a-z
      // https://icon-sets.iconify.design/lucide/arrow-down-a-z/
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m3 16l4 4l4-4m-4 4V4m13 4h-5m0 2V6.5a2.5 2.5 0 0 1 5 0V10m-5 4h5l-5 6h5"
          ></path>
        </svg>
      );
    case "desc":
      // lucide:arrow-down-z-a
      // https://icon-sets.iconify.design/lucide/arrow-down-z-a/
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m3 16l4 4l4-4M7 4v16m8-16h5l-5 6h5m-5 10v-3.5a2.5 2.5 0 0 1 5 0V20m0-2h-5"
          ></path>
        </svg>
      );
    case false:
      // lucide:arrow-down-up
      // https://icon-sets.iconify.design/lucide/arrow-down-up/
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m3 16l4 4l4-4m-4 4V4m14 4l-4-4l-4 4m4-4v16"
          ></path>
        </svg>
      );
    default:
      throw direction satisfies never;
  }
};
