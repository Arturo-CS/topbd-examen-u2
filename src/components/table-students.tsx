"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { ButtonDelete } from "./button-delete";
import { removeAlumno } from "@/actions/register.actions";
import { useRouter } from "next/navigation";

interface Alumno {
  id: number;
  nombre: string;
  curso: string;
  nota1: number;
  nota2: number;
}

interface AlumnoTableProps {
  alumnos: Alumno[];
}

export default function AlumnoTable({ alumnos }: AlumnoTableProps) {
  const router = useRouter();

  const handleRowClick = (id: number) => {
    router.push(`/alumnos/editar/${id}`);
  };

  return (
    <Table>
      <TableCaption>Notas de los alumnos</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">ID</TableHead>
          <TableHead className="text-center">Nombre del Alumno</TableHead>
          <TableHead className="text-center">Curso</TableHead>
          <TableHead className="text-center">Nota 1</TableHead>
          <TableHead className="text-center">Nota 2</TableHead>
          <TableHead className="text-center">Promedio</TableHead>
          <TableHead className="text-center">Operaciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {alumnos.map((alumno) => {
          const promedio = (alumno.nota1 + alumno.nota2) / 2;
          return (
            <TableRow 
              key={alumno.id} 
              onClick={() => handleRowClick(alumno.id)}
              className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <TableCell className="font-medium text-center">{alumno.id}</TableCell>
              <TableCell className="pl-5">{alumno.nombre}</TableCell>
              <TableCell className="text-center">{alumno.curso}</TableCell>
              <TableCell className="text-center">{alumno.nota1.toFixed(2)}</TableCell>
              <TableCell className="text-center">{alumno.nota2.toFixed(2)}</TableCell>
              <TableCell className="text-center">{promedio.toFixed(2)}</TableCell>
              <TableCell className="flex justify-center">
                <div className="flex space-x-2" onClick={(e) => e.stopPropagation()}>
                  <Link href={`/alumnos/editar/${alumno.id}`}>
                    <Button variant="outline">
                      <FaEdit className="h-4 w-4" />
                    </Button>
                  </Link>
                  <ButtonDelete nPerCode={alumno.id} functionRemove={removeAlumno} label="id" />
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}