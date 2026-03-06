// src/app/page.tsx

"use client";

import { LoginButton } from "@/src/components/LoginButton";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <LoginButton />
    </div>
  );
}
