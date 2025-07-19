import { Globe } from "lucide-react";

export interface navigationItemsProp {
  title: React.ReactNode;
  hasDropdown: boolean;
}

export const navigationItems: navigationItemsProp[] = [
  {
    title: "Products",
    hasDropdown: true,
  },
  {
    title: "Plans",
    hasDropdown: false,
  },
  {
    title: "Resources",
    hasDropdown: true,
  },
  {
    title: "Become a freelancer",
    hasDropdown: false,
  },
  {
    title: <Globe />,
    hasDropdown: false,
  },
  {
    title: "Sign in",
    hasDropdown: false,
  },
];

export const categoryItems: string[] = [
  "Graphics & Design",
  "Writing & Translation",
  "Programming & Tech",
  "Digital Marketing",
  "Video & Animation",
  "Voice & Audio",
  "Business",
  "Finance",
  "Data",
  "AI Services",
];
