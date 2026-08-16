import type { NavItem, Profile, Stat } from "@/types";

export const ME: Profile = {
  name: "Nishath Tarannum",
  first: "Nishath",
  last: "Tarannum",
  email: "nishatarannum14@gmail.com",
  phone: "+91 83094 33790",
  location: "Hyderabad, Telangana, India",
  linkedin: "https://www.linkedin.com/in/nishath-tarannum-49b184259",
  github: "https://github.com/your-handle", // TODO: paste your GitHub URL
  resume: "/Nishath_Tarannum_Resume.pdf", // TODO: drop the PDF into public/
  photo: "", // TODO: add "/profile.jpg" to public/ — falls back to initials
};

export const ROLES: string[] = [
  "Software Developer",
  "Node.js & Serverless Engineer",
  "React.js Developer",
  "Full Stack Engineer",
];

export const STATS: Stat[] = [
  { n: "5+", l: "Years experience" },
  { n: "4", l: "Products delivered" },
  { n: "8+", l: "AWS services in production" },
  { n: "2", l: "Backend stacks" },
];

export const NAV: NavItem[] = [
  ["home", "Home"],
  ["about", "About"],
  ["services", "What I do"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["contact", "Contact"],
];
