
package etec.Backend.config

import etec.Backend.model.*
import etec.Backend.repository.*
import org.springframework.boot.CommandLineRunner
import org.springframework.stereotype.Component

@Component
class CargaAdicional(
    private val profesorRepository: ProfesorRepository,
    private val grupoRepository: GrupoRepository,
    private val tareaRepository: TareaRepository,
    private val reservaRepository: ReservaRepository
) : CommandLineRunner {

    override fun run(args: Array<String>) {

        // REGISTRAR PROFESORES
        val profesoresIniciales = listOf(
            Profesor(nombre = "Laura", apellido = "Sánchez"),
            Profesor(nombre = "Martín", apellido = "González")
        )

        val profesoresExistentes = profesorRepository.findAll()

        profesoresIniciales.forEach { profesor ->
            val existe = profesoresExistentes.any {
                it.nombre == profesor.nombre &&
                it.apellido == profesor.apellido
            }

            if (!existe) {
                profesorRepository.save(profesor)
            }
        }

        // BUSCAR GRUPOS Y TAREAS EXISTENTES
        val grupos = grupoRepository.findAll().associateBy { it.nombre }
        val tareas = tareaRepository.findAll().associateBy { it.titulo }

        // RESERVAS INICIALES
        val reservasIniciales = listOf(
            Triple("Pixel Warriors", "Sistema de movimiento",
                EstadoReserva.RESERVADA),

            Triple("Pixel Warriors", "Sistema de salto",
                EstadoReserva.EN_PROGRESO),

            Triple("Game Masters", "Inventario",
                EstadoReserva.RESERVADA),

            Triple("Codigo Gamer", "Sistema de enemigos",
                EstadoReserva.ENTREGADA),

            Triple("Retro Players", "Sistema de puntuación",
                EstadoReserva.CORRECCION)
        )

        reservasIniciales.forEach { (nombreGrupo, tituloTarea, estado) ->

            val grupo = grupos[nombreGrupo]
                ?: error("No se encontró el grupo: $nombreGrupo")

            val tarea = tareas[tituloTarea]
                ?: error("No se encontró la tarea: $tituloTarea")

            val existe = reservaRepository
                .existsByGrupo_IdAndTarea_Id(
                    grupo.id!!,
                    tarea.id!!
                )

            if (!existe) {
                reservaRepository.save(
                    Reserva(
                        grupo = grupo,
                        tarea = tarea,
                        estado = estado
                    )
                )
            }
        }

        println("Carga de profesores y reservas finalizada.")
    }
}
