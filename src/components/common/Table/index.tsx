import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { FunctionalTableProps } from "./types";

function FunctionalTable(props: FunctionalTableProps) {
  const { userList } = props;

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="demo table">
        <TableHead>
          <TableRow>
            <TableCell>Gender</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Country</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((user) => (
            <TableRow
              key={user.login.uuid}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.gender}
              </TableCell>
              <TableCell>
                {user.name.first} {user.name.last}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.dob.age}</TableCell>
              <TableCell>{user.location.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default FunctionalTable;
