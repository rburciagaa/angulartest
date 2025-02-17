export interface AlumnoGrupoMateria{
    id: number;
    alumnoId: number;
    grupoMateriaId: number;
    status?: string;
    calificacionParcial1?: number;
    calificacionParcial2?: number;
    calificacionParcial3?: number;
    calificacionOrdinario?: number;
    calificacionExtraordinario?: number;
    calificacionFinal?: number;
}