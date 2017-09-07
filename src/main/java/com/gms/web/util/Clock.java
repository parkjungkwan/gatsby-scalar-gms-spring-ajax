package com.gms.web.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Clock {
	public String getNow(){
		return new SimpleDateFormat("yyyy?ÖÑMM?õîdd?ùº a hh:mm:ss").format(new Date());
	} 

}
