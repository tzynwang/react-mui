import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { TableTabsProps } from "./types";

function TableTabs(props: TableTabsProps) {
  const { tabContent, currentTab, handleTabChange } = props;
  return (
    <Tabs
      value={currentTab}
      onChange={handleTabChange}
      aria-label="gender tabs"
    >
      {tabContent.map((t) => (
        <Tab key={t} label={t} value={t} />
      ))}
    </Tabs>
  );
}

export default TableTabs;
