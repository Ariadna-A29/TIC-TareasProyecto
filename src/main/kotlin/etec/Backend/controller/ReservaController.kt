package etec.Backend.controller

import etec.Backend.model.Reserva
import etec.Backend.service.ReservaService
import org.springframework.web.bind.annotation.*

data class ReservarRequest(
    val grupoId: Long,
    val tareaId: Long
)

data class EvaluarRequest(
    val puntos: Int,
    val observacion: String,
    val aprobada: Boolean
)

@RestController
@RequestMapping("/api/reservas")
@CrossOrigin(origins = ["http://localhost:5173"])
class ReservaController(
    private val reservaService: ReservaService
) {

    // Reservar una tarea
    @PostMapping
    fun reservar(@RequestBody datos: ReservarRequest): Reserva {
        return reservaService.reservar(
            datos.grupoId,
            datos.tareaId
        )
    }

    // Ver las reservas de un grupo
    @GetMapping("/grupo/{grupoId}")
    fun listarPorGrupo(
        @PathVariable grupoId: Long
    ): List<Reserva> {
        return reservaService.listarPorGrupo(grupoId)
    }

    // Entregar una tarea
    @PatchMapping("/{id}/entregar")
    fun entregar(@PathVariable id: Long): Reserva {
        return reservaService.entregar(id)
    }

    // Evaluar una tarea
    @PatchMapping("/{id}/evaluar")
    fun evaluar(
        @PathVariable id: Long,
        @RequestBody datos: EvaluarRequest
    ): Reserva {
        return reservaService.evaluar(
            id,
            datos.puntos,
            datos.observacion,
            datos.aprobada
        )
    }

    @GetMapping
    fun listarTodas(): List<Reserva> {
        return reservaService.listarTodas()
    }

}
