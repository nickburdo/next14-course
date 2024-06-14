import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AboutLayout({ children }: Props) {
  return (
    <div>
      <nav className="flex gap-2 border-b border-b-slate-400 p-2 mb-4">
        <Link href="/about/contacts">Contacts</Link>
        <Link href="/about/team">Team</Link>
      </nav>

      {children}
    </div>
  );
}
