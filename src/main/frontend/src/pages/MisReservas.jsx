
function MisReservas({
  reservas,
  tareas,
  estudiantes,
  grupos,
  entregar
}) {
  function buscarTarea(id) {
    return tareas.find((tarea) => tarea.id === id);
  }

  function buscarEstudiante(id) {
    return estudiantes.find((estudiante) => estudiante.id === id);
  }

  function buscarGrupo(id) {
    return grupos.find((grupo) => grupo.id === id);
  }

  return (
    <section className="contenido">
      <h1>Mis reservas</h1>
      <p>Reservas realizadas por los estudiantes.</p>

      <div className="tarjetas">
        {reservas.map((reserva) => {
          const tarea = buscarTarea(reserva.tareaId);
          const estudiante = buscarEstudiante(reserva.estudianteId);
          const grupo = buscarGrupo(reserva.grupoId);

          if (!tarea || !estudiante || !grupo) {
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
                <strong>Grupo:</strong> {grupo.nombre}
              </p>

              <p>
                <strong>Estado:</strong> {reserva.estado}
              </p>

              <p>
                <strong>Puntos máximos:</strong>{" "}
                {tarea.puntosMaximos}
              </p>

              {reserva.estado === "RESERVADA" && (
                <button onClick={() => entregar(reserva.id)}>
                  Entregar tarea
                </button>
              )}
            </article>
          );
        })}
      </div>

      {reservas.length === 0 && (
        <p>Todavía no hay reservas.</p>
      )}
    </section>
  );
}

export default MisReservas;
