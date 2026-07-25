import React, { ReactNode } from "react";

// Nested layout wrapper that applies root-level styling to all child pages
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    // Main semantic element containing page-specific content
    <main>{children}</main>
  );
};

export default RootLayout;
