<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>학생관리</title>
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/member.css" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>
<div id="wrapper">
<header>
<h1 id="title">비밀번호가 틀립니다</h1>
<a id="go_main" href="<%=request.getContextPath()%>/index.jsp">메인으로 가기</a><br />
</header>
<div id="container">
	<form id="login_box" action="<%=request.getContextPath()%>/common.do" method="get">
		<img src="<%=request.getContextPath()%>/img/login.jpg" alt="" /><br />
		<span id="login_id">ID</span>
		<input type="text" name="id" value="hong"/> <br />
		<span id="login_pass">PASSWORD</span> 
		<input type="text" name="pass" value="2"/> <br /><br />
		<input type="submit" value="LOGIN" />
		<input type="reset" value="CANCEL" />
		<input type="hidden" name="action" value="login" />
		<input type="hidden" name="page" value="main" />
		<input type="reset" value="CANCEL" />
	</form>
</div>
<footer>
	<div>
	 	<p>Posted by: Hanbit</p>
  		<p>Contact information: <a href="mailto:someone@example.com">
  		someone@hanbit.com</a>.</p>
  		<a href="util/jdbc_test.jsp">DB 연결테스트</a>
	</div>
</footer>
</div>
</body>
</html>