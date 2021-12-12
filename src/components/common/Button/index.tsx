import React from 'react'

import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'

function Buttons() {
  return (
    <React.Fragment>
      <Button variant="contained" startIcon={<AddIcon />} disableElevation>
        新增狐狸
      </Button>
      <Button
        variant="contained"
        startIcon={<EditIcon />}
        disableElevation
        disabled
      >
        不能編輯狐狸
      </Button>
      <Button variant="contained" disableElevation>
        確定
      </Button>
      <Button variant="text" disableElevation>
        取消
      </Button>
      <Button variant="contained" color="secondary" disableElevation>
        上一狐
      </Button>
    </React.Fragment>
  )
}

export default Buttons
