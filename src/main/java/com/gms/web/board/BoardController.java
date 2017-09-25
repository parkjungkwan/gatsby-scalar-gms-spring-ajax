package com.gms.web.board;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.command.Command;
import com.gms.web.command.CommandDTO;
import com.gms.web.command.ResultMap;
import com.gms.web.grade.GradeController;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.service.IGetService;
import com.gms.web.service.IListService;
import com.gms.web.service.IPostService;

@RestController
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	@Autowired BoardMapper boardMapper;
	@Autowired GradeMapper gradeMapper;
	@Autowired Command cmd;
	
	public @ResponseBody Map<?,?> post(){
		return null;
	}
	@RequestMapping("/list/{cate}")
	public @ResponseBody Map<?,?> list(@PathVariable String cate) {
		logger.info("board ContList{} ","진입");
		Map<String,Object> map=new HashMap<>();
		System.out.println("board/list 에 들어옴 !!");
		IListService listService=null;
		IGetService countService=null;
		System.out.println("CASE 이전 ::"+cate);
		switch (cate) {
		case "articles":
			cmd=null;
			listService=(x)-> {
				return boardMapper.selectList(cmd);
			};
			countService=(x)->{
				return boardMapper.count(cmd);
			};
			ResultMap r=(ResultMap) countService.execute(cmd);
			map.put("result", "success");
			System.out.println("!###카운트"+r.getCount());
			map.put("total", r);
			map.put("list", listService.execute(cmd));
			break;
		case "grade":
			cmd=null;
			listService=(x)-> {
				return gradeMapper.selectSome(cmd);
			};
			
			map.put("list", listService.execute(cmd));
			break;

		default:
			break;
		}
		
		
		return map;
	}
	@RequestMapping("/get/{cate}/{id}")
	public @ResponseBody Map<?,?> get(
			@PathVariable String cate,
			@PathVariable String id){
			System.out.println("넘어온 ID: "+id);
			Map<String,Object> map=new HashMap<>();	
		
		return map;
	}
	public @ResponseBody Map<?,?> put(){
		return null;
	}
	public @ResponseBody Map<?,?> delete(){
		return null;
	}
	

}



















