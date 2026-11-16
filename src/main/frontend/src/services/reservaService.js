
import { consultar, enviar, actualizar } from "./api";

export function obtenerReservas(grupoId) {
  return consultar(`/reservas/grupo/${grupoId}`);
}

export function reservarTarea(grupoId, tareaId) {
  return enviar("/reservas", {
    grupoId,
    tareaId
  });
}

export function entregarTarea(reservaId) {
  return actualizar(`/reservas/${reservaId}/entregar`);
}

export function evaluarTarea(
  reservaId,
  puntos,
  observacion,
  aprobada
) {
  return actualizar(`/reservas/${reservaId}/evaluar`, {
    puntos,
    observacion,
    aprobada
  });
}
