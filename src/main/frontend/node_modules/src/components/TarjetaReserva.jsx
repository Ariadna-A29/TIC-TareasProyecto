
function TarjetaReserva({ reserva, entregar }) {
  return (
    <article className="tarjeta">
      <h3>{reserva.tarea.nombre}</h3>

      <p>
        <strong>Estado:</strong> {reserva.estado}
      </p>

      {reserva.puntosObtenidos != null && (
        <p>
          <strong>Puntos obtenidos:</strong>
          {" "}{reserva.puntosObtenidos}
        </p>
      )}

      {reserva.observacion && (
        <p>
          <strong>Observación:</strong>
          {" "}{reserva.observacion}
        </p>
      )}

      {(reserva.estado === "RESERVADA" ||
        reserva.estado === "EN_PROGRESO") && (
        <button onClick={() => entregar(reserva.id)}>
          Entregar trabajo
        </button>
      )}
    </article>
  );
}

export default TarjetaReserva;
