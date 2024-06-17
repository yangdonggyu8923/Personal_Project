package com.lawmate.personalproject.lawyer.repository;

import com.lawmate.personalproject.lawyer.domain.LawyerDto;
import com.lawmate.personalproject.lawyer.domain.LawyerModel;
import com.lawmate.personalproject.lawyer.domain.QLawyerDto;
import com.lawmate.personalproject.lawyer.domain.QLawyerModel;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@RequiredArgsConstructor
@Repository
public class LawyerDaoImpl implements LawyerDao{
    private final QLawyerModel lawyer = QLawyerModel.lawyerModel;
    private final JPAQueryFactory jpaQueryFactory;


    @Override
    public void modifyLawyerTokenById(Long id, String token) {
        jpaQueryFactory.update(lawyer)
                .set(lawyer.token, token)
                .set(lawyer.law, lawyer.law)
                .set(lawyer.address, lawyer.address)
                .set(lawyer.password, lawyer.password)
                .where(lawyer.id.eq(id))
                .execute();
    }

    @Override
    public Long modifyLawyerById(LawyerDto dto) {
        return jpaQueryFactory.update(lawyer)
                .set(lawyer.law, dto.getLaw())
                .set(lawyer.address, dto.getAddress())
                .set(lawyer.password, dto.getPassword())
                .set(lawyer.phone, dto.getPhone())
                .set(lawyer.belong, dto.getBelong())
                .set(lawyer.startTime, dto.getStartTime())
                .set(lawyer.endTime, dto.getEndTime())
                .where(lawyer.id.eq(dto.getId()))
                .execute();
    }

    @Override
    public Long countAllLawyers() {
        return jpaQueryFactory.select(lawyer.count())
                .from(lawyer)
                .fetchFirst();
    }

    @Override
    public List<?> getLawyersByLawyerId() { // id 내림차순 정렬
        return jpaQueryFactory
                .select(lawyer.id)
                .from(lawyer)
                .orderBy(lawyer.id.desc())
                .fetch();
    }

    @Override
    public List<?> getLawyersByNameAsc() {
        return jpaQueryFactory
                .select(lawyer.name)
                .from(lawyer)
                .orderBy(lawyer.name.desc())
                .fetch();
    }

    @Override
    public List<LawyerModel> getCriminalLawyersByLaw() {
        return jpaQueryFactory.selectFrom(lawyer)
                .where(lawyer.law.contains("형사법"))
                .fetch();
    }

    @Override
    public List<LawyerModel> getPublicLawyersByLaw() {
        return jpaQueryFactory.selectFrom(lawyer)
                .where(lawyer.law.contains("공법"))
                .fetch();
    }

    @Override
    public List<LawyerModel> getInternationalLawyersByLaw() {
        return jpaQueryFactory.selectFrom(lawyer)
                .where(lawyer.law.contains("국제법"))
                .fetch();
    }

    @Override
    public List<LawyerModel> getTradeLawyersByLaw() {
        return jpaQueryFactory.selectFrom(lawyer)
                .where(lawyer.law.contains("국제거래법"))
                .fetch();
    }

    @Override
    public List<LawyerModel> getLaborLawyersByLaw() {
        return jpaQueryFactory.selectFrom(lawyer)
                .where(lawyer.law.contains("노동법"))
                .fetch();
    }

    @Override
    public List<LawyerModel> getTaxLawyersByLaw() {
        return jpaQueryFactory.selectFrom(lawyer)
                .where(lawyer.law.contains("조세법"))
                .fetch();
    }

    @Override
    public List<LawyerModel> getIPLawyersByLaw() {
        return jpaQueryFactory.selectFrom(lawyer)
                .where(lawyer.law.contains("지적재산권법"))
                .fetch();
    }

    @Override
    public List<LawyerModel> getCivilLawyersByLaw() {
        return jpaQueryFactory.selectFrom(lawyer)
                .where(lawyer.law.contains("민사법"))
                .fetch();
    }

    @Override
    public List<LawyerModel> getEconomyLawyersByLaw() {
        return jpaQueryFactory.selectFrom(lawyer)
                .where(lawyer.law.contains("경제법"))
                .fetch();
    }

    @Override
    public List<LawyerModel> getEnvironmentalLawyersByLaw() {
        return jpaQueryFactory.selectFrom(lawyer)
                .where(lawyer.law.contains("환경법"))
                .fetch();
    }
}
