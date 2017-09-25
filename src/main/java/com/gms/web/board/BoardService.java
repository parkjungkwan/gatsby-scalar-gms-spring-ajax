package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Component;
@Component
public interface BoardService {
	public void post(Object o);
	public List<?> list(Object o);
	public Object get(Object o);
	public void put(Object o);
	public void delete(Object o);
}
