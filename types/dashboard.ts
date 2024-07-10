export type NavigationItem = {
  title: string;
  icon: any;
  link: string;
  children?: {
    title: string;
    value: string;
    link: string;
  }[];
};
