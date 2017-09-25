package com.gms.web.command;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class ResultMap {
	private String seq,memberId,title,
		content,regdate,hitcount,
		email,profile,birthday,
		gender,count;

}
