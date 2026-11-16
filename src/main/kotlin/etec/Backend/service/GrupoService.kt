package etec.Backend.service

import etec.Backend.model.Grupo
import etec.Backend.repository.GrupoRepository
import org.springframework.stereotype.Service

@Service
class GrupoService(
    private val grupoRepository: GrupoRepository
) {

    fun listar(): List<Grupo> {
        return grupoRepository.findAll()
    }

    fun buscar(id: Long): Grupo {
        return grupoRepository.findById(id)
            .orElseThrow { RuntimeException("Grupo no encontrado") }
    }

    fun guardar(grupo: Grupo): Grupo {
        return grupoRepository.save(grupo)
    }

    fun eliminar(id: Long) {
        grupoRepository.deleteById(id)
    }
}
