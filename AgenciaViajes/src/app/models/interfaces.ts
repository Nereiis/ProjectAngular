export interface ItinerarioI{
    Dia1: string; 
    Dia2: string;
}

export interface ActividadesI{
    Itinerario: ItinerarioI;
}

export interface ViajesI{
    _id: string;
    Nombre: string;
    Ubicacion: number;
    Precio: number;
    Descripcion: string;
    Caratula: string;
    Imagen: string;
    Actividades: ActividadesI;
}

