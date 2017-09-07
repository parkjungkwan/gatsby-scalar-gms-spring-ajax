package com.gms.web.proxy;

import org.springframework.stereotype.Component;

@Component
public class BlockHandler {
	
	public static int[] attr(PageProxy pxy){
		int[]result=new int[6];
		int theNumberOfPages=0,
				startPage=0,
				endPage=0;
		theNumberOfPages = (pxy.getTheNumberOfRows() % pxy.getPageSize()) == 0 ?
				pxy.getTheNumberOfRows() / pxy.getPageSize() 
					: pxy.getTheNumberOfRows() / pxy.getPageSize() + 1;
		startPage = pxy.getPageNumber() 
				- ((pxy.getPageNumber() - 1) % pxy.getBlockSize());
		endPage = (startPage + pxy.getBlockSize() - 1 <= theNumberOfPages) ?
				startPage + pxy.getBlockSize() - 1 : theNumberOfPages;
		result[0]=pxy.getPageNumber();
		result[1]=theNumberOfPages;
		result[2]=startPage;
		result[3]=endPage;
		result[4]=(startPage-(theNumberOfPages/pxy.getBlockSize())>0)
			?1:0; //prevBlock;
		result[5]=theNumberOfPages-startPage+(theNumberOfPages/pxy.getBlockSize()); 
				//nextBlock;
		System.out.println(
				"pageNumber is "+result[0]+",\n"+
				"theNumberOfPages is "+result[1]+",\n"+
				"startPage is "+result[2]+",\n"+
				"endPage is "+result[3]+",\n"+
				"prevBlock is "+result[4]+",\n"+
				"nextBlock is "+result[5]
			);
		return result;
	}
	
}
