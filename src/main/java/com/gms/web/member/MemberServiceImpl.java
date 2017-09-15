package com.gms.web.member;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.grade.SubjectDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.mapper.MemberMapper;
@Service
public class MemberServiceImpl implements MemberService{
	private static final Logger logger = LoggerFactory.getLogger(MemberServiceImpl.class);
	@Autowired MemberMapper mapper;
	@Autowired MajorDTO major;
	@Autowired GradeMapper gMapper;
	@Autowired CommandDTO cmd;
	@Autowired MemberDTO member;
	
	@Override @Transactional
	public int add(Map<?,?>map) {
		logger.info("@service add {}"," entered");
		System.out.println("member service 진입");
		member=(MemberDTO) map.get("member");
		@SuppressWarnings("unchecked")
		List<MajorDTO> list=(List<MajorDTO>)map.get("list");
		System.out.println("ID ######"+member.getId());
		System.out.println("LIST ######"+list);
		mapper.insert(member);
		gMapper.insertMajor(list);
		int rs=0;
		
		return rs;
	}
	@Override
	public List<?> list(CommandDTO cmd) {
		return mapper.selectAll(cmd);
	}
	@Override
	public List<?> findByName(CommandDTO cmd) {
		System.out.println("findByName("+cmd.getSearch()+")");
		return null;
	}

	@Override
	public StudentDTO findById(CommandDTO cmd) {
		return mapper.selectById(cmd);
	}

	@Override
	public String count() {
		logger.info("@service: count is {}","entered");
		String count =mapper.count();
		logger.info("@service: count is {}",count);
		return count;
	}

	@Override
	public int modify(MemberDTO bean) {		
		
		return mapper.update(bean);
	}

	@Override
	public int remove(CommandDTO cmd) {
		
		
		return mapper.delete(cmd);
	}
	@Override
	public Map<String,Object> login(CommandDTO bean) {
		Map<String,Object> map=new HashMap<>();
		member=mapper.login(cmd);
		String page="",message;
		if(member!=null) {
			if(cmd.getColumn().equals(member.getPassword())) {
				message="success";
				page="auth:common/main.tiles";
			}else {
				message="비밀번호가 틀립니다";
				page="public:common/login.tiles";
			}
		}else {
			message="ID가 존재하지 않습니다";
			page="public:common/join.tiles";
		}
		map.put("message", message);
		map.put("page", page);
		map.put("user", member);
		return map;
		
	}
}











