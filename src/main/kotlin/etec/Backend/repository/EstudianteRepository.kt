package etec.Backend.repository

import etec.Backend.model.Estudiante
import org.springframework.data.jpa.repository.JpaRepository

interface EstudianteRepository :
    JpaRepository<Estudiante, Long>
