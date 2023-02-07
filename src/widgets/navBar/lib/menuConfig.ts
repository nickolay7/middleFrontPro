export enum LinkTHeme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
interface MenuItem {
  to: string;
  title: string;
  theme?: LinkTHeme;
}

export const menuConfig: MenuItem[] = [
  { to: "/", title: "Home", theme: LinkTHeme.PRIMARY },
  { to: "/about", title: "About", theme: LinkTHeme.SECONDARY },
];
