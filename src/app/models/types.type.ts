export interface MenuItem {
  type: 'page' | 'group' | 'collapsible';
  title: string;
  route?: string;
  collapsed?: boolean;
  children?: MenuItem[];
  iconLink?: string;
}

export interface UserMetric {
  title: string;
  amount: string;
  improvement: string;
  timePeriod: string;
  iconLink: string;
}

export interface UserData {
  status: string;
  amount: number;
}
export interface Data {
  name: string;
  amount: number;
  color: string;
}
export interface TableData {
  name: string;
  amount: number;
  imageUrl?: string;
}