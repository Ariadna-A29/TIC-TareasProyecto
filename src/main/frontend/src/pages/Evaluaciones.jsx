
function Evaluaciones({ reservas, tareas, estudiantes }) {
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

          return (
            <article className="tarjeta" key={reserva.id}>
              <h3>{tarea.titulo}</h3>

              <p>
                <strong>Estudiante:</strong>{" "}
                {estudiante.nombre} {estudiante.apellido}
              </p>

              <p>
                <strong>Estado:</strong> {reserva.estado}
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
