<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<meta http-equiv="Content-Type" content="text/html; charset=utl-8;" pageEncoding="utf-8" />
<title>GMS</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="${path.css}/common.css" />
	<link rel="stylesheet" href="${path.css}/member.css" />
	<script src="${path.js}/app.js"></script>
</head>
<body>
	<header>
		<div id="header">
			<tiles:insertAttribute name="header" /> 	
		</div>
	</header>
	<section>
		<article id="content">
			<tiles:insertAttribute name="content" /> 
		</article>
	</section>
	<footer>
		 <div id="footer">
		 	<tiles:insertAttribute name="footer" /> 
		 </div>
	</footer>
</body>
</html>