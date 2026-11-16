package etec.Backend.model

import jakarta.persistence.*

@Entity
@Table(name = "estudiantes")
class Estudiante(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,

    @Column(nullable = false)
    var nombre: String = "",

    @Column(nullable = false)
    var apellido: String = "",

    @Column(nullable = false, unique = true)
    var email: String = ""
)
