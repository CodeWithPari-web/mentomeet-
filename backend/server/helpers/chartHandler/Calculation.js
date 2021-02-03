export function CalculateWeeks(year = 0,month = 0){
		if(month === 0 || year === 0) return console.log('NO month or year entered');
		
		const ThirtyOneDays = [1,3,5,7,8,10,12]
	
	
		if(ThirtyOneDays.includes(month)){
			return [{name:'Week 1',min:1,max:7},{name:'Week 2',min:8,max:14},{name:'Week 3',min:15,max:21},{name:'Week 4',min:22,max:28},{name:'Week 5',min:29,max:31}];
		}else if((month === 2) && ((year%400 === 0) || (year%4 === 0 && year%100 !== 0))){
			return [{name:'Week 1',min:1,max:7},{name:'Week 2',min:8,max:14},{name:'Week 3',min:15,max:21},{name:'Week 4',min:22,max:29}];
		}else if(month === 2){
			return [{name:'Week 1',min:1,max:7},{name:'Week 2',min:8,max:14},{name:'Week 3',min:15,max:21},{name:'Week 4',min:22,max:28}];
		}else{
			return [{name:'Week 1',min:1,max:7},{name:'Week 2',min:8,max:14},{name:'Week 3',min:15,max:21},{name:'Week 4',min:22,max:28},{name:'Week 5',min:29,max:30}];
		}
}

export function Between(number1,min,max){
	if(min<=number1 && number1<=max) return true;
	else return false;
}

/* 

For Testing
CalculateWeeks(2020,1)
CalculateWeeks(2017,2)
CalculateWeeks(2020,6)
CalculateWeeks(2020,7)
CalculateWeeks(2020,11)
CalculateWeeks(2020,12)

 */
 
