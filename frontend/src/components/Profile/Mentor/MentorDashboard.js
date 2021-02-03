import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

import React, { useEffect ,useState} from "react";
import { Container,Row,Col,Card,Button} from "react-bootstrap";
import {Badge} from "reactstrap"
import {Redirect} from 'react-router-dom'
import MeetForm from "./MeetForm";


const MentorDashboard = ()=>{
    const [Questions,setQuestions] = useState([])
    const user = JSON.parse(localStorage.getItem("user"))
    const [approved,setApproved] = useState(false)
    const  [clicked,SetClicked] = useState(false)
    const [question,SetQuestion] = useState("")
    const color = {
      "JEE":"warning",
      "NEET" :"info",
      "CARRER":"success"
    }
    console.log(Questions)
    const QuestionGetter = (path)=>{
	console.log(`http://${window.location.hostname}:5005/mentor/${path}`)
      Axios.get(`http://${window.location.hostname}:5005/mentor/${path}`)
        .then((res)=>{
			setQuestions(res.data);
        })
        .catch(err=>console.log(err))
    }
	
    useEffect(()=>{
        QuestionGetter('allquestions')
        // SetRole((user.category))
    },[])
	
    if (JSON.parse(localStorage.getItem("user"))==undefined)
    {
      return <Redirect to="/" />
    }

    const handleApprove = (q)=>{
        SetQuestion(q)
        SetClicked(!clicked)
    }

const gotoApprove =()=>{
   setApproved(!approved)
   setQuestions([])
  if(!approved) 
     QuestionGetter("approvedqns/" + user._id)
  else 
  QuestionGetter("allquestions")
}
  return(
    <Container fluid>
      <ToastContainer position="bottom-left"/>
        <Row style={{marginTop:'1rem',marginBottom:'2rem',margin:'0 auto', maxWidth:'80vw'}}>
       <Col md={4}><h1>{!approved?(<>New Requests</>):(<>Approved</>)}</h1></Col>
  <Col md={{span : 4,offset :4}}><Button style={{marginTop:'1rem'}} onClick={gotoApprove}>{approved?(<> Back</>):(<>My 	History</>)}</Button></Col>
        </Row>
        <MeetForm clicked={clicked} SetClicked={SetClicked} user={user} question={question} setQuestions={setQuestions}/>
        <Row style={{margin:'2rem auto 2rem auto', maxWidth:'70vw'}}>

                {Questions.map((question,index)=>(
                    <Col >
						<Card style={{ width: '18rem' ,marginTop:10}} key={index}>
						<Card.Header style={{backgroundColor:'rgb(255, 239, 0)'}}  >
							<Card.Title  > 
								<Badge color={color[question.category]}>{question.category}</Badge>
									 {question.headline}
							</Card.Title>
						</Card.Header>
						<Card.Body >
					
						  <Card.Text>
						  <Card.Text><b>Mentee Name </b>: <span className='text-info' >{question.menteeName.toUpperCase()}</span> </Card.Text>  
						  <Card.Text><b>Application Date </b>:<br/> <span style={{color:'red',marginLeft:'auto',display:'table'}} >{new Date(question.applicationDate).toDateString()}</span> </Card.Text>
						  <Card.Text><b>Selected Date </b>:<br/> <span style={{color:'red',marginLeft:'auto',display:'table'}} >{new Date(question.selectedDate).toDateString()}</span> </Card.Text>
						  <Card.Text>
							<div className="hideDetails" >
								<p className="card-title queryTitle text-secondary "><span className='text-dark' ><b>My Query</b></span> : {question.query.toUpperCase()}</p>
							</div> 
							<Button variant="info" style={{border:'none'}}  onClick={e => {console.log(e.target.parentNode.firstChild.classList.toggle('hideDetails')) } } >More</Button>
						 </Card.Text>	
						  <Card.Text>
								 {approved?(
								  <>
									<p><b>Approved on </b>: <span style={{color:'green'}}  >{new Date(question.selectedDate).toDateString()}</span></p><br/>
									{question.selectedTime?<p>
										<b>Meeting Time </b> : <span style={{color:'green'}}  >
											{(new Date(question.selectedTime).getHours() > 12)?(new Date(question.selectedTime).getHours() - 12):(new Date(question.selectedTime).getHours())} 
											: 
											{(new Date(question.selectedTime).getMinutes()).toString().padStart(2,0)}
											<span>{(new Date(question.selectedTime).getHours() >= 12)?'PM':'AM'}</span>
										</span>
										</p>:null
									}
										
									<Button color="info" style={{fontSize:14}} href={question.MeetLink} onClick={e => alert(`This Link will Redirect you to: ${question.MeetLink}`)}  >Meet Link</Button>
									</>
								):(
									<>
										<Button variant="info" onClick={()=>{handleApprove(question)}}>Approve</Button>
									</>
								)} 
						  </Card.Text>
						   
                      </Card.Text>
             
                    </Card.Body>
                  </Card>
                  </Col>

  ))}
    </Row>          

    </Container>

  )

}
export default MentorDashboard 