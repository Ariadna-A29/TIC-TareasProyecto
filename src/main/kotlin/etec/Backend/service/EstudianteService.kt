package etec.Backend.service

import etec.Backend.model.Estudiante
import etec.Backend.repository.EstudianteRepository
import org.springframework.stereotype.Service

@Service
class EstudianteService(
    private val estudianteRepository: EstudianteRepository
) {

    fun guardar(estudiante: Estudiante): Estudiante {
        return estudianteRepository.save(estudiante)
    }

    fun listar(): List<Estudiante> {
        return estudianteRepository.findAll()
    }

    fun buscar(id: Long): Estudiante {
        return estudianteRepository.findById(id).orElseThrow {
            RuntimeException("Estudiante no encontrado")
        }
    }

    fun eliminar(id: Long) {
        estudianteRepository.deleteById(id)
    }
}
