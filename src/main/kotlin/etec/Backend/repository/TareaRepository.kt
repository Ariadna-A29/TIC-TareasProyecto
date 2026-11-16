package etec.Backend.repository

import etec.Backend.model.Tarea
import org.springframework.data.jpa.repository.JpaRepository

interface TareaRepository :
    JpaRepository<Tarea, Long> {
    fun findByDisponibleTrue(): List<Tarea>
}
