package com.hsuliz.backend.repository

import com.hsuliz.backend.entity.Client
import org.springframework.data.jpa.repository.JpaRepository

interface TestH2Repository : JpaRepository<Client, Long>