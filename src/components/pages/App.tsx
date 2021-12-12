import React from 'react'

import ButtonDemo from './../common/Button'
import InputDemo from './../common/Input'
import CheckBoxDemo from './../common/CheckBox'

import Stack from '@mui/material/Stack'

function App(): React.ReactElement {
  return (
    <div className="App">
      <Stack
        spacing={2}
        direction="row"
        sx={{ margin: '1rem 0' }}
      >
        <ButtonDemo />
      </Stack>
      <Stack direction="row" sx={{ margin: '1rem 0' }}>
        <InputDemo />
      </Stack>
      <Stack direction="row" sx={{ margin: '1rem 0' }}>
        <CheckBoxDemo />
      </Stack>
    </div>
  )
}

export default App
