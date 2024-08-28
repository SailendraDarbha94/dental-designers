export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Fun Stats",
  description: "Analyse your sports performance statistics the fun way",
  navItems: [
    {
      label: "Home",
      href: "/home",
    },
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/home",
    },
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    signUp: "/auth/sign-up",
    signIn: "/auth/sign-in",
    portfolio: "https://www.sailendradarbha.fyi/",
    github: "https://github.com/SailendraDarbha94",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
