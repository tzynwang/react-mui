import { LabelDisplayedRowsArgs } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";

import { PaginationProps } from "./types";

const LABEL_DISPLAY_ROW = ({
  from,
  to,
  count,
}: LabelDisplayedRowsArgs) => `第${from}至${to}項，總計${count}項`;

function Pagination(props: PaginationProps) {
  const { count, page, handlePageChange, rowsPerPage } = props;

  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      onPageChange={handlePageChange}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[]}
      labelDisplayedRows={LABEL_DISPLAY_ROW}
    />
  );
}

export default Pagination;
