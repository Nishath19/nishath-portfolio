import type { LucideIcon } from "lucide-react";

export interface Profile {
  name: string;
  first: string;
  last: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  resume: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  body: string;
}

export interface Skill {
  name: string;
  pct: number;
}

export interface Stat {
  n: string;
  l: string;
}

export interface TimelineEntry {
  when: string;
  what: string;
  where: string;
  points: string[];
}

export type ProjectHue = "a" | "b" | "c" | "d" | "e";

export interface Project {
  icon: LucideIcon;
  title: string;
  kind: string;
  body: string;
  stack: string[];
  hue: ProjectHue;
}

export type NavItem = readonly [id: string, label: string];

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
