package etec.Backend.service

import etec.Backend.model.Profesor
import etec.Backend.repository.ProfesorRepository
import org.springframework.stereotype.Service

@Service
class ProfesorService(
    private val profesorRepository: ProfesorRepository
) {

    fun listar(): List<Profesor> {
        return profesorRepository.findAll()
    }

    fun buscar(id: Long): Profesor {
        return profesorRepository.findById(id)
            .orElseThrow { RuntimeException("Profesor no encontrado") }
    }

    fun guardar(profesor: Profesor): Profesor {
        return profesorRepository.save(profesor)
    }

    fun eliminar(id: Long) {
        profesorRepository.deleteById(id)
    }
}
