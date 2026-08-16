import { Bus, CreditCard, Luggage, Stethoscope } from "lucide-react";
import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    icon: Bus,
    title: "Bus Booking System",
    kind: "Full stack",
    body: "Intercity ticket search, booking and management, with admin modules for seat allocation, operator details and real-time booking updates. Built the UI screens, booking logic and API integration, and tuned the MySQL queries behind it.",
    stack: ["React.js", "Redux", "Node.js", "MySQL"],
    hue: "a",
  },
  {
    icon: CreditCard,
    title: "Subscription Management Platform",
    kind: "Backend",
    body: "Subscriptions, billing cycles, renewals and plan upgrades for SaaS products. Implemented the subscription APIs and role-based flows, documented them with Swagger/OpenAPI, and optimised the MongoDB queries.",
    stack: ["MERN", "JWT", "Swagger / OpenAPI"],
    hue: "b",
  },
  {
    icon: Luggage,
    title: "Airport Baggage Tracking",
    kind: "Serverless / IoT",
    body: "An IoT-enabled system letting passengers and airport staff track baggage in real time to cut lost-luggage incidents. Built the backend services, DynamoDB integration and status-update flows.",
    stack: ["Node.js", "API Gateway", "DynamoDB"],
    hue: "c",
  },
  {
    icon: Stethoscope,
    title: "Dental Appointment App",
    kind: "Full stack",
    body: "Appointment booking, doctor assignment and admin–patient messaging. Built the appointment and admin screens in React and wired them to Java Spring Boot REST APIs with JWT auth over MongoDB.",
    stack: ["React.js", "Spring Boot", "MongoDB", "JWT"],
    hue: "d",
  },
];
