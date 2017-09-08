<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<header>
</header>
<div id="container">
<div class="row">
  <div class="col-lg-6" style="width: 500px;margin: 0 auto;">
    <div class="input-group">
      <input type="text" id="search" name="search" class="form-control" placeholder="Search for...">
      <span class="input-group-btn">
        <button onclick="searchStudent()" class="btn btn-default" type="button">Go!</button>
      </span>
    </div><!-- /input-group -->
  </div><!-- /.col-lg-6 -->
</div><!-- /.row -->
<div style="height: 40px;width:300px;"></div>
	<table id="member_list_tab">
		<tr>
			<th>No.</th>
			<th>ID</th>
			<th>이름</th>
			<th>생년월일</th>
			<th>전화번호</th>
			<th>이메일</th>
			<th>수강과목</th>
			<th>등록일</th>
			<th>수정/삭제</th>
		</tr>
		<c:forEach var="i" items="${requestScope.list}">
		<tr>
			<td>${i.num}</td>
			<td>${i.id}</td>
			<td><a onclick="controller.detailStudent('${i.id}')">${i.name}</a></td>
			<td>${i.ssn}</td>
			<td>${i.phone}</td>
			<td>${i.email}</td>
			<td>${i.subjects}</td>
			<td>${i.regdate}</td>
			<td>
			<a onclick="updateStudent('${i.id}')">수정</a>
			/
			<a onclick="deleteStudent('${i.id}')">삭제</a>
			</td>
			
		</tr>
		</c:forEach>
	</table>
	<nav aria-label="Page navigation" style="width:400px;margin: 0 auto;">
	  <ul class="pagination">
	  	<c:if test="${requestScope.prevBlock gt 0 }">
	    <li>
	    	<a onclick="list('member', 'member_list', '1')">
	    		<span class="glyphicon glyphicon-step-backward" aria-hidden="true"></span>
	    	</a>
	    </li>
	    <li>
	      <a onclick="list('member', 'member_list', '${requestScope.prevBlock}')" aria-label="Previous">
	        <span aria-hidden="true">&laquo;</span>
	      </a>
	    </li>
	    </c:if>
	    <c:forEach varStatus="i" begin="${requestScope.startPage}" 
	    							end="${requestScope.endPage}" step="1">
	    	<c:choose>
	    		<c:when test="${i.index eq requestScope.pageNumber}">
	    			<li class="active"><a href="#">${i.index}</a></li>
	    		</c:when>
	    		<c:otherwise>
	    			<li ><a href="#" onclick="list('member','member_list','${i.index}')">
	    				${i.index}</a></li>
	    		</c:otherwise>
	    	</c:choose>
	    </c:forEach>
	    <c:if test="${requestScope.nextBlock le requestScope.theNumberOfPages}">
	    	<li>
		      	<a onclick="list('member', 'member_list', '${requestScope.endPage+1}')"  aria-label="Next">
		        	<span aria-hidden="true">&raquo;</span>
		      	</a>
		    </li>
	    	<li>	
	    		<a onclick="list('member', 'member_list', '${requestScope.theNumberOfPages}')" >
	    			<span class="glyphicon glyphicon-step-forward" aria-hidden="true"></span>
	    		</a>
	    	</li>
	    </c:if>
	  </ul>
	</nav>
</div>









