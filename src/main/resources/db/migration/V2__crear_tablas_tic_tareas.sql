CREATE TABLE estudiantes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE profesores (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    apellido VARCHAR(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE grupos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE tareas (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255),
    descripcion VARCHAR(255),
    puntos INT,
    disponible BOOLEAN
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE reservas (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    grupo_id BIGINT NOT NULL,
    tarea_id BIGINT NOT NULL,
    estado VARCHAR(255) NOT NULL,
    observacion VARCHAR(255),
    puntos_obtenidos INT,
    fecha_reserva DATETIME(6),

    CONSTRAINT fk_reserva_grupo
        FOREIGN KEY (grupo_id) REFERENCES grupos(id),

    CONSTRAINT fk_reserva_tarea
        FOREIGN KEY (tarea_id) REFERENCES tareas(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
