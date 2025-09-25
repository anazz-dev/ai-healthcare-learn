// components/AuthorBox.tsx
import React from "react";

export default function AuthorBox() {
  return (
    <div className="max-w-xl mx-auto my-8 p-4 border border-gray-200 rounded-lg bg-gray-50 text-gray-700 text-sm leading-relaxed">
      <p className="mb-2">
        <strong>Author:</strong>{" "}
        <a
          href="https://www.linkedin.com/in/drahmadnazzal/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Ahmad Nazzal
        </a>
      </p>
      <p className="m-0">
        Medical doctor with a PhD in neuroscience, focusing on AI in healthcare
        as a researcher and writer.
      </p>
    </div>
  );
}
