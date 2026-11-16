
import { useEffect, useState } from "react";
import { obtenerEstudiantes } from "../services/estudianteService";

function Estudiantes() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargar() {
      try {
        const datos = await obtenerEstudiantes();
        setEstudiantes(datos);
      } catch (error) {
        setError(error.message);
      }
    }

    cargar();
  }, []);

  return (
    <section>
      <h1>Estudiantes</h1>

      {error && <p className="error">{error}</p>}

      <div className="tarjetas">
        {estudiantes.map((estudiante) => (
          <article className="tarjeta" key={estudiante.id}>
            <h3>
              {estudiante.nombre} {estudiante.apellido}
            </h3>

            <p>{estudiante.email}</p>
          </article>
        ))}
      </div>

      {estudiantes.length === 0 && (
        <p>No hay estudiantes registrados.</p>
      )}
    </section>
  );
}

export default Estudiantes;
