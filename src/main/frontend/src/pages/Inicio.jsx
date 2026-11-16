
function Inicio({ cambiarPagina }) {
  return (
    <section>
      <h1>Bienvenido a TIC-Tareas</h1>

      <p>
        Plataforma para consultar actividades,
        reservar tareas y realizar entregas.
      </p>

      <div className="tarjetas">
        <button onClick={() => cambiarPagina("tareas")}>
          Consultar tareas
        </button>

        <button onClick={() => cambiarPagina("reservas")}>
          Ver mis reservas
        </button>

        <button onClick={() => cambiarPagina("evaluaciones")}>
          Ver evaluaciones
        </button>
      </div>
    </section>
  );
}

export default Inicio;
