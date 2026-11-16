
import { consultar } from "./api";

export function obtenerEstudiantes() {
  return consultar("/estudiantes");
}
