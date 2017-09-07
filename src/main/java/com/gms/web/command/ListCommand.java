package com.gms.web.command;

import org.springframework.stereotype.Component;


public class ListCommand extends CommandDTO {
	public ListCommand(String dir,
			String action,
			String page,
			String pageNumber) {
		setDir(dir);
		setAction(action);
		setPage(page);
		setPageNumber(pageNumber);
		process();
	}
}
