import { routes } from "@/constants/routes";

interface IHeaderTab {
  href: string;
  title: string;
}

export const headerTabsConfig: IHeaderTab[] = [
  {
    href: routes.home,
    title: "Home",
  },
  {
    href: routes.balance,
    title: "Balance",
  },
];
