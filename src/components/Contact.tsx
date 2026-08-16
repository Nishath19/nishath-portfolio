import { useState, type ChangeEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { ME } from "@/data/profile";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SocialLinks } from "@/components/common/SocialLinks";
import type { ContactForm } from "@/types";

const EMPTY: ContactForm = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<ContactForm>(EMPTY);
  const [sent, setSent] = useState(false);

  const update =
    (field: keyof ContactForm) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const send = (): void => {
    if (!form.name || !form.email || !form.message) return;
    const subject = encodeURIComponent(form.subject || `Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${ME.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section id="contact">
      <SectionHeading title="Contact" highlight="me" lede="Open to Java and full stack roles — Hyderabad or remote." />

      <div className="contact">
        <div className="c-info" data-rv>
          <h3>Get in touch</h3>
          <p>Send a note about the role and I'll reply the same day.</p>

          <ul>
            <li>
              <span className="ci">
                <Mail size={16} />
              </span>
              <div>
                <em>Email</em>
                <a href={`mailto:${ME.email}`}>{ME.email}</a>
              </div>
            </li>
            <li>
              <span className="ci">
                <Phone size={16} />
              </span>
              <div>
                <em>Phone</em>
                <a href={`tel:${ME.phone.replace(/\s/g, "")}`}>{ME.phone}</a>
              </div>
            </li>
            <li>
              <span className="ci">
                <MapPin size={16} />
              </span>
              <div>
                <em>Location</em>
                <span>{ME.location}</span>
              </div>
            </li>
          </ul>

          <div className="c-socials">
            <SocialLinks size={17} />
          </div>
        </div>

        <div className="c-form" data-rv>
          <div className="f2">
            <input placeholder="Your name" value={form.name} onChange={update("name")} />
            <input placeholder="Email address" type="email" value={form.email} onChange={update("email")} />
          </div>
          <input placeholder="Subject" value={form.subject} onChange={update("subject")} />
          <textarea placeholder="Your message" rows={5} value={form.message} onChange={update("message")} />
          <button className="btn full" onClick={send}>
            <Send size={16} /> {sent ? "Opening your mail app…" : "Send message"}
          </button>
          <p className="f-note">Opens your email client. Swap in a Spring Boot endpoint to send server-side.</p>
        </div>
      </div>
    </Section>
  );
}
