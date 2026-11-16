package etec.Backend.controller

import etec.Backend.model.Estudiante
import etec.Backend.service.EstudianteService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/estudiantes")
@CrossOrigin(origins = ["http://localhost:5173"])
class EstudianteController(
    private val estudianteService: EstudianteService
) {

    @GetMapping
    fun listar(): List<Estudiante> {
        return estudianteService.listar()
    }

    @GetMapping("/{id}")
    fun buscar(@PathVariable id: Long): Estudiante {
        return estudianteService.buscar(id)
    }

    @PostMapping
    fun guardar(@RequestBody estudiante: Estudiante): Estudiante {
        return estudianteService.guardar(estudiante)
    }

    @DeleteMapping("/{id}")
    fun eliminar(@PathVariable id: Long) {
        estudianteService.eliminar(id)
    }
}
