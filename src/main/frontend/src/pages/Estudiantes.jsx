
function Estudiantes({ estudiantes, grupos, reservas }) {
  function obtenerGrupo(grupoId) {
    return grupos.find((grupo) => grupo.id === grupoId);
  }

  function obtenerPuntos(estudianteId) {
    return reservas
      .filter(
        (reserva) =>
          reserva.estudianteId === estudianteId &&
          reserva.puntosObtenidos !== null
      )
      .reduce(
        (total, reserva) => total + reserva.puntosObtenidos,
        0
      );
  }

  return (
    <section className="contenido">
      <h1>Estudiantes</h1>
      <p>Listado de estudiantes y sus puntos obtenidos.</p>

      <div className="tarjetas">
        {estudiantes.map((estudiante) => {
          const grupo = obtenerGrupo(estudiante.grupoId);
          const puntos = obtenerPuntos(estudiante.id);

          return (
            <article className="tarjeta" key={estudiante.id}>
              <h3>
                {estudiante.nombre} {estudiante.apellido}
              </h3>

              <p>{estudiante.email}</p>

              <p>
                <strong>Grupo:</strong>{" "}
                {grupo ? grupo.nombre : "Sin grupo"}
              </p>

              <p>
                <strong>Puntos obtenidos:</strong> {puntos}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Estudiantes;
