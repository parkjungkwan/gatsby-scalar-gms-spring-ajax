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








