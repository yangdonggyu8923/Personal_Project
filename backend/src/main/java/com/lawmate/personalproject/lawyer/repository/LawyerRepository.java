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
public interface LawyerRepository extends JpaRepository<LawyerModel, Long> {

    List<LawyerModel> findAllByOrderByIdDesc();

    Optional<LawyerModel> findByUsername(String username);

    @Modifying
    @Query("update lawyers set token=:token where id = :id")
    void modifyTokenById(@Param("id") Long id, @Param("token") String token);

    Boolean existsByUsername(String username);
    Boolean existsByName(String name);


    @Query("SELECT a FROM lawyers a ORDER BY a.id DESC")
    List<LawyerModel> getLawyersById();
    @Query("select a from lawyers a order by a.name asc")
    List<LawyerModel> getLawyersByNameAsc();
    @Query("select a from lawyers a where a.law like '%형사법%'")
    List<LawyerModel> getLawyersByLaw형사법();

    @Query("select a from lawyers a where a.law like '%건설%'")
    List<LawyerModel> getLawyersByLaw건설();

    @Query("select a from lawyers a where a.law like '%부동산%'")
    List<LawyerModel> getLawyersByLaw부동산();

    @Query("select a from lawyers a where a.law like '%민사법%'")
    List<LawyerModel> getLawyersByLaw민사법();

    @Query("select a from lawyers a where a.law like '%손해배상%'")
    List<LawyerModel> getLawyersByLaw손해배상();

    @Query("select a from lawyers a where a.law like '%가사법%'")
    List<LawyerModel> getLawyersByLaw가사법();
}