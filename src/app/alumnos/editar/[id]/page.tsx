import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import FormUpdateAlumno from "@/components/form-update-student";

export default async function AlumnoUpdate({params}: {
  params: {
    id: string
  }
}) {
  const id = parseInt(params.id);
  const alumno = await prisma.alumno.findUnique({
    where: {
      id: id
    }
  });

  if (!alumno) {
    redirect("/alumnos");
  }

  return (
    <div>
      <FormUpdateAlumno alumno={alumno} id={id} />
    </div>
  );
}