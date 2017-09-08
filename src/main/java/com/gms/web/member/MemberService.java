package com.gms.web.member;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.gms.web.command.CommandDTO;
@Component
public interface MemberService {
	public String add(Map<String,Object> map);
	public List<?> list(CommandDTO cmd);
	public List<?> findByName(CommandDTO cmd);
	public StudentDTO findById(CommandDTO cmd);
	public String count();
	public String modify(MemberDTO bean);
	public String remove(CommandDTO cmd);
	public Map<String,Object> login(MemberDTO bean);
}
