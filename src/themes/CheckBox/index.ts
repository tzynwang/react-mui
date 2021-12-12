const CheckBoxTheme = {
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: '4px 0',
          paddingRight: '8px'
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: '0',
          marginRight: '32px'
        }
      }
    }
  }
}

export default CheckBoxTheme
