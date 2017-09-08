package com.gms.web.member;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.auth.AuthController;

@Controller
@RequestMapping("/member")
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@RequestMapping("/member_add")
	public String memberAdd() {
		logger.info("memberController{}","진입");
		return "auth:member/member_add.tiles";
	}
	@RequestMapping("/member_list")
	public String memberList() {
		logger.info("memberList{}","진입");
		return "auth:member/member_list.tiles";
	}
	@RequestMapping("/member_detail")
	public String memberDetail() {
		logger.info("memberDetail{}","진입");
		return "auth:member/member_detail.tiles";
	}
	@RequestMapping("/member_delete")
	public String memberDelete() {
		logger.info("memberdelete{}","진입");
		return "auth:member/member_list.tiles";
	}
}
