package com.gms.web.grade;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Lazy @Component
public class GradeDTO {
	private String gradeSeq,
	score,
	examDate,
	subjId,
	id;

}
