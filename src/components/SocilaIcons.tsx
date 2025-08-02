
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
interface SocialLinksProps{
  tittle: string;
  href: string;
  icon: React.ReactElement;
  color: string;
}

export function SocialIconsLucidReact() {
  const socialLinks: SocialLinksProps[] = [
    {
      tittle: "Facebook",
      href: "#",
      icon: <Facebook />,
      color: "bg-orange-300 hover:bg-orange-700",
    },
    {
      tittle: "Twitter",
      href: "#",
      icon: <Twitter />,
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      tittle: "Instagram",
      href: "#",
      icon: <Instagram />,
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      tittle: "Youtube",
      href: "#",
      icon: <Youtube />,
      color: "bg-red-600 hover:bg-red-700",
    },
  ];
return (
  <>
    {socialLinks.map((sl) => (
      <a
        key={sl.tittle}
        href={sl.href}
        className={`w-12 h-12 ${sl.color} rounded-full flex items-center justify-center`}
      >
        {sl.icon}
      </a>
    ))}
  </>
);
}