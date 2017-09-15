package com.gms.web.board;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.grade.GradeController;
@Controller
@RequestMapping("/board")
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	
	@RequestMapping("/board_delete")
	public String boardDelete() {
		logger.info("board ContList{} ","진입");
		return "auth:board/board_list.tiles";
	}
}
