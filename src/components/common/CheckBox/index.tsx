import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

function CheckBoxGroup() {
  return (
    <FormGroup row>
      <FormControlLabel control={<Checkbox defaultChecked />} label="北狐" />
      <FormControlLabel control={<Checkbox />} label="藏狐" />
      <FormControlLabel control={<Checkbox />} label="銀狐" />
    </FormGroup>
  )
}

export default CheckBoxGroup
