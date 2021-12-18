import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { FunctionalTableProps } from "./types";

function FunctionalTable(props: FunctionalTableProps) {
  const { tableHead, tableContentList } = props;

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="demo table">
        <TableHead>
          <TableRow>
            {tableHead.map((c) => (
              <TableCell key={c}>{c}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableContentList.map((content) => (
            <TableRow
              key={content.Id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {tableHead.map((key) => (
                <TableCell>{content[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default FunctionalTable;
