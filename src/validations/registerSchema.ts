import { z } from "zod";

export const alumnoSchema = z.object({
  nombre: z
    .string({
      required_error: "El nombre es obligatorio.",
    })
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(50, { message: "El nombre debe tener menos de 50 caracteres" }),

  curso: z
    .string({
      required_error: "El curso es obligatorio.",
    })
    .min(2, { message: "El nombre del curso debe tener al menos 2 caracteres" })
    .max(50, {
      message: "El nombre del curso debe tener menos de 50 caracteres",
    }),

  nota1: z
    .number({
      required_error: "La nota 1 es obligatoria.",
      invalid_type_error: "La nota 1 debe ser un número.",
    })
    .min(0, { message: "La nota 1 no puede ser menor que 0" })
    .max(20, { message: "La nota 1 no puede ser mayor que 20" }),

  nota2: z
    .number({
      required_error: "La nota 2 es obligatoria.",
      invalid_type_error: "La nota 2 debe ser un número.",
    })
    .min(0, { message: "La nota 2 no puede ser menor que 0" })
    .max(20, { message: "La nota 2 no puede ser mayor que 20" }),
});

// Si necesitas incluir el id y updatedAt en algún momento (por ejemplo, para actualizar),
// puedes crear un esquema extendido:

export const alumnoSchemaConId = alumnoSchema.extend({
  id: z.number().positive().int(),
  updatedAt: z.date().optional(),
});
