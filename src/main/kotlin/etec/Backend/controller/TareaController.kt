package etec.Backend.controller

import etec.Backend.model.Tarea
import etec.Backend.service.TareaService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/tareas")
@CrossOrigin(origins = ["http://localhost:5173"])
class TareaController(
    private val tareaService: TareaService
) {

    @GetMapping
    fun listar(): List<Tarea> {
        return tareaService.listar()
    }

    @GetMapping("/disponibles")
    fun listarDisponibles(): List<Tarea> {
        return tareaService.listarDisponibles()
    }

    @PostMapping
    fun guardar(@RequestBody tarea: Tarea): Tarea {
        return tareaService.guardar(tarea)
    }

    @DeleteMapping("/{id}")
    fun eliminar(@PathVariable id: Long) {
        tareaService.eliminar(id)
    }
}
