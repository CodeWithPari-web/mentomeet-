import React,{useState,useEffect} from 'react';
import {Bar} from 'react-chartjs-2';

export default function BarChart({TCount,ACount,Label}){

	const state = {
		labels:[`${Label[0].toUpperCase() + Label.slice(1)}`],
		datasets:[
			{
				label:'Recieved',
				backgroundColor:'red',
				borderWidth:2,
				data:[TCount]
			},
			{
				label:'Approved',
				backgroundColor:'yellow',
				borderWidth:2,
				data:[ACount]
			}
		]
	};
	
	const [BarState,SetBarState] = useState(state);
	
	useEffect(() => {
		console.log('bar graph');
		console.log(TCount,ACount);
		SetBarState(state);			
	},[TCount,ACount])
	
	return(
		<div className="callbackChart">
			<Bar  data={BarState} 
				options={
					{
						title:{
							display:true,
							text:'No. of Request Recieved and Approved',
							fontSize:3
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