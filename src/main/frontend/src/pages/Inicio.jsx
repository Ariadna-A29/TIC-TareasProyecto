function Inicio({ cambiarPagina, perfil, reservas }) {
  const esEstudiante = perfil === "estudiante";

  const entregasPorRevisar = reservas.filter(
    (reserva) =>
      reserva.estado === "ENTREGADA" ||
      reserva.estado === "CORRECCION"
  ).length;

  const tareasAprobadas = reservas.filter(
    (reserva) => reserva.estado === "APROBADA"
  ).length;

  return (
    <section className="contenido">
      <div className="bienvenida">
        <div>
          <span className="subtitulo">PANEL PRINCIPAL</span>

          <h1>
            {esEstudiante
              ? "¡Bienvenido a TIC-Tareas!"
              : "¡Bienvenido, profesor!"}
          </h1>

          <p>
            {esEstudiante
              ? "Consultá las mecánicas, reservá tareas y revisá tus evaluaciones."
              : "Administrá las mecánicas, revisá entregas y consultá el progreso de los estudiantes."}
          </p>
        </div>

        <div className="bienvenida-icono">📚</div>
      </div>

      {esEstudiante ? (
        <>
          <div className="estadisticas">
            <div className="estadistica">
              <p>Puntos obtenidos</p>
              <h2>8</h2>
            </div>

            <div className="estadistica">
              <p>Tareas reservadas</p>
              <h2>2</h2>
            </div>

            <div className="estadistica">
              <p>Tareas aprobadas</p>
              <h2>1</h2>
            </div>

            <div className="estadistica">
              <p>Mecánicas disponibles</p>
              <h2>4</h2>
            </div>
          </div>

          <div className="bloque-inicio">
            <div>
              <h2>¿Qué querés hacer hoy?</h2>
              <p>Accedé rápidamente a las funciones de la plataforma.</p>
            </div>

            <div className="acciones-inicio">
              <button onClick={() => cambiarPagina("tareas")}>
                Explorar mecánicas
              </button>

              <button
                className="boton-secundario"
                onClick={() => cambiarPagina("reservas")}
              >
                Ver mis reservas
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="estadisticas">
            <div className="estadistica">
              <p>Mecánicas cargadas</p>
              <h2>0</h2>
            </div>

            <div className="estadistica">
              <p>Entregas por revisar</p>
              <h2>{entregasPorRevisar}</h2>
            </div>

            <div className="estadistica">
              <p>Tareas aprobadas</p>
              <h2>{tareasAprobadas}</h2>
            </div>

            <div className="estadistica">
              <p>Estudiantes</p>
              <h2>20</h2>
            </div>
          </div>

          <div className="bloque-inicio">
            <div>
              <h2>Administración de tareas</h2>
              <p>Consultá las entregas y el progreso de los grupos.</p>
            </div>

            <div className="acciones-inicio">
              <button onClick={() => cambiarPagina("evaluaciones")}>
                Revisar entregas
              </button>

              <button
                className="boton-secundario"
                onClick={() => cambiarPagina("estudiantes")}
              >
                Ver estudiantes
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Inicio;
