
const API_URL = "http://localhost:8080/api";

export async function consultar(url) {
  const respuesta = await fetch(`${API_URL}${url}`);

  if (!respuesta.ok) {
    throw new Error("No se pudieron consultar los datos");
  }

  return respuesta.json();
}

export async function enviar(url, datos) {
  const respuesta = await fetch(`${API_URL}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datos)
  });

  if (!respuesta.ok) {
    throw new Error("No se pudieron guardar los datos");
  }

  return respuesta.json();
}

export async function actualizar(url, datos = null) {
  const respuesta = await fetch(`${API_URL}${url}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: datos === null ? undefined : JSON.stringify(datos)
  });

  if (!respuesta.ok) {
    throw new Error("No se pudieron actualizar los datos");
  }

  return respuesta.json();
}
