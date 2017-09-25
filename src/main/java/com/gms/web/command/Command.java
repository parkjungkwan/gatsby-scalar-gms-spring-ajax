package com.gms.web.command;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.gms.web.constant.*;
import com.gms.web.member.MemberDTO;

import lombok.Data;
@Data @Lazy @Component
public class Command implements Commandable{
	protected String action,pageNumber,
		view,column,search, dir,startRow,endRow,
		page;
	protected MemberDTO member;
	
	public void setPageNumber(String pageNumber){
		this.pageNumber = 
				(pageNumber==null)?
						"1":pageNumber;
		System.out.println("페이지번호: "+this.pageNumber);
	}
	public void setAction(String action) {
		this.action = 
				(action==null)?
						"move":action;
		System.out.println("액션: "+this.action);
	}
	public void setColumn(String column) {
		this.column = 
				(column==null)?
						"none":column;
		System.out.println("컬럼: "+this.column);
	}
	public void setSearch(String search) {
		this.search = (search==null)?
				"none":search;
		System.out.println("검색어: "+this.search);
	}
	
	@Override
	public void process() {
		this.view=
				(dir.equals("home"))?
						"/WEB-INF/view/common/home.jsp":
				Path.VIEW+dir+Path.SEPARATOR+page+Extension.JSP;
		System.out.println("이동 페이지: "+view);
	}
	@Override
	public String toString() {
		return "Command [DEST="+dir+"/"
				+page+".jsp"+ ",ACTION="+action+"]";
	}
}










