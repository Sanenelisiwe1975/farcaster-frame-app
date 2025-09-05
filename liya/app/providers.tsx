"use client";

import type { ReactNode } from "react";
import { base } from "wagmi/chains";
import { MiniKitProvider } from "@coinbase/onchainkit/minikit";

type ProvidersProps = {
  children?: ReactNode; // ✅ Accept undefined just in case
};

export function Providers({ children }: ProvidersProps) {
  if (!children) return null; // ✅ Guard against undefined
  return (
    <MiniKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
      chain={base}
      config={{
        appearance: {
          mode: "auto",
          theme: "mini-app-theme",
          name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
          logo: process.env.NEXT_PUBLIC_ICON_URL,
        },
      }}
    >
       {/* 👇 Typecast children to `any` to bypass broken type defs */}
      {children as any}
    </MiniKitProvider>
  );
}
