import React, { useMemo } from "react";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

enum FOX {
  SAKHALIN = "Sakhalin",
  TIBETAN = "Tibetan",
  SILVER = "Silver",
}

export default function TabsGroup() {
  // states
  const [tabsValue, setTabsValue] = React.useState<string>(FOX.SAKHALIN);
  const tabsBody = useMemo(() => {
    switch (tabsValue) {
      case "Sakhalin":
        return "北狐";
      case "Tibetan":
        return "藏狐";
      case "Silver":
        return "銀狐";
      default:
        return "🦊";
    }
  }, [tabsValue]);

  // functions
  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setTabsValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabsValue}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label={FOX.SAKHALIN} value={FOX.SAKHALIN} />
          <Tab label={FOX.TIBETAN} value={FOX.TIBETAN} />
          <Tab label={FOX.SILVER} value={FOX.SILVER} />
        </Tabs>
      </Box>
      <Typography variant="h3" component="div" sx={{ padding: "1rem" }}>
        {tabsBody}
      </Typography>
    </Box>
  );
}
