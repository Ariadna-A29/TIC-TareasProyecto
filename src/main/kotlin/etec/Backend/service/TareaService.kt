package etec.Backend.service

import etec.Backend.model.Tarea
import etec.Backend.repository.TareaRepository
import org.springframework.stereotype.Service

@Service
class TareaService(
    private val tareaRepository: TareaRepository
) {

    fun listar(): List<Tarea> {
        return tareaRepository.findAll()
    }

    fun listarDisponibles(): List<Tarea> {
        return tareaRepository.findByDisponibleTrue()
    }

    fun guardar(tarea: Tarea): Tarea {
        return tareaRepository.save(tarea)
    }

    fun eliminar(id: Long) {
        tareaRepository.deleteById(id)
    }
}
