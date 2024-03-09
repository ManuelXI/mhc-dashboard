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