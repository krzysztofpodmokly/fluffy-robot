'use client';

import { SessionProvider } from "next-auth/react";

// AuthProvider uses client-side features and it would throw an error if <html /> would be wrapped straight with <SessionProvider />
export default function AuthProvider({ children }: BaseProps) {
  return <SessionProvider>{children}</SessionProvider>
}