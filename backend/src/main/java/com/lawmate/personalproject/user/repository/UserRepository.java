package com.lawmate.personalproject.user.repository;

import com.lawmate.personalproject.user.domain.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {

    List<UserModel> findAllByOrderByUserIdDesc();
    Optional<UserModel> findByUsername(String username);
    Optional<UserModel> findByName(String name);
    Boolean existsByUsername(String username);

//    @Modifying
//    @Query("update users set token=:token where userId = :id")
//    void modifyTokenById(@Param("id") Long id, @Param("token") String token);

    @Query("SELECT a FROM users a ORDER BY a.userId DESC")
    List<UserModel> getUsersById();
}
