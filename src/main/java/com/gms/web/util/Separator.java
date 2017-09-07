package com.gms.web.util;

import javax.servlet.http.HttpServletRequest;

import com.gms.web.command.CommandDTO;
import com.gms.web.complex.CommandFactory;


public class Separator {
	public static CommandDTO cmd=new CommandDTO();
	public static void init(HttpServletRequest request){
		String servletPath=request.getServletPath();
		cmd=CommandFactory.createCommand(
				servletPath.substring(1,servletPath.indexOf(".")), 
				request.getParameter("action"), 
				request.getParameter("page"),
				request.getParameter("pageNumber"),
				request.getParameter("column"),
				request.getParameter("search"));
	}
}
