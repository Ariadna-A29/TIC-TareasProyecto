package etec.Backend.service

import etec.Backend.model.Reserva
import etec.Backend.model.EstadoReserva
import etec.Backend.repository.ReservaRepository
import etec.Backend.repository.GrupoRepository
import etec.Backend.repository.TareaRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime

@Service
class ReservaService(
    private val reservaRepository: ReservaRepository,
    private val grupoRepository: GrupoRepository,
    private val tareaRepository: TareaRepository
) {

    fun listarTodas(): List<Reserva> {
        return reservaRepository.findAll()
    }

    // Un grupo reserva una tarea
    fun reservar(grupoId: Long, tareaId: Long): Reserva {

        val grupo = grupoRepository.findById(grupoId)
            .orElseThrow { RuntimeException("Grupo no encontrado") }

        val tarea = tareaRepository.findById(tareaId)
            .orElseThrow { RuntimeException("Tarea no encontrada") }

        if (!tarea.disponible) {
            throw RuntimeException("La tarea no está disponible")
        }

        if (reservaRepository.existsByGrupo_IdAndTarea_Id(grupoId, tareaId)) {
            throw RuntimeException("El grupo ya reservó esta tarea")
        }

        val reserva = Reserva(
            grupo = grupo,
            tarea = tarea,
            estado = EstadoReserva.RESERVADA,
            fechaReserva = LocalDateTime.now()
        )

        return reservaRepository.save(reserva)
    }

    // Consultar las reservas de un grupo
    fun listarPorGrupo(grupoId: Long): List<Reserva> {
        return reservaRepository.findByGrupo_Id(grupoId)
    }

    // El estudiante entrega el trabajo
    @Transactional
    fun entregar(id: Long): Reserva {

        val reserva = reservaRepository.findById(id)
            .orElseThrow { RuntimeException("Reserva no encontrada") }

        if (reserva.estado != EstadoReserva.RESERVADA &&
            reserva.estado != EstadoReserva.EN_PROGRESO) {
            throw RuntimeException("Esta reserva no se puede entregar")
        }

        reserva.estado = EstadoReserva.ENTREGADA

        return reservaRepository.save(reserva)
    }

    // El profesor evalúa el trabajo
    @Transactional
    fun evaluar(
        id: Long,
        puntos: Int,
        observacion: String,
        aprobada: Boolean
    ): Reserva {

        val reserva = reservaRepository.findById(id)
            .orElseThrow { RuntimeException("Reserva no encontrada") }

        if (reserva.estado != EstadoReserva.ENTREGADA &&
            reserva.estado != EstadoReserva.CORRECCION) {
            throw RuntimeException("La reserva todavía no fue entregada")
        }

        if (puntos < 0 || puntos > reserva.tarea.puntosMaximos) {
            throw RuntimeException("Los puntos no son válidos")
        }

        reserva.puntosObtenidos = puntos
        reserva.observacion = observacion

        reserva.estado = if (aprobada) {
            EstadoReserva.APROBADA
        } else {
            EstadoReserva.CORRECCION
        }

        return reservaRepository.save(reserva)
    }
}
