import { ReactNode, AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ContactButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  className?: string;
}

export function ContactButton({
  href,
  target = "_blank",
  rel = "noopener noreferrer",
  className,
  children,
  ...props
}: ContactButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn("group relative inline-block focus:ring-3 focus:outline-hidden", className)}
      {...props}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-indigo-400 dark:bg-blue-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
      />
      <span className="relative inline-flex items-center gap-2 border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-gray-900 dark:text-white uppercase bg-white dark:bg-neutral-950">
        {children}
      </span>
    </a>
  );
}
