package com.lawmate.personalproject.reply.repository;

import com.lawmate.personalproject.reply.domain.ReplyModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReplyRepository extends JpaRepository<ReplyModel, Long>{
}
