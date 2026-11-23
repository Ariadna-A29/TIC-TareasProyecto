
import TarjetaTarea from "../components/TarjetaTarea";

function Tareas({ tareas, reservar }) {
  return (
    <section className="contenido">
      <div className="encabezado-seccion">
        <div>
          <h1>Tareas del proyecto</h1>
          <p>Actividades para desarrollar el videojuego.</p>
        </div>

        <span className="contador">
          {tareas.length} tareas
        </span>
      </div>

      <div className="tarjetas">
        {tareas.map((tarea) => (
          <TarjetaTarea
            key={tarea.id}
            tarea={tarea}
            reservar={reservar}
          />
        ))}
      </div>
    </section>
  );
}

export default Tareas;
