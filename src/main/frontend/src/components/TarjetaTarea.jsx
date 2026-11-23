function TarjetaTarea({ tarea, reservar }) {
  return (
    <article className="tarjeta">
      <div className="tarjeta-superior">
        <span className="etiqueta">Desarrollo de videojuegos</span>
        <span className={tarea.disponible ? "estado disponible" : "estado reservada"}>
          {tarea.disponible ? "Disponible" : "Reservada"}
        </span>
      </div>

      <h3>{tarea.titulo}</h3>
      <p>{tarea.descripcion}</p>

      <div className="tarjeta-pie">
        <strong>{tarea.puntosMaximos} puntos</strong>

        <button
          onClick={() => reservar(tarea.id)}
          disabled={!tarea.disponible}
        >
          {tarea.disponible ? "Reservar tarea" : "Ya reservada"}
        </button>
      </div>
    </article>
  );
}

export default TarjetaTarea;
