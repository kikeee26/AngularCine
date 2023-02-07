export interface actorDTO {
    nombre: string;
    fechaNacimient: Date;
    foto: string;
}

export interface actorCreacionDTO {
    nombre: string;
    fechaNacimient: Date;
    foto: File;
}