const TabsTheme = {
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: '32px'
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: '32px',
          padding: '6px 8px',
          fontSize: '14px',
          fontWeight: 'bold',
          '&.Mui-selected': {
            color: '#000'
          },
          '&:not(.Mui-selected)': {
            color: '#747474'
          },
          '&:not(:first-child)': {
            marginLeft: '16px'
          }
        }
      }
    }
  }
}

export default TabsTheme
