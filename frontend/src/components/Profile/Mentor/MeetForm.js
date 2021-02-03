import Axios from 'axios';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';



const MeetForm = ({clicked,SetClicked,question,user,setQuestions}) => {
    
	const toggle = () => {SetClicked(!clicked) ;SetLink("")};
    const [MeetLink,SetLink] = useState("")
    const [selectedDate,setSelectedDate] = useState(new Date());
	
	
	const handleApprove = (qid)=>{
        if (MeetLink==="")
          return alert("Please Enter a Link")
        toggle()
		 const token = localStorage.getItem('token');
		 const mentorName = JSON.parse(localStorage.getItem("user")).firstName + ' ' + JSON.parse(localStorage.getItem("user")).lastName;
         console.log(mentorName);		 
        Axios.put(`http://${window.location.hostname}:5005/mentor/allquestions`,{mentorAttended :user._id,Question_id : qid,MeetLink:MeetLink,selectedTime: selectedDate,mentorName},{
			headers: {
                'Authorization': `Bearer ${token}` 
            } 
		})
        .then((questions)=>{
           setQuestions(questions.data)
        }).catch((err)=>alert("Already accepted! Please Refresh"))

    }
  return (
    <div>
      <Modal isOpen={clicked} toggle={toggle} >
        <ModalHeader toggle={toggle}>APPROVAL CONFIRMATION</ModalHeader>
        <ModalBody>
          <p > <span ><b>Details : </b> </span><span className='text-success'> {question.query && question.query.toUpperCase()}</span></p>
		  <p><span style={{fontWeight:"bold"}}>Mentee Name : </span> {question.menteeName && question.menteeName.toUpperCase()}</p>
		  <Input type="text" placeholder="Please Fill Google-Meet Link" value={MeetLink} onChange={(e)=>SetLink(e.target.value)}/>
		  <MuiPickersUtilsProvider utils={DateFnsUtils} >
			<KeyboardTimePicker
				  margin="normal"
				  id="time-picker"
				  label="Time picker"
				  value={selectedDate}
				  onChange={(date) => setSelectedDate(date)}
				  KeyboardButtonProps={{
					'aria-label': 'change time',
				  }}
				/>
		  </MuiPickersUtilsProvider>
		</ModalBody>
        <ModalFooter>
          <Button color="success" onClick={()=>handleApprove(question._id)}>Confirm Approve</Button>{' '}
          <Button color="danger" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default MeetForm; 