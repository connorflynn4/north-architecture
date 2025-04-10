"use client";

import { type ReactNode, useEffect } from "react";

interface ClientBodyProps {
  children: ReactNode;
}

export default function ClientBody({ children }: ClientBodyProps) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return <>{children}</>;
}
