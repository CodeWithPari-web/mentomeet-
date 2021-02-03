import React, { Component } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';

const HistoryData = (props) => {
  console.log(props);
  const customStyle = (props.data.status === 'approved')?{border:'1px solid green',borderRadius:'15px 20px 100px 5px'}:{border:'1px solid red'}
  console.log(customStyle);
return( 
  <div className="card" style={{maxWidth:'50vw',margin:'1rem auto 1rem auto',...customStyle,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}>       
	   <h5 className="card-header " style={{backgroundColor:'warning'}} >
			 {(props.data.status === "approved")?<span className='text-success' ><b>Approved</b></span>:<span className='text-danger' ><b>Pending</b></span>}
			<span className="badge badge-warning badgePosition">{props.data.category}</span>
		</h5>
        <div className="card-body ">	
			<p className='text-secondary'>Application Date : {new Date(props.data.applicationDate).toDateString()} </p>
			<p className='text-secondary'>Selected Date : {new Date(props.data.selectedDate).toDateString()} </p>
            <p className="card-text queryDesp">
                {(props.data.status === "pending")?(
						<span className='text-info' >We will reach out to you soon!</span>	
					):(
					<>		
						{(props.data.selectedTime)?(<div className='text-success' style={{display:'table',marginLeft:'auto'}}>
							<span>Meeting at </span> 
							 <span>
											{(new Date(props.data.selectedTime).getHours() > 12)?(new Date(props.data.selectedTime).getHours() - 12):(new Date(props.data.selectedTime).getHours())} 
											: 
											{(new Date(props.data.selectedTime).getMinutes()).toString().padStart(2,0)}
				
											<span>{(new Date(props.data.selectedTime).getHours() >= 12)?'PM':'AM'}</span>
							</span>
							{(props.data.MeetLink)?<Button color="info" style={{fontSize:14,display:'table',marginLeft:'auto',marginTop:'1rem'}} href={props.data.MeetLink} onClick={e => alert(`This Link will Redirect you to: ${props.data.MeetLink}`)} >Meeting Link</Button>:null}
				
							</div>):null
						}
					</>
					)
				}	
			</p>  
			<div>
				<div className="hideDetails" >
					<p className="card-title queryTitle text-secondary "><span className='text-dark' ><b>My Query</b></span> : {props.data.query.toUpperCase()}</p>
				</div> 
				<Button variant="info" style={{border:'none'}}  onClick={e => {console.log(e.target.parentNode.firstChild.classList.toggle('hideDetails')) } } >More</Button>
			</div>	
        </div >
    </div >
)
}

class MenteeHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let menteeID = JSON.parse(localStorage.getItem('user'))._id;
        console.log("LocalStoRAGE>>>>>", menteeID);
        axios.get(`http://${window.location.hostname}:5005/mentee/history/${menteeID}`)
            .then(response => {
                this.setState({ data: response.data });
                console.log("Data Set");
            })
            .catch((err) => {
                console.log('Error :', err);
            })
    }

    dataList() {
        return this.state.data.map((currData, i) => {
            return <HistoryData data={currData} key={i} />;
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="mainTitle">My History</h1>
                {(this.dataList().length > 0)?this.dataList():<p className="subTitle">You Have not Send Any CallBack Request to the Mentors Yet</p>}
            </React.Fragment>
        );
    }
}

export default MenteeHistory;
