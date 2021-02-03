import React,{useState,useEffect} from 'react';
import { Container, Row, Col, Button, Card, Jumbotron } from 'react-bootstrap';
import BarChart from './Charts/BarChart';
import WeeklyBarChart from './Charts/WeeklyBarChart';
import MyCard from './Components/MyCard';
import MyTable from './Components/MyTable';
import DateFnsUtils from '@date-io/date-fns';
import MenuItem from '@material-ui/core/MenuItem';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Select from '@material-ui/core/Select';

export default function AdminDashboard({secretId}){
	
	const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	
	const [design,setDesign] = useState(0);  //0 for table and 1 for cards
	const [TCount,setTCount] = useState(0);
	const [ACount,setACount] = useState(0);
	const [info,setInfo] = useState('');
	const [weekInfo,setWeekInfo] = useState('');
	const [toShow,setToShow] = useState('daily');
	const [selectedDate,setSelectedDate] = useState(new Date());


	useEffect(() => {
		//alert('cleaning');
		setTCount(0);
		setACount(0);
		setInfo('');
		setWeekInfo('');
	},[selectedDate,toShow]);
	
	
	useEffect(() => {
	  fetch(`http://${window.location.hostname}:5005/admin/callbacks/${toShow}/${selectedDate.getFullYear()}/${selectedDate.getMonth()+1}/${selectedDate.getDate()}`,{
		  method:'POST',
		  headers:{'Content-Type':'application/json'},
		  body:JSON.stringify({API_KEY:secretId})
	  })
		.then(res => res.json())
		.then(data => {
			console.log(data);
			if(data && data.info) setInfo(data.info)
			if(data && data.weekInfo) setWeekInfo(data.weekInfo)
			
		}
			)
		.catch(e => alert('Error In Fetching Data'))
	},[toShow,selectedDate]);
	
	useEffect(() => {
		console.log(TCount,ACount);
		let tcount=0,acount=0;
		console.log(info)
		info && info.forEach((obj) => {
			tcount++;
			if(obj.status === 'approved' && obj.approvedBy) acount++;
		});
		if(tcount !=0 ){
			setACount(acount);
			setTCount(tcount);
		}
	},[info])
	

	
	
	let list = info && info.map(ele =>  {
		if(design === 0) return <MyTable obj={ele} />
		return  <MyCard  obj={ele} />
	});
	
	
	
    if(!secretId) return;
	return (
	<section className="container">
		<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'3rem'}}>
			<h1 >Welcome Admin </h1>
			 <MuiPickersUtilsProvider utils={DateFnsUtils}>
				 <KeyboardDatePicker
					  disableToolbar
					  variant="inline"
					  margin="normal"
					  id="date-picker-inline"
					  label={(toShow === 'daily')?'Select Date':'Select Month'}
					  value={selectedDate}
					  onChange={(date) => setSelectedDate(date)}
					  KeyboardButtonProps={{
						'aria-label': 'change date',
					  }}
					/>
			 </MuiPickersUtilsProvider>
		</div>
		<div style={{display:'flex',justifyContent:'flex-end',flexDirection:'column'}}>
				<div>
					<Select
						  labelId="demo-simple-select-label"
						  id="demo-simple-select"
						  value={design}
						  onChange={e => setDesign(parseInt(e.target.value))}
						  style={{marginRight:'2rem'}}
						>
						  <MenuItem value={0} >Table</MenuItem>
						  <MenuItem value={1} >Card</MenuItem>
					</Select>
					<Select
						  labelId="demo-simple-select-label"
						  id="demo-simple-select"
						  value={toShow}
						  onChange={e => setToShow(e.target.value)}
						>
						  <MenuItem value={'daily'}>Daily</MenuItem>
						  <MenuItem value={'weekly'}>Weekly</MenuItem>
					</Select>
				</div>			
		</div>  
     <div style={{display:'flex',justifyContent:'space-evenly'}} >
		 {(TCount !== 0 )?<table className="table table-striped" style={{maxWidth:'30vw',marginTop:'2.5rem'}}>
				<tbody>
					<tr className='text-primary'>
						<td>TOTAL</td>
						<td>{TCount}</td>
					</tr>
					<tr className='text-success'>
						<td>APPROVED</td>
						<td>{ACount}</td>
					</tr>
					<tr className='text-danger' >
						<td>PENDING </td>
						<td>{TCount - ACount}</td>
					</tr>
				</tbody>
			</table>
			 :null
		 }
		{/*  Charts */}
		<div style={{width:'50vw'}} >
			{(TCount == 0 )?<p  style={{color:'red',marginTop:'2rem',marginBottom:'2rem',textAlign:'center'}} >There are No callbacks Request</p>:null}
			{(TCount !== 0 && toShow !== 'weekly')?<BarChart TCount={TCount} ACount={ACount} Label={toShow} />:null}
			{(TCount !== 0 && toShow === 'weekly' )?<WeeklyBarChart TCount={TCount} ACount={ACount} AllInfo={info} WeekInfo={weekInfo} />:null}
		</div>
	</div>
		<Container fluid style={{maxWidth:'900px',margin:'0 auto'}}  >
		 {(design === 0)?(
				 <Row style={{width:'70vw',margin:'0 auto'}} >
					<table className="table table-striped table-bordered">
						<thead className="thead-dark">
							<tr>
							  <th scope="col">Status</th>
							  <th scope="col">Category</th>
							  <th scope="col">Mentee Name</th>
							  <th scope="col">Mentor Name</th>
							  <th scope="col">Selected Date</th>
							  <th scope="col">Mentee Query</th>
							</tr>
						 </thead>
						{list}
					</table>
				  </Row>
				  ):(
				   <Row style={{width:'70vw',margin:'0 auto'}} >
						{list}
				    </Row>
				)
		 }
		</Container>
	</section>
	)
}