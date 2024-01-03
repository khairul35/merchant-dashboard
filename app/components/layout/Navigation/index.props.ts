export interface Menu {
  id: number;
  title: string;
  path: string;
  icon: () => JSX.Element;
}

export interface NavigationProps {
    menus: Menu[],
}
