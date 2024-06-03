package com.lawmate.personalproject.admin.repository;

import com.lawmate.personalproject.admin.domain.AdminModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<AdminModel, Long> {
}
