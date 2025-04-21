import { useRouter } from "next/router";
import { Navbar as HeroUINavbar } from "@heroui/navbar";
import Link from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <ThemeSwitch />
      <div className="flex gap-5">
        <Link
          href="/table"
          className={`px-4 py-2 rounded ${
            currentPath === "/table"
              ? "border-2 border-transparent border-b-orange-500"
              : "text-gray-600"
          }`}
        >
          Table View
        </Link>
        <Link
          href="/cards"
          className={`px-4 py-2 rounded ${
            currentPath === "/cards"
              ? "border-2 border-transparent border-b-orange-500"
              : "  text-gray-600"
          }`}
        >
          Card View
        </Link>
      </div>
    </HeroUINavbar>
  );
};
