const DrawerTheme = {
  components: {
    MuiDrawer: {
      styleOverrides: {
        modal: {
          '& .MuiPaper-root': {
            padding: '24px 30px',
            color: '#fff',
            wordBreak: 'break-all'
          },
          '&.drawer-small .MuiPaper-root': {
            maxWidth: 'clamp(200px, 40vw, 300px)',
            backgroundColor: '#BF6766'
          },
          '&.drawer-big .MuiPaper-root': {
            maxWidth: 'clamp(300px, 50vw, 500px)',
            backgroundColor: '#91B493'
          }
        }
      }
    }
  }
}

export default DrawerTheme
