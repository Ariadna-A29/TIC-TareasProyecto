
import { useEffect, useState } from "react";

import { consultar, actualizar } from "../services/api";

function Evaluaciones() {
  const [reservas, setReservas] = useState([]);
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  async function cargarReservas() {
    try {
      const datos = await consultar("/reservas");
      setReservas(datos);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    cargarReservas();
  }, []);

  async function evaluar(id, puntosMaximos) {
    const puntos = Number(
      prompt(`Ingresá los puntos (máximo ${puntosMaximos}):`)
    );

    if (!Number.isInteger(puntos)) {
      setError("Ingresá un número entero de puntos.");
      return;
    }

    const observacion = prompt("Escribí una observación:") || "";

    const aprobada = window.confirm(
      "¿Aprobás el trabajo?"
    );

    try {
      await actualizar(`/reservas/${id}/evaluar`, {
        puntos,
        observacion,
        aprobada
      });

      setMensaje("Evaluación guardada correctamente.");
      setError("");
      await cargarReservas();
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <section>
      <h1>Evaluaciones</h1>

      {mensaje && <p>{mensaje}</p>}
      {error && <p className="error">{error}</p>}

      {reservas
        .filter((reserva) =>
          ["ENTREGADA", "CORRECCION"].includes(reserva.estado)
        )
        .map((reserva) => (
          <article className="tarjeta" key={reserva.id}>
            <h3>{reserva.tarea.nombre}</h3>

            <p>Grupo: {reserva.grupo.nombre}</p>
            <p>Estado: {reserva.estado}</p>

            <button
              onClick={() =>
                evaluar(
                  reserva.id,
                  reserva.tarea.puntosMaximos
                )
              }
            >
              Evaluar trabajo
            </button>
          </article>
        ))}
    </section>
  );
}

export default Evaluaciones;
