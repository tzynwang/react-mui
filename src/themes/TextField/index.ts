const TextFieldTheme = {
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '300px'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#e5e5e5',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent'
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#747474'
          }
        },
        input: {
          height: '40px',
          padding: '0',
          paddingLeft: '0',
          '&::placeholder': {
            fontSize: '16px',
            lineHeight: '24px',
            color: '#747474',
            opacity: '1'
          }
        },
        notchedOutline: {
          borderColor: 'transparent'
        }
      }
    }
  }
}

export default TextFieldTheme
