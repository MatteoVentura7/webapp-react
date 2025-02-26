import Logo from "../components/ui/Logo";
export default function Header() {
  return (
    <header className="bg-emerald-700 p-4 m-10 rounded-2xl shadow-xl text-center sticky top-4">
      <Logo />
    </header>
  );
}
