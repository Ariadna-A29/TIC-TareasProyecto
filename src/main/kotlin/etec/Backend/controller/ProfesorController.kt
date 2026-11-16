package etec.Backend.controller

import etec.Backend.model.Profesor
import etec.Backend.service.ProfesorService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/profesores")
@CrossOrigin(origins = ["http://localhost:5173"])
class ProfesorController(
    private val profesorService: ProfesorService
) {

    @GetMapping
    fun listar(): List<Profesor> {
        return profesorService.listar()
    }

    @PostMapping
    fun guardar(@RequestBody profesor: Profesor): Profesor {
        return profesorService.guardar(profesor)
    }
}
