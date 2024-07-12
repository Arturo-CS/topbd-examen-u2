"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { alumnoSchema } from "@/validations/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createAlumno } from "@/actions/register.actions";

function FormAlumno() {
  const form = useForm<z.infer<typeof alumnoSchema>>({
    resolver: zodResolver(alumnoSchema),
  });

  const onSubmit = async (data: z.infer<typeof alumnoSchema>) => {
    console.log(data);
    try {
      await createAlumno(data);
      console.log("Alumno registrado correctamente.");
      form.reset();
    } catch (error: any) {
      console.error("Error al registrar el alumno: %s", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Registrar Alumno</CardTitle>
              <CardDescription className="text-center">
                Ingresa los datos del alumno y sus notas.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Nombre del alumno" {...field} className="w-full" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="curso"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Curso</FormLabel>
                    <FormControl>
                      <Input placeholder="Nombre del curso" {...field} className="w-full" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="nota1"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nota 1</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="0-20" {...field} onChange={e => field.onChange(parseFloat(e.target.value))} className="w-full" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="nota2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nota 2</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="0-20" {...field} onChange={e => field.onChange(parseFloat(e.target.value))} className="w-full" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">Registrar Alumno</Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}

export default FormAlumno;