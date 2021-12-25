import React from 'react'

import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'

import { InputProps } from './types'

function Input(props: InputProps) {
  const { handleUserInput, handleSearch, handleKeyDownEnter } = props
  return (
    <React.Fragment>
      <TextField
        id="outlined-basic"
        variant="outlined"
        label={false}
        placeholder="Enter nationalities"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
        sx={{ marginRight: '8px' }}
        onChange={handleUserInput}
        onKeyDown={handleKeyDownEnter}
      />
      <Button variant="contained" onClick={handleSearch} disableElevation>
        search
      </Button>
    </React.Fragment>
  )
}

export default Input
