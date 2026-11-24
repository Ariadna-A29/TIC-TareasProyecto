
function Evaluaciones({
  reservas,
  tareas,
  estudiantes,
  perfil,
  aprobarTarea
}) {
  const evaluaciones = reservas.filter(
    (reserva) => reserva.estado !== "RESERVADA"
  );

  return (
    <section className="contenido">
      <h1>Evaluaciones</h1>
      <p>Seguimiento del rendimiento de los estudiantes.</p>

      <div className="tarjetas">
        {evaluaciones.map((reserva) => {
          const tarea = tareas.find(
            (item) => item.id === reserva.tareaId
          );

          const estudiante = estudiantes.find(
            (item) => item.id === reserva.estudianteId
          );

          if (!tarea || !estudiante) {
            return null;
          }

          const puedeAprobar =
            perfil === "profesor" &&
            (reserva.estado === "ENTREGADA" ||
              reserva.estado === "CORRECCION");

          return (
            <article className="tarjeta" key={reserva.id}>
              <h3>{tarea.titulo}</h3>

              <p>
                <strong>Estudiante:</strong>{" "}
                {estudiante.nombre} {estudiante.apellido}
              </p>

              <p>
                <strong>Estado:</strong>{" "}
                <span
                  className={
                    reserva.estado === "APROBADA"
                      ? "estado aprobada"
                      : "estado"
                  }
                >
                  {reserva.estado}
                </span>
              </p>

              <p>
                <strong>Puntos obtenidos:</strong>{" "}
                {reserva.puntosObtenidos !== null
                  ? `${reserva.puntosObtenidos} / ${tarea.puntosMaximos}`
                  : "Pendiente"}
              </p>

              <p>
                <strong>Observación:</strong>{" "}
                {reserva.observacion}
              </p>

              {puedeAprobar && (
                <button
                  onClick={() => aprobarTarea(reserva.id)}
                >
                  Marcar como corregida y aprobada
                </button>
              )}

              {reserva.estado === "APROBADA" && (
                <p className="mensaje-exito">
                  Esta tarea ya fue corregida y aprobada.
                </p>
              )}
            </article>
          );
        })}
      </div>

      {evaluaciones.length === 0 && (
        <p>Todavía no hay evaluaciones.</p>
      )}
    </section>
  );
}

export default Evaluaciones;
