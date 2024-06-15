"use client";
import { MenuItem } from "@/components/main-layout/Header";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  mainMenu: MenuItem[];
}

export default function MainMenu({ mainMenu }: Props) {
  const pathname = usePathname();
  const isActive = (path: string) =>
    path === "/" ? path === pathname : pathname.startsWith(path);

  return (
    <nav>
      <ul className="flex gap-4">
        {mainMenu.map(({ id, name, path }) => (
          <li key={id}>
            <Link
              href={path}
              className={isActive(path) ? "font-bold underline" : ""}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
