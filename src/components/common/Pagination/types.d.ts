export interface PaginationProps {
  count: number;
  page: number;
  handlePageChange: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => void;
  rowsPerPage: number;
}
