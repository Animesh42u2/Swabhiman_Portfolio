"use client";
import { useState } from "react";
import Preloader from "@/components/Preloader";

export default function PreloaderWrapper() {
  const [done, setDone] = useState(false);
  if (done) return null;
  return <Preloader onComplete={() => setDone(true)} />;
}