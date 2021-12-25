import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'
import { debounce } from 'lodash'

import InputDemo from './../common/Input'
import RadioBtnDemo from './../common/Radio'
import TableTabsDemo from './../common/Tabs/TableTabs'
import TableDemo from './../common/Table'

import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

import { Gender, User, FetchUserListRes, QueryCondition } from './types'

enum KEY {
  ENTER = 'Enter'
}

const TABS: Gender[] = ['female', 'male']
const DEFAULT_PAGE = 5
const DATA_PER_PAGE = [5, 7, 10]
const CONDITION: QueryCondition = {
  global: {
    results: DEFAULT_PAGE,
    gender: TABS[0],
    nat: ''
  },
  local: {
    nat: ''
  }
}

function App(): React.ReactElement {
  // states
  const [userList, setUserList] = useState<User[]>([])
  const [queryCondition, setQueryCondition] =
    useState<QueryCondition>(CONDITION)

  // functions
  const handleTabChange = (e: React.SyntheticEvent, newValue: Gender) => {
    setQueryCondition((prev) => ({
      ...prev,
      global: {
        results: prev.global.results,
        gender: newValue,
        nat: prev.global.nat
      }
    }))
  }
  const handleDataPerPageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setQueryCondition((prev) => ({
      ...prev,
      global: {
        results: +value,
        gender: prev.global.gender,
        nat: prev.global.nat
      }
    }))
  }
  const handleUserInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setQueryCondition((prev) => ({
      ...prev,
      local: { nat: e.target.value }
    }))
  }
  const handleKeyDownEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === KEY.ENTER) {
      handleSearch()
    }
  }
  const handleSearch = () => {
    setQueryCondition((prev) => ({
      ...prev,
      global: {
        results: prev.global.results,
        gender: prev.global.gender,
        nat: queryCondition.local.nat
      }
    }))
  }
  const debouncedHandleSearch = debounce(handleSearch, 400)

  // hooks
  useEffect(() => {
    async function fetchUser() {
      const params = { ...queryCondition.global }
      const res = await axios.get<undefined, AxiosResponse<FetchUserListRes>>(
        'https://randomuser.me/api/',
        { params }
      )
      setUserList(res.data.results)
    }
    fetchUser()
  }, [queryCondition.global])

  return (
    <Box className="App" sx={{ p: 3 }}>
      <InputDemo
        handleUserInput={handleUserInput}
        handleSearch={debouncedHandleSearch}
        handleKeyDownEnter={handleKeyDownEnter}
      />
      <Stack sx={{ margin: '1rem auto' }}>
        <RadioBtnDemo
          dataPerPage={queryCondition.global.results}
          dataPerPageArr={DATA_PER_PAGE}
          handleDataPerPageChange={handleDataPerPageChange}
        />
      </Stack>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <TableTabsDemo
          tabContent={TABS}
          currentTab={queryCondition.global.gender}
          handleTabChange={handleTabChange}
        />
      </Box>
      <TableDemo userList={userList} />
    </Box>
  )
}

export default App
