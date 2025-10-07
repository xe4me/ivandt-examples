"use client";
import { useEffect, useState } from "react";

interface SessionResponse {
  sessionToken: string;
  expiresAt: string;
}

export function useIvandtSession() {
  const [session, setSession] = useState<SessionResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      const res = await fetch("/api/sessions", { method: "GET" });
      if (!res.ok) throw new Error("Failed to create session");
      const data: SessionResponse = await res.json();
      setSession(data);
      setIsLoading(false)
    })();
  }, []);

  return {session, isLoading};
}
