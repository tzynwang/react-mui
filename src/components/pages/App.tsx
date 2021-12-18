import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

import ButtonDemo from "./../common/Button";
import InputDemo from "./../common/Input";
import CheckBoxDemo from "./../common/CheckBox";
import TableTabsDemo from "./../common/Tabs/TableTabs";
import TablePaginationDemo from "./../common/Pagination";
import TableDemo from "./../common/Table";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { Gender, User, FetchUserListRes } from "./types";

const TABS: Gender[] = ["female", "male"];
const START_PAGE = 0;
const PER_PAGE = 10;
const TOTAL_COUNTS = 50;

function App(): React.ReactElement {
  // states
  const [currentTab, setCurrentTab] = useState<Gender>("female");
  const [userList, setUserList] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(START_PAGE);

  // functions
  const handleTabChange = (e: React.SyntheticEvent, newValue: Gender) => {
    setCurrentTab(newValue);
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
      <TableDemo userList={userList} />
    </Box>
  );
}

export default App;
