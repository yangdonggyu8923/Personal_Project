package com.lawmate.personalproject.lawyer.repository;
import com.lawmate.personalproject.lawyer.domain.LawyerModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LawyerRepository extends JpaRepository<LawyerModel, Long>, LawyerDao {

    List<LawyerModel> findAllByOrderByIdDesc();

    Optional<LawyerModel> findByUsername(String username);

    @Modifying
    @Query("update lawyers set token=:token where id = :id")
    void modifyTokenById(@Param("id") Long id, @Param("token") String token);

    Boolean existsByUsername(String username);
    Boolean existsByName(String name);
}