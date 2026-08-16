import { Download } from "lucide-react";
import { ME } from "@/data/profile";

interface DownloadCvButtonProps {
  className?: string;
}

/** The "Download CV" link, pointed at the resume file in profile data. */
export function DownloadCvButton({ className = "btn" }: DownloadCvButtonProps) {
  return (
    <a className={className} href={ME.resume} download>
      <Download size={16} /> Download CV
    </a>
  );
}
