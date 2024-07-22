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



export type MenuItem = {
  color: string;
  text: string;
  icon: any; 
  action: () => void;
}
