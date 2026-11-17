ALTER TABLE estudiantes
ADD COLUMN grupo_id BIGINT NOT NULL;

ALTER TABLE estudiantes
ADD CONSTRAINT fk_estudiante_grupo
FOREIGN KEY (grupo_id) REFERENCES grupos(id);
