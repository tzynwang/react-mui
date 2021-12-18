export interface FunctionalTableProps {
  tableHead: UserForTableHeader;
  tableContentList: UserForTable[];
}

export interface UserForTable {
  Id: string;
  Gender: string;
  Name: string;
  Email: string;
  Age: number;
  Country: string;
}

export type UserForTableHeader = (keyof UserForTable)[];
