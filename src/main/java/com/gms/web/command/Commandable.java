package com.gms.web.command;

import org.springframework.stereotype.Component;

@Component
public interface Commandable {
	public void process();
}
