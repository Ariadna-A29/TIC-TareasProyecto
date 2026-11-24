function Menu({ cambiarPagina, pagina, perfil, cambiarPerfil }) {
  return (
    <header className="encabezado">
      <div className="marca">
        <div className="marca-icono">T</div>
        <div>
          <h2>TIC-Tareas</h2>
          <span>Plataforma educativa</span>
        </div>
      </div>

      <nav className="navegacion">
        <button
          className={pagina === "inicio" ? "activo" : ""}
          onClick={() => cambiarPagina("inicio")}
        >
          Inicio
        </button>

        <button
          className={pagina === "tareas" ? "activo" : ""}
          onClick={() => cambiarPagina("tareas")}
        >
          Mecánicas
        </button>

        {perfil === "estudiante" ? (
          <>
            <button
              className={pagina === "reservas" ? "activo" : ""}
              onClick={() => cambiarPagina("reservas")}
            >
              Mis reservas
            </button>

            <button
              className={pagina === "evaluaciones" ? "activo" : ""}
              onClick={() => cambiarPagina("evaluaciones")}
            >
              Mis evaluaciones
            </button>
          </>
        ) : (
          <>
            <button
              className={pagina === "evaluaciones" ? "activo" : ""}
              onClick={() => cambiarPagina("evaluaciones")}
            >
              Entregas
            </button>

            <button
              className={pagina === "estudiantes" ? "activo" : ""}
              onClick={() => cambiarPagina("estudiantes")}
            >
              Estudiantes
            </button>
          </>
        )}
      </nav>

      <div className="selector-perfil">
        <label htmlFor="perfil">Cambiar perfil:</label>

        <select
          id="perfil"
          value={perfil}
          onChange={(e) => {
            cambiarPerfil(e.target.value);
            cambiarPagina("inicio");
          }}
        >
          <option value="estudiante">Estudiante</option>
          <option value="profesor">Profesor</option>
        </select>
      </div>
    </header>
  );
}

export default Menu;
