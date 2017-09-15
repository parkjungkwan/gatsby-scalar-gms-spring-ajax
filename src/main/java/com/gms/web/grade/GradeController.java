package com.gms.web.grade;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.member.MemberController;
@Controller
@RequestMapping("/grade")
public class GradeController {
	private static final Logger logger = LoggerFactory.getLogger(GradeController.class);
	
	@RequestMapping("/grade_delete")
	public String gradeDelete() {
		logger.info("gradeDelete{}","진입");
		return "auth:grade/grade_list.tiles";
	}
}
