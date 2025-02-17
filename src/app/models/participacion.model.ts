export interface Participacion{
    id: number;
    alumnoId: number;
    grupoMateriaId: number;
    fecha: Date;
    puntos: number;
    sobreParcial: boolean;
}