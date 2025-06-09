export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "VulnLabs",
  description: "",
  navItems: [
    { label: "主页", href: "/" },
    { label: "漏洞列表", href: "/vulns" },
    { label: "关于", href: "/about" },
  ],
  navMenuItems: [
    {
      label: "主页",
      href: "/",
    },
    {
      label: "漏洞列表",
      href: "/vulns",
    },
    {
      label: "关于",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/vulnlabs"
  },
};