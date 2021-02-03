import React,{useState,useEffect} from 'react';
import {Bar} from 'react-chartjs-2';

export default function WeeklyBarChart({AllInfo,WeekInfo,TCount,ACount,Label = 'weeks'}){

	const [PerWeekRequest,setPerWeekRequest] = useState([]);
	const [PerWeekApprovedRequest,setPerWeekApprovedRequest] = useState([]);
	
	const state = (data1,data2,type) => {
		
		let label1,label2;
		if(type === 'random'){
			label1='random1';
			label2='random2';
		}else{
			label1='Total Requests';
			label2='Approved Requests';
		}
		
		return {
		labels:['Week 1','Week 2','Week 3','Week 4','Week 5'],
		datasets:[
			{
				label:label1,
				backgroundColor:'red',
				borderWidth:2,
				data:data1 
			},
			{
				label:label2,
				backgroundColor:'yellow',
				borderWidth:2,
				data:data2
			},
		]
		}
	};
	
	let initialState,newState;
	if(PerWeekRequest.length === 0){
		initialState = state([1,2],[2,3],'random');
		console.log(initialState);
	}
	const [BarState,setBarState] = useState(initialState);



	useEffect(() => {
		console.count('IamRunning');
		let TotalRequestPerWeek = [];
		let TotalRequestApprovedPerWeek = [];
		WeekInfo && WeekInfo.forEach((obj,index) => {
			console.log(`-----WEEK ${index+1}-------`)
			let tcount = 0;
			let acount = 0;
			obj.list && obj.list.forEach(it => {
				tcount++;
				console.log(it.status,it.approvedBy)
				if(it.status === 'approved' && it.approvedBy) acount++; 
			})
			console.log(tcount,acount);
			TotalRequestPerWeek.push(tcount);
			TotalRequestApprovedPerWeek.push(acount);
		});

		console.log(TotalRequestPerWeek);
		console.log(TotalRequestApprovedPerWeek);
		/* New Bar State */
		newState = state(TotalRequestPerWeek,TotalRequestApprovedPerWeek);
		console.log(newState);
		setPerWeekRequest(TotalRequestPerWeek);
		setPerWeekApprovedRequest(TotalRequestApprovedPerWeek);
		setBarState(newState);
	},[WeekInfo])
	
	return(
		<div className="callbackChart">	
		<Bar  data={BarState} 
				options={
					{
						title:{
							display:true,
							text:'No. of Request Recieved and Approved',
							fontSize:10
						},
						legend:{
							display:true,
							position:'right'
						},
						maintainAspectRatio:true,
						scales:{
							yAxes:[
									{
										ticks:{min:0}
									}
								]
						}
					}}
			/>
		</div>
	)
}