import React,{useEffect,useState} from 'react';
import {Form,Button,Col} from 'react-bootstrap';


export default function CallbackForm(){
	
	const [submitted,setSubmitted] = useState(false);
	const [error,setError] = useState('');
	
	const [date,setDate] = useState(() => {
		let DATE = new Date();
		let oldMilliseconds = DATE.valueOf();
		let newMilliseconds = DATE.valueOf() + 86400000*7;
		let newDate = new Date(newMilliseconds);
		return {min:{year:DATE.getFullYear(),
					month:(DATE.getMonth() + 1).toLocaleString().padStart(2,0),
					day:(DATE.getDate()).toLocaleString().padStart(2,0)},
				max:{year:newDate.getFullYear(),
					month:(newDate.getMonth() +1).toLocaleString().padStart(2,0),
					day:(newDate.getDate()).toLocaleString().padStart(2,0)}
				};
		
	});
	
	const [selectedDate,setSelectedDate] = useState('');
	const [category,setCategory] = useState('');
	const [query,setQuery] = useState('');
	
	function handleSubmit(e){
		e.preventDefault();
		console.log(category)
		if(category === 'none' || category === '' || !selectedDate || !query){
			setError('Please Enter Details Correctly');
			return;
		} 
		let userInfo = JSON.parse(localStorage.getItem('user'));
		console.log()
		let menteeID = JSON.parse(localStorage.getItem('user'))._id
		const token = localStorage.getItem('token');
		fetch(`http://${window.location.hostname}:5005/mentee/callback/${menteeID}`,{
			method:'POST',
			headers:{"Content-Type":"application/json",'Authorization':`Bearer ${token}`},
			body:JSON.stringify({selectedDate,category,query,userInfo})
		}).then((res) => {
			if(res.ok){
				setSubmitted(true);
			}else{
				setError('Error!!! Please Try Again Later');
			}
		})
		.catch(e => alert(e))
	}
	

	  if(submitted){
		  return (
		  <>
			  <h3 className="text-success" >Your Request Has Been Successfully Registered </h3>
			  <p className="text-muted" >More Information regarding your request will be visible in the History Section</p>
		  </>
		  )
	  }else{
	
	 return(
	 <>
		<p className='text-danger' >{(error.length > 0)?error:null}</p>
		<Form >	
		 <Form.Row>
		  {/* <div className="form-group col-sm">
				<label htmlFor="category" >Category</label>
				<select onChange={e => setCategory(e.target.value)} className="form-control">
					<option>Selec Category</option>
					<option>JEE</option>
					<option>NEET</option>
					<option>CARRER</option>
				</select>
	  </div> */}
				<Col>
			  <Form.Group controlId="exampleForm.ControlSelect1">
					<Form.Label>Category</Form.Label>
					<Form.Control onChange={e => setCategory(e.target.value)} as="select">
					  <option value='none' >Select Category</option>
					  <option >JEE</option>
					  <option>NEET</option>
					  <option>CARRER</option>
					</Form.Control>
			  </Form.Group>
			</Col>
			</Form.Row>
			<Form.Row>
			{/* <div className="form-group col-sm" >
				<label htmlFor="query" >Query:- </label>
				<textarea onChange={e => setQuery(e.target.value)} style={{height:'10rem'}} className="form-control"  placeholder="Write your Query"
				 name="query" type="text" ></textarea>
	  </div> */}
			<Col>
			<Form.Group controlId="exampleForm.ControlTextarea1">
				<Form.Label>Query</Form.Label>
				<Form.Control onChange={e => setQuery(e.target.value)} as="textarea"  placeholder="Write your Query" rows={3} />
			</Form.Group>
			</Col>
			</Form.Row>
			<Form.Row>
			<Col>
			<div className="form-group col-sm" >
				<label htmlFor="selectedDate" >Select Date</label>
				<input onChange={e => setSelectedDate(e.target.value)} className="form-control" name="selectedDate" type="date"
					
					min={`${date.min.year}-${date.min.month}-${date.min.day}`}
					max={`${date.max.year}-${date.max.month}-${date.max.day}`}
				/>
			</div>
			</Col>
		  </Form.Row>
		   <div className='Btn' style={{textAlign:'center'}}>
				<Button type='submit' onClick={(e) => handleSubmit(e)} className='btn btn-primary' >Submit</Button>
		   </div>
		</Form>
	 </>
	)}
  
}