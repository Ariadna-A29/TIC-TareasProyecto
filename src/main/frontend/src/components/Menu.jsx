
function Menu({ cambiarPagina }) {
  return (
    <nav className="menu">
      <h2>TIC-Tareas</h2>

      <button onClick={() => cambiarPagina("inicio")}>
        Inicio
      </button>

      <button onClick={() => cambiarPagina("tareas")}>
        Tareas
      </button>

      <button onClick={() => cambiarPagina("reservas")}>
        Mis reservas
      </button>

      <button onClick={() => cambiarPagina("evaluaciones")}>
        Evaluaciones
      </button>

      <button onClick={() => cambiarPagina("estudiantes")}>
        Estudiantes
      </button>
    </nav>
  );
}

export default Menu;
