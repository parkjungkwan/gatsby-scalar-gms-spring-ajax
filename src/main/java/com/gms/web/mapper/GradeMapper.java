package com.gms.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;
import com.gms.web.grade.MajorDTO;

@Repository
public interface GradeMapper {
	public int insertMajor(List<?>map);
}
