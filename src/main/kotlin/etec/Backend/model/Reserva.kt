package etec.Backend.model

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "reservas")
class Reserva(

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,

    @ManyToOne
    @JoinColumn(name = "grupo_id", nullable = false)
    var grupo: Grupo,

    @ManyToOne
    @JoinColumn(name = "tarea_id", nullable = false)
    var tarea: Tarea,

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    var estado: EstadoReserva = EstadoReserva.RESERVADA,

    var observacion: String = "",

    var puntosObtenidos: Int = 0,

    var fechaReserva: LocalDateTime = LocalDateTime.now()
)
