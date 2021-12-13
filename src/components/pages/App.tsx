import React from 'react'

import ButtonDemo from './../common/Button'
import InputDemo from './../common/Input'
import CheckBoxDemo from './../common/CheckBox'
import TabsGroup from './../common/Tabs'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

function App(): React.ReactElement {
  return (
    <Box className="App" sx={{ p: 3 }}>
      <Stack spacing={2} direction="row" sx={{ margin: '1rem 0' }}>
        <ButtonDemo />
      </Stack>
      <Stack direction="row" sx={{ margin: '1rem 0' }}>
        <InputDemo />
      </Stack>
      <Stack direction="row" sx={{ margin: '1rem 0' }}>
        <CheckBoxDemo />
      </Stack>
      <TabsGroup />
    </Box>
  )
}

export default App
