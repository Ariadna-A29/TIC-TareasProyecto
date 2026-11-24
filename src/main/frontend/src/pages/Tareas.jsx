
import { useState } from "react";
import TarjetaTarea from "../components/TarjetaTarea";

function Tareas({ tareas, reservar }) {
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("todas");

  const disponibles = tareas.filter((tarea) => tarea.disponible).length;
  const reservadas = tareas.length - disponibles;

  const tareasFiltradas = tareas.filter((tarea) => {
    const coincideBusqueda = tarea.titulo
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideFiltro =
      filtro === "todas" ||
      (filtro === "disponibles" && tarea.disponible) ||
      (filtro === "reservadas" && !tarea.disponible);

    return coincideBusqueda && coincideFiltro;
  });

  return (
    <section className="contenido">
      <div className="catalogo-encabezado">
        <div>
          <span className="subtitulo">CATÁLOGO DE ACTIVIDADES</span>
          <h1>Mecánicas del proyecto</h1>
          <p>
            Explorá las actividades disponibles para desarrollar el videojuego.
            Podés reservar una mecánica para comenzar a trabajar.
          </p>
        </div>
      </div>

      <div className="estadisticas">
        <div className="estadistica">
          <p>Total de mecánicas</p>
          <h2>{tareas.length}</h2>
        </div>

        <div className="estadistica">
          <p>Disponibles</p>
          <h2>{disponibles}</h2>
        </div>

        <div className="estadistica">
          <p>Reservadas</p>
          <h2>{reservadas}</h2>
        </div>
      </div>

      <div className="catalogo-contenido">
        <div className="catalogo-herramientas">
          <div>
            <h2>Listado de mecánicas</h2>
            <p>Seleccioná una actividad para consultar su información.</p>
          </div>

          <input
            className="buscador"
            type="text"
            placeholder="Buscar una mecánica..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <div className="filtros">
          <button
            className={filtro === "todas" ? "filtro-activo" : "filtro"}
            onClick={() => setFiltro("todas")}
          >
            Todas ({tareas.length})
          </button>

          <button
            className={filtro === "disponibles" ? "filtro-activo" : "filtro"}
            onClick={() => setFiltro("disponibles")}
          >
            Disponibles ({disponibles})
          </button>

          <button
            className={filtro === "reservadas" ? "filtro-activo" : "filtro"}
            onClick={() => setFiltro("reservadas")}
          >
            Reservadas ({reservadas})
          </button>
        </div>

        {tareasFiltradas.length > 0 ? (
          <div className="tarjetas">
            {tareasFiltradas.map((tarea) => (
              <TarjetaTarea
                key={tarea.id}
                tarea={tarea}
                reservar={reservar}
              />
            ))}
          </div>
        ) : (
          <div className="sin-resultados">
            <h3>No se encontraron mecánicas</h3>
            <p>Probá con otro nombre o cambiá el filtro seleccionado.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Tareas;
