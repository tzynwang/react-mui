import React, { useState, useEffect, useMemo } from "react";
import axios, { AxiosResponse } from "axios";

import ButtonDemo from "./../common/Button";
import InputDemo from "./../common/Input";
import CheckBoxDemo from "./../common/CheckBox";
import TableTabsDemo from "./../common/Tabs/TableTabs";
import TablePaginationDemo from "./../common/Pagination";
import TableDemo from "./../common/Table";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import {
  Gender,
  User,
  FetchUserListRes,
  UserForTable,
  UserForTableHeader,
} from "./types";

const TABS: Gender[] = ["female", "male"];
const START_PAGE = 0;
const PER_PAGE = 10;
const TOTAL_COUNTS = 50;

const TABLE_HEAD = [
  "Gender",
  "Name",
  "Email",
  "Age",
  "Country",
] as UserForTableHeader;

function App(): React.ReactElement {
  // states
  const [currentTab, setCurrentTab] = useState<Gender>("female");
  const [userList, setUserList] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(START_PAGE);
  const userListForTable: UserForTable[] = useMemo(
    () =>
      userList.map((user) => ({
        Id: user.login.uuid,
        Gender: user.gender,
        Name: `${user.name.first} ${user.name.last}`,
        Email: user.email,
        Age: user.dob.age,
        Country: user.location.country,
      })),
    [userList]
  );

  // functions
  const handleTabChange = (e: React.SyntheticEvent, newValue: Gender) => {
    setCurrentTab(newValue);
    setCurrentPage(START_PAGE);
  };
  const handlePageChange = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => {
    setCurrentPage(page);
  };

  // hooks
  useEffect(() => {
    async function fetchUser() {
      const res = await axios.get<undefined, AxiosResponse<FetchUserListRes>>(
        `https://randomuser.me/api/?gender=${currentTab}&results=${PER_PAGE}&page=${
          currentPage + 1
        }`
      );
      setUserList(res.data.results);
    }
    fetchUser();
  }, [currentTab, currentPage]);

  return (
    <Box className="App" sx={{ p: 3 }}>
      <Stack spacing={2} direction="row" sx={{ margin: "1rem 0" }}>
        <ButtonDemo />
      </Stack>
      <Stack direction="row" sx={{ margin: "1rem 0" }}>
        <InputDemo />
      </Stack>
      <Stack direction="row" sx={{ margin: "1rem 0" }}>
        <CheckBoxDemo />
      </Stack>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TableTabsDemo
          tabContent={TABS}
          currentTab={currentTab}
          handleTabChange={handleTabChange}
        />
        <TablePaginationDemo
          count={TOTAL_COUNTS}
          page={currentPage}
          handlePageChange={handlePageChange}
          rowsPerPage={PER_PAGE}
        />
      </Box>
      <TableDemo tableHead={TABLE_HEAD} tableContentList={userListForTable} />
    </Box>
  );
}

export default App;
