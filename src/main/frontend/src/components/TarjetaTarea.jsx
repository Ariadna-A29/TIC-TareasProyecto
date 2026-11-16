
function TarjetaTarea({ tarea, reservar }) {
  return (
    <article className="tarjeta">
      <h3>{tarea.nombre}</h3>

      <p>{tarea.descripcion}</p>

      <p>
        <strong>Puntos:</strong> {tarea.puntosMaximos}
      </p>

      <button onClick={() => reservar(tarea.id)}>
        Reservar tarea
      </button>
    </article>
  );
}

export default TarjetaTarea;
