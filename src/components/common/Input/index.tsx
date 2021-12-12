import React from 'react'

import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'

import Button from '@mui/material/Button'

function Input() {
  return (
    <React.Fragment>
      <TextField
        id="outlined-basic"
        variant="outlined"
        label={false}
        placeholder="請輸入狐狸"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
        sx={{ marginRight: '8px' }}
      />
      <Button variant="contained" disableElevation>
        搜尋
      </Button>
    </React.Fragment>
  )
}

export default Input
