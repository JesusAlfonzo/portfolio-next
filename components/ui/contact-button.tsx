import { ReactNode } from "react";

interface Props {
  href: string;
  target: string;
  rel: string;
  className?: string;
  children: ReactNode;
}

export function ContactButton(props: Props) {
  return (
    <a
      // Combinamos las clases base con las que envíes por props
      className={`group relative inline-block focus:ring-3 focus:outline-hidden ${props.className || ""}`}
      href={props.href}
      target={props.target}
      rel={props.rel}
    >
      <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-indigo-400 dark:bg-blue-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

      <span className="relative inline-flex items-center gap-2 border-2 border-current px-8 py-3 text-sm font-bold tracking-widest dark:text-white uppercase">
        {props.children}
      </span>
    </a>
  );
}
