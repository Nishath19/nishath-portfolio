import { useState, type ChangeEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { ME } from "@/data/profile";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SocialLinks } from "@/components/common/SocialLinks";
import type { ContactForm } from "@/types";

const EMPTY: ContactForm = { name: "", email: "", subject: "", message: "" };

type SendStatus = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [form, setForm] = useState<ContactForm>(EMPTY);
  const [status, setStatus] = useState<SendStatus>("idle");

  const update =
    (field: keyof ContactForm) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const send = async (): Promise<void> => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "contact", ...form }).toString(),
      });
      setStatus("sent");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
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
          <button className="btn full" onClick={send} disabled={status === "sending"}>
            <Send size={16} />
            {status === "sent" ? "Message sent" : status === "sending" ? "Sending…" : "Send message"}
          </button>
          {status === "error" && (
            <p className="f-note">Something went wrong — email me directly at {ME.email}.</p>
          )}
        </div>
      </div>
    </Section>
  );
}
