import React from 'react'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { TabPanelProps } from './types'

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function TabsGroup() {
  const [value, setValue] = React.useState(0)

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="一隻狐" {...a11yProps(0)} />
          <Tab label="兩隻狐" {...a11yProps(1)} />
          <Tab label="三隻狐" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Fox One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Fox Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Fox Three
      </TabPanel>
    </Box>
  )
}
