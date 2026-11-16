
import { consultar, enviar } from "./api";

export function obtenerTareas() {
  return consultar("/tareas");
}

export function obtenerTareasDisponibles() {
  return consultar("/tareas/disponibles");
}

export function crearTarea(tarea) {
  return enviar("/tareas", tarea);
}
