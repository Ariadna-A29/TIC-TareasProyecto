function TarjetaTarea({ tarea, reservar }) {
  return (
    <article className="tarjeta tarjeta-mecanica">
      <div className="tarjeta-superior">
        <span className="etiqueta">DESARROLLO DE VIDEOJUEGOS</span>

        <span
          className={
            tarea.disponible
              ? "estado disponible"
              : "estado reservada"
          }
        >
          {tarea.disponible ? "Disponible" : "Reservada"}
        </span>
      </div>

      <h3>{tarea.titulo}</h3>

      <p>{tarea.descripcion}</p>

      <div className="mecanica-detalles">
        <span>⭐ Puntuación máxima</span>
        <strong>{tarea.puntosMaximos} puntos</strong>
      </div>

      <div className="tarjeta-pie">
        <button
          onClick={() => reservar(tarea.id)}
          disabled={!tarea.disponible}
        >
          {tarea.disponible ? "Reservar mecánica" : "Ya reservada"}
        </button>
      </div>
    </article>
  );
}

export default TarjetaTarea;
