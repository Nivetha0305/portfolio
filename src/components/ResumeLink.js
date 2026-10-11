import React from "react";
import { RESUME_FILENAME, RESUME_HREF } from "../data";

export default function ResumeLink({ className = "", children, ...props }) {
  return (
    <a
      href={RESUME_HREF}
      download={RESUME_FILENAME}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
