package etec.Backend.repository

import etec.Backend.model.Profesor
import org.springframework.data.jpa.repository.JpaRepository

interface ProfesorRepository :
    JpaRepository<Profesor, Long>
