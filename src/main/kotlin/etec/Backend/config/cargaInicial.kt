package etec.Backend.config

import etec.Backend.model.Estudiante
import etec.Backend.model.Grupo
import etec.Backend.model.Tarea
import etec.Backend.repository.EstudianteRepository
import etec.Backend.repository.GrupoRepository
import etec.Backend.repository.TareaRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.stereotype.Component

@Component
class CargaInicial(
    private val estudianteRepository: EstudianteRepository,
    private val grupoRepository: GrupoRepository,
    private val tareaRepository: TareaRepository
) : CommandLineRunner {

    override fun run(args: Array<String>) {

        // Crear grupos
        if (grupoRepository.count() == 0L) {
            grupoRepository.saveAll(
                listOf(
                    Grupo(nombre = "Pixel Warriors"),
                    Grupo(nombre = "Game Masters"),
                    Grupo(nombre = "Codigo Gamer"),
                    Grupo(nombre = "Retro Players")
                )
            )
        }

        // Recuperar los grupos para relacionarlos con estudiantes
        val grupos = grupoRepository.findAll()
            .associateBy { it.nombre }

        // Crear estudiantes
        if (estudianteRepository.count() == 0L) {

            val estudiantes = listOf(
                Estudiante(
                    nombre = "Martina",
                    apellido = "Lopez",
                    email = "martina.lopez@tic.com",
                    grupo = grupos.getValue("Pixel Warriors")
                ),
                Estudiante(
                    nombre = "Tomas",
                    apellido = "Garcia",
                    email = "tomas.garcia@tic.com",
                    grupo = grupos.getValue("Pixel Warriors")
                ),
                Estudiante(
                    nombre = "Lucia",
                    apellido = "Fernandez",
                    email = "lucia.fernandez@tic.com",
                    grupo = grupos.getValue("Pixel Warriors")
                ),
                Estudiante(
                    nombre = "Mateo",
                    apellido = "Rodriguez",
                    email = "mateo.rodriguez@tic.com",
                    grupo = grupos.getValue("Pixel Warriors")
                ),
                Estudiante(
                    nombre = "Sofia",
                    apellido = "Martinez",
                    email = "sofia.martinez@tic.com",
                    grupo = grupos.getValue("Pixel Warriors")
                ),

                Estudiante(
                    nombre = "Benjamin",
                    apellido = "Perez",
                    email = "benjamin.perez@tic.com",
                    grupo = grupos.getValue("Game Masters")
                ),
                Estudiante(
                    nombre = "Valentina",
                    apellido = "Gomez",
                    email = "valentina.gomez@tic.com",
                    grupo = grupos.getValue("Game Masters")
                ),
                Estudiante(
                    nombre = "Joaquin",
                    apellido = "Diaz",
                    email = "joaquin.diaz@tic.com",
                    grupo = grupos.getValue("Game Masters")
                ),
                Estudiante(
                    nombre = "Camila",
                    apellido = "Torres",
                    email = "camila.torres@tic.com",
                    grupo = grupos.getValue("Game Masters")
                ),
                Estudiante(
                    nombre = "Felipe",
                    apellido = "Romero",
                    email = "felipe.romero@tic.com",
                    grupo = grupos.getValue("Game Masters")
                ),

                Estudiante(
                    nombre = "Isabella",
                    apellido = "Ruiz",
                    email = "isabella.ruiz@tic.com",
                    grupo = grupos.getValue("Codigo Gamer")
                ),
                Estudiante(
                    nombre = "Santiago",
                    apellido = "Alvarez",
                    email = "santiago.alvarez@tic.com",
                    grupo = grupos.getValue("Codigo Gamer")
                ),
                Estudiante(
                    nombre = "Emilia",
                    apellido = "Castro",
                    email = "emilia.castro@tic.com",
                    grupo = grupos.getValue("Codigo Gamer")
                ),
                Estudiante(
                    nombre = "Nicolas",
                    apellido = "Herrera",
                    email = "nicolas.herrera@tic.com",
                    grupo = grupos.getValue("Codigo Gamer")
                ),
                Estudiante(
                    nombre = "Abril",
                    apellido = "Medina",
                    email = "abril.medina@tic.com",
                    grupo = grupos.getValue("Codigo Gamer")
                ),

                Estudiante(
                    nombre = "Bautista",
                    apellido = "Silva",
                    email = "bautista.silva@tic.com",
                    grupo = grupos.getValue("Retro Players")
                ),
                Estudiante(
                    nombre = "Renata",
                    apellido = "Ortiz",
                    email = "renata.ortiz@tic.com",
                    grupo = grupos.getValue("Retro Players")
                ),
                Estudiante(
                    nombre = "Thiago",
                    apellido = "Molina",
                    email = "thiago.molina@tic.com",
                    grupo = grupos.getValue("Retro Players")
                ),
                Estudiante(
                    nombre = "Delfina",
                    apellido = "Suarez",
                    email = "delfina.suarez@tic.com",
                    grupo = grupos.getValue("Retro Players")
                ),
                Estudiante(
                    nombre = "Lautaro",
                    apellido = "Navarro",
                    email = "lautaro.navarro@tic.com",
                    grupo = grupos.getValue("Retro Players")
                )
            )

            estudianteRepository.saveAll(estudiantes)
        }

        // Crear tareas
        if (tareaRepository.count() == 0L) {
            tareaRepository.saveAll(
                listOf(
                    Tarea(
                        titulo = "Sistema de movimiento",
                        descripcion = "Implementar el movimiento del personaje mediante el teclado.",
                        puntosMaximos = 10
                    ),
                    Tarea(
                        titulo = "Sistema de salto",
                        descripcion = "Programar el salto del personaje y la gravedad.",
                        puntosMaximos = 15
                    ),
                    Tarea(
                        titulo = "Deteccion de colisiones",
                        descripcion = "Detectar colisiones entre personajes, paredes y objetos.",
                        puntosMaximos = 15
                    ),
                    Tarea(
                        titulo = "Sistema de vidas",
                        descripcion = "Implementar vidas y un sistema de energia.",
                        puntosMaximos = 10
                    ),
                    Tarea(
                        titulo = "Inventario",
                        descripcion = "Permitir recoger y almacenar objetos dentro del juego.",
                        puntosMaximos = 20
                    ),
                    Tarea(
                        titulo = "Sistema de enemigos",
                        descripcion = "Crear enemigos con movimientos y comportamientos basicos.",
                        puntosMaximos = 20
                    ),
                    Tarea(
                        titulo = "Sistema de puntuacion",
                        descripcion = "Asignar puntos al jugador por recoger recompensas.",
                        puntosMaximos = 10
                    ),
                    Tarea(
                        titulo = "Puertas y niveles",
                        descripcion = "Implementar puertas que permitan avanzar entre niveles.",
                        puntosMaximos = 20
                    )
                )
            )
        }
    }
}
