var meta=meta || {};
meta.common=(()=>{
	var init=(ctx)=>{
		onCreate();
		meta.session.init(ctx);
		meta.index.init();
	};
	var onCreate=()=>{
		setContentView();
	};
	var setContentView=()=>{};
	return { init:init };
})();
meta.index=(()=>{
	var $wrapper,$navbar,$container,ctx,img,js,css,
		temp,algo,json;
	var init=()=>{
			js=$$('j');
			temp=js+'/template.js';
			algo=js+'/algo.js';
			$navbar=$('#navbar');
			$container=$('#container');
			img=$$('i');
			ctx=$$('x');
			json=$$('x')+'/resources/json';
			onCreate();
		};
	var onCreate=()=>{
		$.getScript(temp,()=>{
			compUI.div('content')
				.css({'width':'100%','margin': '0 auto'})
				.appendTo($container);
			$content=$('#content');
			compUI.image('loading',img+'/loading.gif')
				.appendTo($content);
			compUI.h1('h_btn')
				.attr('display','inline')
				.appendTo($content);
			$hBtn=$('#h_btn');
			compUI.span('algo_btn')
					.html('알고리즘')
					.addClass('label label-default')
					.appendTo($hBtn)
					.click(()=>{
						$container.empty();
						meta.navbar.init();
						compUI.div('content')
							.css({'width':'30%','margin': '0 auto'})
							.appendTo($container);
						$content=$('#content');
						compUI.span('start_lbl')
							.css({'width':'100px'})
							.html('시 작')
							.appendTo($content);
						compUI.iTxt('start_val')
							.appendTo($content);
						compUI.br()
							.appendTo($content);
						compUI.span('end_lbl')
							.css({'width':'100px'})
							.html('끝')
							.appendTo($content);
						compUI.iTxt('end_val')
							.appendTo($content);
						compUI.h1('h_btn')
							.attr('display','inline')
							.appendTo($content);
						$hBtn=$('#h_btn');
						compUI.span('resBtn')
								.html('결과보기')
								.addClass('label label-warning')
								.appendTo($hBtn)	
						;
						return $('#content');
					});
			compUI.span('member_btn')
					.html('회원관리')
					.addClass('label label-primary')
					.css({'margin-left':'10px'})
					.appendTo($hBtn)
					.click(()=>{
					});
			compUI.span('bbsBtn')
					.html('게시판관리')
					.addClass('label label-danger')
					.css({'margin-left':'10px'})
					.appendTo($hBtn)
					.click(()=>{
						$.getJSON(ctx+'/list/articles',data=>{
							 $content.html(bbsUI.search());
							var tbl=bbsUI.tbl(json+'/bbs_colums.json');
							var tr='';
						   $.each(data.list,(i,j)=>{
							   tr+= 	'<tr style="height: 25px;">'
									+'<td>'+j.articleSeq+'</td>'
									+'<td><a onclick="meta.board.detail('+j.articleSeq+')">'+j.title+'</a></td>'
									+'<td>'+j.content+'</td>'
									+'<td>'+j.id+'</td>'
									+'<td>'+j.regdate+'</td>'
									+'<td>'+j.hitcount+'</td>'
									+'</tr>';
						   });
						   $content.append(tbl);
						   $content.append(bbsUI.pagination());
						   $('#tbody').html(tr);
						   $('#total').text('총게시글 수:'+data.total.count);
						   $('#writeBtn').click(e=>{
							   meta.board.write();
						   });
						});
					});
			});
		};
	return {init:init};
})();
meta.board=(()=>{
	var $wrapper,ctx,img,js,css,temp;
	var init=function(){
		$wrapper=$('#wrapper');
		img=$$('i');
		js=$$('j');
		ctx=$$('x');
		temp=js+'/template.js';
	};
	var detail=x=>{
		init();
		alert('선택한 시퀀스'+x);
		$.getJSON(ctx+'/get/articles/'+x,d=>{
			$.getScript(temp,()=>{
				var $container=$('#container');
				$container.empty();
				compUI.div('content')
					.appendTo($container);
				$content=$('#content');
				$content.html(bbsUI.detail());
				$('#legend').html('게시글 보기');
				
			$hBtn=$('#h_btn');
				$('#confirmBtn').html('수정하기')
				.click(e=>{
					e.preventDefault();
					update(x);
				});
				$('#cancelBtn')
					.attr('data-toggle','modal')
					.attr('data-target','#squarespaceModal')
					.addClass('btn btn-primary ')
					.html('삭제하기');
				
					$('#cancelBtn').click(e=>{
						e.preventDefault();
						deleteArticle(x+','+pass);
				});
				;
			});
		});
		
	};
	var update = x=>{
		alert('수정 클릭 x is '+x);
		$.getJSON(ctx+'/get/articles/'+x,d=>{
			$.getScript(temp,()=>{
				var $container=$('#container');
				$container.empty();
				compUI.div('content')
					.appendTo($container);
				$content=$('#content');
				$content.html(bbsUI.detail());
				$('#legend').html('게시글 수정하기');
				$('#confirmBtn').html('수정하기 ')
				.click(e=>{
					e.preventDefault();
					
				});
				$('#cancelBtn').html('취소하기').attr('type','reset');
			});
		});
	};
	var deleteArticle=x=>{
		alert('삭제 클릭 ID'+x);
	};
	var write = ()=>{
		init();
		$.getScript(temp,()=>{
			var $container=$('#container');
			$container.empty();
			compUI.div('content')
				.appendTo($container);
			$content=$('#content');
			$content.html(bbsUI.detail());
		});
	};
	return {detail : detail,write : write};
})();
meta.auth=(function(){
	var $wrapper,ctx,img,js,css,temp;
	var init=function(){
		onCreate();
		$wrapper=$('#wrapper');
		img=$$('i');
		js=$$('j');
		temp=js+'/template.js';
	};
	var onCreate=function(){setContentView();};
	var setContentView=function(){
		$.getScript(temp,(i)=>{
			$wrapper.append(intro.login(img));
			$('#login_input').after(meta.comp.input(
					{
						type : 'button',
						id : 'login_btn',
						value : '로그인'
					}
				));
				$('#login_box').append(meta.comp.input(
					{
						type : 'button',
						id : 'cancel_btn',
						value : '취소'
					}
				));
		});
		
	};
	var joinView=function(){};
	return {
		init : init
	};
})();
meta.navbar=(function(){
	var algo,js,temp,$container;
	var init=function(){
		js=$$('j');
		$container=$('#container');
		algo=js+'/algo.js';
		temp=js+'/template.js';
		onCreate();
	};
	var onCreate=function(){
		$.getScript(temp,function(){
			$('#navbar').html(introUI.navbar());
			compUI.div('content')
				.appendTo($container);
			$content=$('#content');
			
			/*.css({'width':'40%','margin':'0 auto'});*/
			$('#start_txt').after(compUI.iTxt('start'));
			$('#start').attr('placeholder','시작값');
			$('#end_txt').after(compUI.iTxt('end'));
			$('#end').attr('placeholder','끝값');
			$('#result').before(compUI.iBtn('resultBtn'));
			$('#resultBtn')
				.val('결과보기')
				.addClass('');
			
			$('#resultBtn').click(()=>{
				$.getScript(algo,(x1,x2)=>{
					$('#result').text('결과 : '+
							series.arithmetic(
									$('#start').val(),
									$('#end').val()
							));
				});
			});
			$('.dropdown-menu a').eq(0).on('click',function(){
				alert('aaa');
				//app.controller.moveTo('member','member_add');
			});
			$('.dropdown-menu a').eq(1).on('click',function(){
				//app.member.list(1);
			});
			$('.dropdown-menu a').eq(2).on('click',function(){
				//app.controller.moveTo('member','member_detail');
			});
			$('.dropdown-menu a').eq(3).on('click',function(){
				//app.controller.deleteTarget('hong','member','member_delete');
			});
			$('.dropdown-menu a').eq(4).on('click',function(){
				//app.controller.moveTo('grade','grade_add');
			});
			$('.dropdown-menu a').eq(5).on('click',function(){
				//app.controller.moveTo('hong','grade','grade_list');
			});
			$('.dropdown-menu a').eq(6).on('click',function(){
				//app.controller.moveTo('grade','grade_detail');
			});
			$('.dropdown-menu a').eq(7).on('click',function(){
				//app.controller.deleteTarget('hong','grade','grade_delete');
			});
			$('.dropdown-menu a').eq(8).on('click',function(){
				//app.controller.moveTo('board','board_write');
			});
			$('.dropdown-menu a').eq(9).on('click',function(){
				//app.controller.moveTo('board','board_list');
			});
			$('.dropdown-menu a').eq(10).on('click',function(){
				//app.controller.moveTo('board','board_detail');
			});
			$('.dropdown-menu a').eq(11).on('click',function(){
				//app.controller.deleteTarget('hong','board','board_delete');
			});
			$('#arithBtn').on('click',function(){
				$container.empty();
				$container.html(algoUI.tbl());
	            var $tblRight=$('#tblRight'),
	              $tblLeft=$('#tblLeft');
	            $tblLeft.html(algoUI.seriesMenu()); 
	       /*     $cnt=compUI.div('content');
	    		$cnt.append(compUI.h1('등차수열'))
	    			.append(compUI.span('start_txt'))
	    			.append(compUI.br())
	    			.append(compUI.span('end_txt'))
	    			.append(compUI.div('result'))
	    		;
	            $tblRight.html(
	            		'<div id="content">'
	            		+'<h1>'
	            		+'test</h1>'
	            		+'</div>'
	            		
	            );*/
	            compUI.h1('arithmetic')
	            	.html('등차수열')
	            	.appendTo($tblRight);
	            compUI.div('start_lbl')
	            	.addClass('input-group-addon')
	            	.attr('placeholder','양의 정수')
	            	.html('BEGIN')
	            	.appendTo($tblRight);
	            compUI.span('start_lbl')
	            	.html('LIMIT')
	            	.appendTo($tblRight);
	            
	            
				/*$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.iTxt('end'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.iTxt('resultBtn'));
				$('#resultBtn').val('결과보기');*/
				$('#resultBtn').click(()=>{
					$.getScript(algo,(x1,x2)=>{
						$('#result').text('결과 : '+
								series.arithmetic(
										$('#start').val(),
										$('#end').val()
								));
					});
				});
			});
			$('#switchBtn').click(()=>{
				
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.aBtn('resultBtn'));
				$('#resultBtn').val('결과보기');
				$('h1').html('스위치수열의 합');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값'+series.switchSeries());
					});
				})
			});
			$('#selBtn').click(()=>{
				$container.empty();
				$container.append(compUI.div('content'))
				.css({'width':'100%'});
				$('#content')
				.css({'width':'40%','margin':'0 auto'});
				
				$('#content').html(
						'<div id="sort-div">'
						+'<h1 id="title">선택정렬</h1>'
						+'<input type="text" id="sortVal" placeholder="양의 정수만 입력가능"/>'
						+'<input type="button" id="sortBtn" value="값 입력" placeholder="입 력"/>'
				);
				var sortList= new Array(5);
				var i=0;
				$('#sortBtn').click((x)=>{
					sortList[i]=$('#sortVal').val();
					$('#sortVal').val('');
					i++;
					if(i==5){
						$('#sortVal').remove();
						$('#sortBtn').val('결과보기');
						$('#sortBtn').after(compUI.h1('result'));
						$('#sortBtn').click(()=>{
							console.log('선택정렬');
							$.getScript(algo,x=>{
								$('#result').text(sort.selection(
										sortList
								));
							});
							i=0;
						});
						
						
					}
				});
			});
			$('#bubbleBtn').click(()=>{
				alert('bubble');
				$container.empty();
				$container.append(compUI.div('content'))
				.css({'width':'100%'});
				$('#content')
				.css({'width':'40%','margin':'0 auto'});
				
				$('#content').html(
						'<div id="sort-div">'
						+'<h1 id="title">버블정렬</h1>'
						+'<input type="text" id="sortVal" placeholder="양의 정수만 입력가능"/>'
						+'<input type="button" id="sortBtn" value="값 입력" placeholder="입 력"/>'
				);
				var sortList= new Array(5);
				var i=0;
				$('#sortBtn').click((x)=>{
					sortList[i]=$('#sortVal').val();
					$('#sortVal').val('');
					i++;
					if(i==5){
						$('#sortVal').remove();
						$('#sortBtn').val('결과보기');
						$('#sortBtn').after(compUI.h1('result'));
						$('#sortBtn').click(()=>{
							console.log('버블정렬');
							$.getScript(algo,x=>{
								$('#result').text(sort.bubble(
										sortList
								));
							});
							i=0;
						});
						
						
					}
				});
			});
			
			
		});
	};

	return {init:init};
})();


meta.session=
	{
	   init : (x)=>{
				sessionStorage.setItem('x',x);
				sessionStorage.setItem('j',x+'/resources/js');
				sessionStorage.setItem('c',x+'/resources/css');
				sessionStorage.setItem('i',x+'/resources/img');
	   		  },
	   getPath : (x)=>{
				return sessionStorage.getItem(x);
	   		  }
	};
var $$= function(x){return meta.session.getPath(x);};
			










