<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="container" style="margin-top:100px">
	<form id="login_box" name="login_box" > 
		<img src="${ctx}/resources/img/login.jpg" alt="" /><br />
		<span id="login_id">ID</span>
		<input type="text" id="input_id" name="id" value="hong"/> <br />
		<span id="login_pass">PASSWORD</span> 
		<input type="text" id="input_pass" name="pass" value="1"/> <br /><br />
		<input id="loginBtn" type="submit" value="LOGIN"/>
		<input type="hidden" name="action" value="login" />
		<input type="hidden" name="page" value="main" />
		<input type="reset" value="CANCEL" />
	</form>
	<div style="text-align: center;width: 100%;height: 50px">
		<h4 style="font-size: 20px;color: red;">${message}</h4>
	</div>
</div>
<script>
 app.auth.init(); 
</script>
</body>
</html>










