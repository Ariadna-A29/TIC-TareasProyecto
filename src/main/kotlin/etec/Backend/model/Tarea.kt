package etec.Backend.model

import jakarta.persistence.*

@Entity
@Table(name = "tareas")
class Tarea(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,

    var titulo: String = "",

    var descripcion: String = "",

    @Column(name = "puntos")
    var puntosMaximos: Int = 0,

    var disponible: Boolean = true
)
