import prisma from "@/lib/prisma";
import AlumnoTable from "@/components/table-students";

export default async function Alumnos() {
  const alumnos = await prisma.alumno.findMany();
  return (
    <div className="flex justify-center py-10 min-h-screen px-10">
      <div className="w-full px-5 shadow-md rounded-lg overflow-hidden">
        <h1 className="text-3xl text-center font-bold my-10">Alumnos</h1>
        <AlumnoTable alumnos={alumnos} />
      </div>
    </div>
  );
}