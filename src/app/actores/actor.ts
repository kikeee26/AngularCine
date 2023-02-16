export interface actorDTO {
    id: number;
    nombre: string;
    fechaNacimient: Date;
    foto: string;
    biografia: string;
}

export interface actorCreacionDTO {
    nombre: string;
    fechaNacimient: Date;
    foto: File;
    biografia: string;
}