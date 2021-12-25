import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'

import { RadioGroupDemoProps } from './types'

function RadioGroupDemo(props: RadioGroupDemoProps) {
  const { dataPerPage, dataPerPageArr, handleDataPerPageChange } = props

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Data per page</FormLabel>
      <RadioGroup
        row
        value={dataPerPage}
        aria-label="data per page"
        name="data-per-page-radio"
        onChange={handleDataPerPageChange}
      >
        {dataPerPageArr.map((p) => (
          <FormControlLabel key={p} value={p} control={<Radio />} label={p} />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

export default RadioGroupDemo
