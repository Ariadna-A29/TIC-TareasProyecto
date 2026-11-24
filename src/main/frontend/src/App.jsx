import { useState } from "react";

import Menu from "./components/Menu.jsx";
import Inicio from "./pages/Inicio.jsx";
import Tareas from "./pages/Tareas.jsx";
import MisReservas from "./pages/MisReservas.jsx";
import Evaluaciones from "./pages/Evaluaciones.jsx";
import Estudiantes from "./pages/Estudiantes.jsx";

import {
  tareasDemo,
  gruposDemo,
  estudiantesDemo,
  reservasDemo
} from "./datosDemo.js";

function App() {
  const [pagina, setPagina] = useState("inicio");

  const [perfil, setPerfil] = useState("estudiante");

  const [reservas, setReservas] = useState(reservasDemo);

  const tareasARevisar = reservas.filter(
    (reserva) =>
      reserva.estado === "ENTREGADA" ||
      reserva.estado === "CORRECCION"
  ).length;

  const [tareas, setTareas] = useState(() =>
    tareasDemo.map((tarea) => ({
      ...tarea,
      disponible: !reservasDemo.some(
        (reserva) => reserva.tareaId === tarea.id
      )
    }))
  );

  function reservarTarea(idTarea) {
    const tarea = tareas.find((item) => item.id === idTarea);

    if (!tarea || !tarea.disponible) {
      return;
    }

    const grupoId = 1;

    const estudiantesDelGrupo = estudiantesDemo.filter(
      (estudiante) => estudiante.grupoId === grupoId
    );

    const reservasDelGrupo = reservas.filter(
      (reserva) => reserva.grupoId === grupoId
    );

    const estudiante =
      estudiantesDelGrupo[
        reservasDelGrupo.length % estudiantesDelGrupo.length
      ];

    const nuevaReserva = {
      id: Date.now(),
      grupoId,
      estudianteId: estudiante.id,
      tareaId: idTarea,
      estado: "RESERVADA",
      puntosObtenidos: null,
      observacion: "Reserva realizada desde la plataforma."
    };

    setReservas((actuales) => [...actuales, nuevaReserva]);

    setTareas((actuales) =>
      actuales.map((item) =>
        item.id === idTarea
          ? { ...item, disponible: false }
          : item
      )
    );
  }

  function entregarTarea(idReserva) {
    setReservas((actuales) =>
      actuales.map((reserva) =>
        reserva.id === idReserva
          ? { ...reserva, estado: "ENTREGADA" }
          : reserva
      )
    );
  }

  function aprobarTarea(idReserva) {
    setReservas((actuales) =>
      actuales.map((reserva) =>
        reserva.id === idReserva
          ? {
              ...reserva,
              estado: "APROBADA",
              observacion: "Tarea corregida y aprobada por el profesor."
            }
          : reserva
      )
    );
  }

  function mostrarPagina() {
    switch (pagina) {
      case "tareas":
        return (
          <Tareas
            tareas={tareas}
            reservar={reservarTarea}
          />
        );

      case "reservas":
        return (
          <MisReservas
            reservas={reservas}
            tareas={tareasDemo}
            estudiantes={estudiantesDemo}
            grupos={gruposDemo}
            entregar={entregarTarea}
          />
        );

        case "evaluaciones":
          return (
            <Evaluaciones
              reservas={reservas}
              tareas={tareasDemo}
              estudiantes={estudiantesDemo}
              perfil={perfil}
              aprobarTarea={aprobarTarea}
            />
          );

      case "estudiantes":
        return (
          <Estudiantes
            estudiantes={estudiantesDemo}
            grupos={gruposDemo}
            reservas={reservas}
          />
        );

      default:
        return (
          <Inicio
            cambiarPagina={setPagina}
            perfil={perfil}
            reservas={reservas}
          />
        );
    }
  }

  return (
    <div className="app">
      <Menu
        cambiarPagina={setPagina}
        pagina={pagina}
        perfil={perfil}
        cambiarPerfil={setPerfil}
      />
      <main>{mostrarPagina()}</main>
    </div>
  );
}

export default App;
