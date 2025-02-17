export interface TareaAlumnoGrupoMateria{
    id: number;
    tareaId: number;
    alumnoGrupoMateriaId: number;
    fechaEntrega: Date;
    calificacion?: number;
    observaciones?: string;
}
