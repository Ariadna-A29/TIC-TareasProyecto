
export const gruposDemo = [
  { id: 1, nombre: "Pixel Warriors" },
  { id: 2, nombre: "Game Masters" },
  { id: 3, nombre: "Codigo Gamer" },
  { id: 4, nombre: "Retro Players" }
];

export const estudiantesDemo = [
  { id: 1, nombre: "Martina", apellido: "Lopez", email: "martina@tic.com", grupoId: 1 },
  { id: 2, nombre: "Tomas", apellido: "Garcia", email: "tomas@tic.com", grupoId: 1 },
  { id: 3, nombre: "Lucia", apellido: "Fernandez", email: "lucia@tic.com", grupoId: 1 },
  { id: 4, nombre: "Mateo", apellido: "Rodriguez", email: "mateo@tic.com", grupoId: 1 },
  { id: 5, nombre: "Sofia", apellido: "Martinez", email: "sofia@tic.com", grupoId: 1 },
  { id: 6, nombre: "Benjamin", apellido: "Perez", email: "benjamin@tic.com", grupoId: 2 },
  { id: 7, nombre: "Valentina", apellido: "Gomez", email: "valentina@tic.com", grupoId: 2 },
  { id: 8, nombre: "Joaquin", apellido: "Diaz", email: "joaquin@tic.com", grupoId: 2 },
  { id: 9, nombre: "Camila", apellido: "Torres", email: "camila@tic.com", grupoId: 2 },
  { id: 10, nombre: "Felipe", apellido: "Romero", email: "felipe@tic.com", grupoId: 2 },
  { id: 11, nombre: "Isabella", apellido: "Ruiz", email: "isabella@tic.com", grupoId: 3 },
  { id: 12, nombre: "Santiago", apellido: "Alvarez", email: "santiago@tic.com", grupoId: 3 },
  { id: 13, nombre: "Emilia", apellido: "Castro", email: "emilia@tic.com", grupoId: 3 },
  { id: 14, nombre: "Nicolas", apellido: "Herrera", email: "nicolas@tic.com", grupoId: 3 },
  { id: 15, nombre: "Abril", apellido: "Medina", email: "abril@tic.com", grupoId: 3 },
  { id: 16, nombre: "Bautista", apellido: "Silva", email: "bautista@tic.com", grupoId: 4 },
  { id: 17, nombre: "Renata", apellido: "Ortiz", email: "renata@tic.com", grupoId: 4 },
  { id: 18, nombre: "Thiago", apellido: "Molina", email: "thiago@tic.com", grupoId: 4 },
  { id: 19, nombre: "Delfina", apellido: "Suarez", email: "delfina@tic.com", grupoId: 4 },
  { id: 20, nombre: "Lautaro", apellido: "Navarro", email: "lautaro@tic.com", grupoId: 4 }
];

export const profesoresDemo = [
  { id: 1, nombre: "Laura Sanchez" },
  { id: 2, nombre: "Martin Gonzalez" }
];

export const tareasDemo = [
  { id: 1, titulo: "Movimiento del personaje", descripcion: "Programar el movimiento del personaje dentro del juego.", puntosMaximos: 10, disponible: true },
  { id: 2, titulo: "Sistema de puntuación", descripcion: "Crear un sistema que registre los puntos del jugador.", puntosMaximos: 10, disponible: true },
  { id: 3, titulo: "Menú principal", descripcion: "Diseñar un menú para iniciar y salir del juego.", puntosMaximos: 10, disponible: true },
  { id: 4, titulo: "Sistema de vidas", descripcion: "Implementar vidas para el personaje.", puntosMaximos: 10, disponible: true },
  { id: 5, titulo: "Inventario", descripcion: "Crear un inventario para guardar objetos.", puntosMaximos: 20, disponible: true },
  { id: 6, titulo: "Enemigos", descripcion: "Programar el comportamiento de los enemigos.", puntosMaximos: 20, disponible: true },
  { id: 7, titulo: "Niveles", descripcion: "Crear diferentes niveles para el juego.", puntosMaximos: 15, disponible: true },
  { id: 8, titulo: "Sonido", descripcion: "Agregar efectos de sonido al juego.", puntosMaximos: 10, disponible: true }
];

export const reservasDemo = [
  {
    id: 1,
    grupoId: 1,
    estudianteId: 1,
    tareaId: 1,
    estado: "APROBADA",
    puntosObtenidos: 8,
    observacion: "Buen trabajo. El movimiento funciona correctamente."
  },
  {
    id: 2,
    grupoId: 1,
    estudianteId: 2,
    tareaId: 2,
    estado: "ENTREGADA",
    puntosObtenidos: null,
    observacion: "Entrega pendiente de evaluación."
  },
  {
    id: 3,
    grupoId: 2,
    estudianteId: 6,
    tareaId: 5,
    estado: "APROBADA",
    puntosObtenidos: 18,
    observacion: "Inventario implementado correctamente."
  },
  {
    id: 4,
    grupoId: 3,
    estudianteId: 11,
    tareaId: 6,
    estado: "CORRECCION",
    puntosObtenidos: 12,
    observacion: "Se deben mejorar los movimientos de los enemigos."
  }
];
