package etec.Backend.model

import jakarta.persistence.*

@Entity
@Table(name = "grupos")
class Grupo(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,

    var nombre: String = ""
)
