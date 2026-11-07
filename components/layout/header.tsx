import { ModeToggle } from "@/components/layout/mode-toggle";

export function Header() {
  return (
    <header className="flex justify-center items-center w-full px-4 py-6">
      <ModeToggle />
    </header>
  );
}
