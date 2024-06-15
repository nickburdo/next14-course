import MainMenu from "@/components/MainMenu";

export interface MenuItem {
  id: number;
  name: string;
  path: string;
}

export default function Header() {
  const mainMenu: MenuItem[] = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Blog", path: "/blog" },
    { id: 3, name: "About", path: "/about" },
  ];

  return (
    <header className="bg-blue-900 text-white">
      <div className="container my-auto p-8">
        <MainMenu mainMenu={mainMenu} />
      </div>
    </header>
  );
}
