var series={
		arithmetic : (s,e)=>{
			var sum=0;
			var start=s*1;
			var end=e*1;
			for(var i=start;i<=end;i++){
				sum+=i;
			}
			return sum;
		},
		switchSeries : ()=>{
			// 1 - 2 + 3 - 4 +...-100
			var sum=0;
			var i=0;
			var sw=0;
			do{
				i++;
				if(sw==0){
					sum += i;
					sw = 1;
					
				}else{
					sum -= i;
					sw = 0;
				}
			}while(i<100);
			return sum;
			
		},
		diffSeries : x=>{
			
		},
		factorial : ()=>{
			
		},
		fibonacci : (x)=>{
			alert('확인 -->'+x);
		}
}
var sort={
		selection : (x)=>{
			console.log('start : '+x);
			var i=0,j=0,k=0;
			for(i=0;i<x.length;i++){
				for(j=i;j<x.length;j++){
					if(x[i]*1>x[j+1]*1){
						k=x[i];
						x[i]=x[j+1];
						x[j+1]=k;
						console.log('j'+j);
					}
					console.log('z'+j);
				}
			}
			console.log('end : '+x);
			return x;
			},
		bubble : x=>{
			console.log('start : '+x);
			var i=0,j=0,k=0;
			for(i=0;i<x.length;i++){
				for(j=0;j<x.length;j++){
					if(x[j]*1>x[j+1]*1){
						k=x[j];
						x[j]=x[j+1];
						x[j+1]=k;
					}
				}
			}
			console.log('end : '+x);
			return x;
		},
		insertion : ()=>{
			for(var i=0;i<arr.length;i++){
				for(var j=0;j<arr.length-1;i++){
					if(a>b){
						c=arr[i];
						arr[i]=arr[i+1];
						arr[i+1]=c;
					}
				}
			}
		},
		ranking : ()=>{
			for(var i=0;i<arr.length;i++){
				for(var j=0;j<arr.length-1;i++){
					if(a>b){
						c=arr[i];
						arr[i]=arr[i+1];
						arr[i+1]=c;
					}
				}
			}
		}
}
var mtx={}
var math={}
var appl={}








