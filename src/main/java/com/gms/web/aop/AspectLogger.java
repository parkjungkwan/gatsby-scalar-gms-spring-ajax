package com.gms.web.aop;

import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
@Aspect
public class AspectLogger {
	private static final Logger logger = LoggerFactory.getLogger(AspectLogger.class);

	static String name = "";
    static String type = "";
    
    @Pointcut("execution(* com.gms.web.*Controller.*(..)) ")
    public void target() {
        
    }
    @Before("target()")
	public void takeSeats() {
		System.out.println("The audience is taking their seats.");
	}




}
