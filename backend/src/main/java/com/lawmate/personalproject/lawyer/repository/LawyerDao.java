package com.lawmate.personalproject.lawyer.repository;

import com.lawmate.personalproject.lawyer.domain.LawyerDto;
import com.lawmate.personalproject.lawyer.domain.LawyerModel;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LawyerDao {
    void modifyLawyerTokenById(Long id, String token);
    Long modifyLawyerById(LawyerDto dto);
    Long countAllLawyers();
    List<?> getLawyersByLawyerId();
    List<?> getLawyersByNameAsc();
    List<?> getCriminalLawyersByLaw();
    List<?> getPublicLawyersByLaw();
    List<?> getInternationalLawyersByLaw();
    List<?> getTradeLawyersByLaw();
    List<?> getLaborLawyersByLaw();
    List<?> getTaxLawyersByLaw();
    List<?> getIPLawyersByLaw();
    List<?> getCivilLawyersByLaw();
    List<?> getEconomyLawyersByLaw();
    List<?> getEnvironmentalLawyersByLaw();



}
