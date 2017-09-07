package com.gms.web.proxy;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Component;
@Component
public abstract class Proxy {
	HttpServletRequest request;
	public Proxy(HttpServletRequest request) {
		this.request=request;
	}
}
