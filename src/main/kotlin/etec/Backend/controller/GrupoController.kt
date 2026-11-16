package etec.Backend.controller

import etec.Backend.model.Grupo
import etec.Backend.service.GrupoService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/grupos")
@CrossOrigin(origins = ["http://localhost:5173"])
class GrupoController(
    private val grupoService: GrupoService
) {

    @GetMapping
    fun listar(): List<Grupo> {
        return grupoService.listar()
    }

    @GetMapping("/{id}")
    fun buscar(@PathVariable id: Long): Grupo {
        return grupoService.buscar(id)
    }

    @PostMapping
    fun guardar(@RequestBody grupo: Grupo): Grupo {
        return grupoService.guardar(grupo)
    }
}
