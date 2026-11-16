package etec.Backend.repository

import etec.Backend.model.Reserva
import org.springframework.data.jpa.repository.JpaRepository

interface ReservaRepository : JpaRepository<Reserva, Long> {

    fun findByGrupo_Id(grupoId: Long): List<Reserva>

    fun existsByGrupo_IdAndTarea_Id(
        grupoId: Long,
        tareaId: Long
    ): Boolean
}
