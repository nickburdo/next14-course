"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainMenu = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Blog", path: "/blog" },
  { id: 3, name: "About", path: "/about" },
];

export default function MainMenu() {
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
