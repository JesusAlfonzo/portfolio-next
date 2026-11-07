import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  highlight: string;
  as?: "h1" | "h2";
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  title,
  highlight,
  as: Component = "h2",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <header className={cn("flex flex-col gap-4 mb-8", className)}>
      <Component
        className={cn(
          "text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight",
          titleClassName
        )}
      >
        {title},{" "}
        <br className="hidden sm:block" />
        <span className="text-blue-600 dark:text-indigo-400">{highlight}</span>
      </Component>
    </header>
  );
}
