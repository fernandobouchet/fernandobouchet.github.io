"use client";

import Link from "next/link";
import { LanguageContext } from "@/context/language-context";
import { useContext } from "react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const { texts } = useContext(LanguageContext);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center gap-4">
      <h1 className="text-lg font-semibold">{texts.notFound.title}</h1>
      <p>{texts.notFound.p1}</p>
      <Button>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
