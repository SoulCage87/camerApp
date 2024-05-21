export interface Event {
    id: string;
    nombre: string;
    descripcion: string;
  }


export const events: Event[] = [
    {id: '1', nombre: 'Google I/O', descripcion: 'Disfruta que Google tiene preparado para ti acerca del mundo web'},
    {id: '2', nombre: 'Nintendo Direct', descripcion: 'Conoce los nuevos lanzamientos que nintendo tiene preparado para ti'},
    {id: '3', nombre: 'Sonic Central', descripcion: 'Conoce los lanzamientos del erizo azul dados por el mismisimo Takashi Izuka'},
    {id: '4', nombre: 'E3', descripcion: 'Evento donde se daran a conocer los ultimos lanzamientos para el proximo año'}
]