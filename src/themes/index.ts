import { createTheme } from '@mui/material/styles'

import ButtonTheme from './Button'
import CheckBoxTheme from './CheckBox'
import CustomizedPalette from './Palette'
import TextFieldTheme from './TextField'

const customizedTheme = createTheme(
  ButtonTheme,
  CheckBoxTheme,
  CustomizedPalette,
  TextFieldTheme
)

export default customizedTheme
