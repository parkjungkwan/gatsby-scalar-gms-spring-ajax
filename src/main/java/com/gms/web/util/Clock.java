package com.gms.web.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Clock {
	public String getNow(){
		return new SimpleDateFormat("yyyy???년 MM?월 dd?일 a hh:mm:ss").format(new Date());
	} 

}
