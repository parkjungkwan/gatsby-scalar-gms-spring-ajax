package com.gms.web.service;

import org.springframework.stereotype.Service;

@Service
@FunctionalInterface
public interface IDeleteService {
	public void execute(Object o);
}
