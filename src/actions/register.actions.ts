"use server";
import prisma from "@/lib/prisma";
import { alumnoSchema } from "@/validations/registerSchema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function createAlumno(data: z.infer<typeof alumnoSchema>) {
    const validatedData = alumnoSchema.parse(data);
    const { nombre, curso, nota1, nota2 } = validatedData;

    await prisma.alumno.create({
        data: {
            nombre,
            curso,
            nota1,
            nota2,
        },
    });
    revalidatePath("/alumnos");
    redirect("/alumnos");
}

export async function updateAlumno(id: number, data: z.infer<typeof alumnoSchema>) {
    const validatedData = alumnoSchema.parse(data);
    const { nombre, curso, nota1, nota2 } = validatedData;

    await prisma.alumno.update({
        where: {
            id: id
        },
        data: {
            nombre,
            curso,
            nota1,
            nota2,
        },
    });
    revalidatePath("/alumnos");
    redirect("/alumnos");
}

export async function removeAlumno(formData: FormData) {
    const id = formData.get("id")?.toString();

    if (!id) {
        return;
    }

    await prisma.alumno.delete({
        where: {
            id: parseInt(id),
        },
    });

    revalidatePath("/alumnos");
}