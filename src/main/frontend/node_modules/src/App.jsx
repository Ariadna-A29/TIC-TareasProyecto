import { useState } from "react";

import Menu from "./components/Menu.jsx";
import Inicio from "./pages/Inicio.jsx";
import Tareas from "./pages/Tareas.jsx";
import MisReservas from "./pages/MisReservas.jsx";
import Evaluaciones from "./pages/Evaluaciones.jsx";
import Estudiantes from "./pages/Estudiantes.jsx";

function App() {
  const [pagina, setPagina] = useState("inicio");

  function mostrarPagina() {
    switch (pagina) {
      case "tareas":
        return <Tareas />;

      case "reservas":
        return <MisReservas />;

      case "evaluaciones":
        return <Evaluaciones />;

      case "estudiantes":
        return <Estudiantes />;

      default:
        return <Inicio cambiarPagina={setPagina} />;
    }
  }

  return (
    <div className="app">
      <Menu cambiarPagina={setPagina} />
      <main>
        {mostrarPagina()}
      </main>
    </div>
  );
}

export default App;
