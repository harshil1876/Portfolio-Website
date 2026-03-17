"use client";

import { AnimatedSection } from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  const isLeft = align === "left";
  return (
    <AnimatedSection className={`mb-12 ${isLeft ? "text-left" : "text-center"}`}>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>
      )}
      <div className={`${isLeft ? "ml-0" : "mx-auto"} mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent`} />
    </AnimatedSection>
  );
}
