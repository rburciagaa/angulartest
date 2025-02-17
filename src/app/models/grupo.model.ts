import { GrupoMateria } from "./grupo_materia.model";

export interface Grupo{
    id: number;
    nombre: string; //Ejemplo: "6V ISC 2501"
    descripcion?: string;
    año: number; //Ejemplo: 2021
    periodo: number; //Ejemplo: 1
    semestre: number; //Ejemplo: 6
    carrera: string; //Ejemplo: "ISC"
    grupoMaterias?: GrupoMateria[];
}