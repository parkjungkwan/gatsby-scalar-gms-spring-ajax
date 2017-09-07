/**
Member javaScript
*/
var app=app || {};

app.path=(function(){
	var init=function(ctx){
		app.session.init(ctx);
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		location.href=ctx()+"/auth/login_view";
	};
	var setContentView=function(){
		
	};
	var ctx=function(){
		return app.session.getPath('ctx');
	};
	var js=function(){
		return app.session.getPath('js');
	};
	var img=function(){
		return app.session.getPath('img');
	};
	var css=function(){
		return app.session.getPath('css');
	};
	return {
		init : init,
		ctx : ctx,
		js : js,
		img : img,
		css : css
	};
})();
app.session=(function(){
	var init=function(ctx){
		sessionStorage.setItem('ctx',ctx);
		sessionStorage.setItem('js',ctx+'/resources/js');
		sessionStorage.setItem('img',ctx+'/resources/img');
		sessionStorage.setItem('css',ctx+'/resources/css');
	};
	var getPath=function(x){
		return sessionStorage.getItem(x);
	};
	return {
		init : init,
		getPath : getPath
	}
})();
app.main=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$('.list-group li').eq(0).on('click',function(){
			controller.moveTo('member','member_add');
		});
		$('.list-group li').eq(1).on('click',function(){
			controller.list('member','member_list','1');
		});
		$('.list-group li').eq(2).on('click',function(){
			controller.detailStudent(prompt('조회 ID'));
		});
		$('.list-group li').eq(3).on('click',function(){
			controller.moveTo('member','member_add');
		});
	};
	var setContentView=function(){
		var $u1=$("#main_ul_stu");
		var $u2=$("#main_ul_grade");
		var $u3=$("#main_ul_board");
		$u1.addClass("list-group");
		$u2.addClass("list-group");
		$u3.addClass("list-group");
		$('.list-group').children().addClass("list-group-item");
	};
	return {
		init:init
	};
})();
app.auth=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$('#loginBtn').on('click',function(){
			if($('#input_id').val()===""){
				alert('ID 를 입력해 주세요');
				return false;
			}
			if($('#input_pass').val()===""){
				alert('PASS 를 입력해 주세요');
				return false;
			}
			$('#login_box').attr('action',app.path.ctx()+"/auth/login");
			$('#login_box').attr('method','post');
			return true;
		});
	};
	var setContentView=function(){};
	return {
		init : init
	};
})();
app.navbar=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$('.dropdown-menu a').eq( 0 ).on('click',function(){
			controller.moveTo('member','member_add');
		});
		$('.dropdown-menu a').eq( 1 ).on('click',function(){
		});
	};
	var setContentView=function(){
		var $u1=$("#navbar_ul_stu");
		var $u2=$("#navbar_ul_grade");
		var $u3=$("#navbar_ul_board");
		$u1.addClass("dropdown-menu");
		$u2.addClass("dropdown-menu");
		$u3.addClass("dropdown-menu");
		
	
		
	};
	return {init:init};
})();
app.member=(function(){
	var init=function(){
		onCreate();
		
	};
	var onCreate=function(){
		setContentView();
		$('#updateBtn').on('click',function(){
		//	id,phone,email,title;
			sessionStorage.setItem('id',$('#detail_id').text());
			sessionStorage.setItem('phone',$('#detail_phone').text());
			sessionStorage.setItem('email',$('#detail_email').text());
			sessionStorage.setItem('title',$('#detail_title').text());
			controller.moveTo('member','member_update');
		});
		
	};
	var setContentView=function(){
		
	};
	
	return {
		init : init
	};
})();
app.grade=(function(){
	var init=function(){};
	var onCreate=function(){};
	var setContentView=function(){};
	return {
		init : init
	};
})();
app.board=(function(){
	var init=function(){};
	var onCreate=function(){};
	var setContentView=function(){};
	return {
		init : init
	};
})();

app.controller=(function(){
	var init=function(){
		
	};
	var moveTo=function(dir,page){
		location.href=
			app.ctx()+'/'+dir+".do?action=move&page="+page;
	};
	var logout=function (dir,page){
		location.href="${ctx}/"+dir+".do?action=logout&page="+page;
	};
	
	var deleteTarget=function (target){
		prompt(target+'의 ID?');
	};
	var list=function (dir,page,pageNumber){
		location.href=app.ctx()+"/"+dir+".do?action=list&page="+page
					+"&pageNumber="+pageNumber;
	};
	var updateStudent=function (id,email){
		alert('수정할 id'+id);
		location.href=app.ctx()+"/member.do?action=update&page=member_update&id="
			+id+"&email="+email;
	}
	var deleteStudent=function (id){
		alert('삭제할 id'+id);
		location.href=app.ctx()+"/member.do?action=delete&page=member_list&id="+id;
	}
	var detailStudent=function (x){
		location.href=
			app.ctx()+"/member.do?action=detail&page=member_detail&id="
				+x;
	}
	var searchStudent=function (){
		var search=document.getElementById('search').value;
		location.href=app.ctx()+"/member.do?action=search&page=member_list&search="+search;
	}
	
	return {
		init : init,
		moveTo : moveTo,
		logout : logout,
		deleteTarget : deleteTarget,
		list : list,
		updateStudent : updateStudent,
		deleteStudent : deleteStudent,
		detailStudent : detailStudent,
		searchStudent : searchStudent
	};
})();













