import { GrupoMateria } from "./grupo_materia.model";

export interface Materia{
    id: number;
    nombre: string; //Ejemplo: "Fundamentos de Programación 2408"
    descripcion?: string;
    parcial1_Inicio?: Date;
    parcial1_Fin?: Date;
    parcial2_Inicio?: Date;
    parcial2_Fin?: Date;
    parcial3_Inicio?: Date;
    parcial3_Fin?: Date;
    ordinario_Fecha?: Date;
    extraordinario_Fecha?: Date;
    grupoMaterias?: GrupoMateria[];
} 