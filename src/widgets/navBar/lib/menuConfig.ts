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
  { to: "/", title: "Домой", theme: LinkTHeme.PRIMARY },
  { to: "/about", title: "О нас", theme: LinkTHeme.SECONDARY },
];
