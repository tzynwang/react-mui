const ButtonTheme = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: '40px',
          fontWeight: 'bold',
          fontSize: '16px',
          lineHeight: '24px',
          '&.Mui-disabled': {
            backgroundColor: '#bdbdbd',
            color: '#fff'
          }
        },
        containedSecondary: {
          color: '#000'
        },
        textPrimary: {
          color: '#000'
        }
      }
    }
  }
}

export default ButtonTheme
