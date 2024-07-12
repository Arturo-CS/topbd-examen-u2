"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./theme-toggle-button";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <nav className="flex justify-between py-5">
      <Link href="/">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Examen Unidad 2 - Tópicos Base de Datos
        </h1>
      </Link>

      <div className="flex gap-x-2 items-center">
        <Link 
          href="/" 
          className={cn(
            buttonVariants({ variant: "secondary" }),
            isActive('/') ? "bg-cyan-500 text-white" : "hover:text-cyan-500"
          )}
        >
          Inicio
        </Link>
        <Link 
          href="/registrar-notas" 
          className={cn(
            buttonVariants({ variant: "secondary" }),
            isActive('/registrar-notas') ? "bg-cyan-500 text-white" : "hover:text-cyan-500"
          )}
        >
          Registrar
        </Link>
        <Link 
          href="/alumnos" 
          className={cn(
            buttonVariants({ variant: "secondary" }),
            isActive('/alumnos') ? "bg-cyan-500 text-white" : "hover:text-cyan-500"
          )}
        >
          Listado
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;