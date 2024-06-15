import MainMenu from "@/components/MainMenu";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white">
      <div className="container my-auto p-8">
        <MainMenu />
      </div>
    </header>
  );
}
