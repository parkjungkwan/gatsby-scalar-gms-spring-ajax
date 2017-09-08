package com.gms.web.auth;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import com.gms.web.complex.PathFactory;
@Controller
public class HomeController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@RequestMapping("/")
	public String home( Model model,HttpSession session) {
		logger.info("Welcome home! The client locale is {}.");
		model.addAttribute(
				"serverTime", 
				new SimpleDateFormat("yyyy년 MM월 dd일")
				.format(new Date()));
		session.setAttribute("path", PathFactory.create());
		return "public:common/home.tiles";
	}
	
}
