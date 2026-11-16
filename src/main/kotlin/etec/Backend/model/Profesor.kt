package etec.Backend.model

import jakarta.persistence.*

@Entity
@Table(name = "profesores")
class Profesor(
    @Id
       @GeneratedValue(strategy = GenerationType.IDENTITY)
       var id: Long? = null,

       var nombre: String = "",
       var apellido: String = ""
)
