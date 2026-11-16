package etec.Backend.repository

import etec.Backend.model.Grupo
import org.springframework.data.jpa.repository.JpaRepository

interface GrupoRepository :
    JpaRepository<Grupo, Long>
