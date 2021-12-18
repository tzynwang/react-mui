import { Gender } from "./../../../../models/GeneralTypes";

export interface TableTabsProps {
  tabContent: Gender[];
  currentTab: Gender;
  handleTabChange: (e: React.SyntheticEvent, newValue: Gender) => void;
}
