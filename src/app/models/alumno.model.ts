// Objetivo: Definir el modelo de datos de un alumno
export interface Alumno{
    id: number;
    matricula: string;
    nombre: string;
    apellidos: string;
    email: string;
    telefono: string;
    activo: boolean;
}