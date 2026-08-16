import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { ME } from "@/data/profile";
import { DownloadCvButton } from "@/components/common/DownloadCvButton";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";

export function About() {
  return (
    <Section id="about">
      <SectionHeading title="About" highlight="me" />

      <div className="about">
        <div className="about-copy" data-rv>
          <h3>Software Developer</h3>
          <p>
            I'm a software developer with 5+ years across backend services and frontend applications. Most of my work
            is serverless: Node.js and Express on AWS Lambda, fronted by API Gateway, with DynamoDB, RDS and MongoDB
            underneath. Before that I spent three years building React interfaces and Spring Boot services, which is
            why I'm comfortable on either side of the API contract.
          </p>
          <p>
            The parts I enjoy most are the unglamorous ones — a query that drops from seconds to milliseconds, a
            middleware layer that stops five endpoints repeating themselves, a deployment pipeline that removes a
            manual step nobody wanted to own.
          </p>

          <ul className="facts">
            <li>
              <MapPin size={15} /> {ME.location}
            </li>
            <li>
              <GraduationCap size={15} /> B.E., Osmania University
            </li>
            <li>
              <Sparkles size={15} /> Open to new roles
            </li>
          </ul>

          <DownloadCvButton />
        </div>
      </div>
    </Section>
  );
}
