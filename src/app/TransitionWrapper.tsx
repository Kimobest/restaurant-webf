"use client";
import { useEffect, useState } from "react";

export default function TransitionWrapper({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    return () => setVisible(false);
  }, []);

  return (
    <div className={`fade-page${visible ? " fade-in" : ""}`}>{children}</div>
  );
}
