import { Cloud, Code2, ShieldCheck } from "lucide-react";
import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    icon: Cloud,
    title: "Serverless Backend",
    body: "Scalable microservices on Node.js, AWS Lambda, API Gateway and DynamoDB — less infrastructure to run, faster responses, and CI/CD pipelines through GitHub Actions.",
  },
  {
    icon: ShieldCheck,
    title: "Secure REST APIs",
    body: "JWT authentication, pagination, dynamic filtering and reusable middleware, documented with Swagger/OpenAPI and versioned under clear API governance.",
  },
  {
    icon: Code2,
    title: "Frontend Engineering",
    body: "Reusable, responsive React components with Redux, React Router and TypeScript, integrated cleanly with Node.js and Spring Boot services behind them.",
  },
];
