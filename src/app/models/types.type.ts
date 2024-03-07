export interface MenuItem {
  type: 'page' | 'group' | 'collapsible';
  title: string;
  route?: string;
  collapsed?: boolean;
  children?: MenuItem[];
  iconLink?: string;
}
