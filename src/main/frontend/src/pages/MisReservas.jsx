
import { useEffect, useState } from "react";

import {
  obtenerReservas,
  entregarTarea
} from "../services/reservaService";

import TarjetaReserva from "../components/TarjetaReserva";

function MisReservas() {
  const [reservas, setReservas] = useState([]);
  const [error, setError] = useState("");

  // ID de ejemplo para realizar las pruebas.
  const grupoId = 1;

  async function cargarReservas() {
    try {
      const datos = await obtenerReservas(grupoId);
      setReservas(datos);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    cargarReservas();
  }, []);

  async function entregar(id) {
    try {
      await entregarTarea(id);
      await cargarReservas();
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <section>
      <h1>Mis reservas</h1>

      {error && <p className="error">{error}</p>}

      <div className="tarjetas">
        {reservas.map((reserva) => (
          <TarjetaReserva
            key={reserva.id}
            reserva={reserva}
            entregar={entregar}
          />
        ))}
      </div>

      {reservas.length === 0 && (
        <p>El grupo todavía no tiene reservas.</p>
      )}
    </section>
  );
}

export default MisReservas;
