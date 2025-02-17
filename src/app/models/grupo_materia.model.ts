import { Grupo } from "./grupo.model";
import { Materia } from "./materia.model";

export interface GrupoMateria{
    id: number;
    grupo: Grupo;
    materia: Materia;
    nombre: string; //Ejemplo: "6V ISC 2501 - Fundamentos de Programación 2408"
}