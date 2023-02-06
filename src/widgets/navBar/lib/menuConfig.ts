interface MenuItem {
  to: string;
  title: string;
}

export const menuConfig: MenuItem[] = [
  { to: "/", title: "Home" },
  { to: "/about", title: "About" },
];
