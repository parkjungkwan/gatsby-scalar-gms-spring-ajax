<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
	<link rel="stylesheet" href="${path.css}/meta.css" />
	<link rel="stylesheet" href="${path.css}/common.css" />
	<link rel="stylesheet" href="${path.css}/member.css" />
	<script src="${path.js}/meta.js"></script>
</head>
<body>
<div class="center"><button data-toggle="modal" data-target="#squarespaceModal" class="btn btn-primary center-block">Launch Login Window</button></div>

<div class="modal fade alert" id="squarespaceModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">x</span><span class="sr-only">Close</span></button>
            <h3 class="modal-title" id="lineModalLabel">Modal Login Window</h3>
        </div>
        <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="user-email1" placeholder="Enter email">
              </div>
              
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="user-email2" placeholder="Enter Password">
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox"> Remember login
                </label>
              </div>
              <button type="submit" class="btn btn-primary center-block">Login</button>
            </form>
        </div>
    </div>
  </div>
</div>



</body>
</html>