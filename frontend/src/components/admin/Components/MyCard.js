import React from 'react';
import { Card, Button,Badge} from 'react-bootstrap';
import Avatar from './default-user-avatar.svg';
import {Model} from 'react-bootstrap';


export default function MyCard({obj}){
	let dt = new Date(obj.applicationDate);
	
	return(
			<Card  bg='light' border={(obj.status === 'approved')?'success':'danger'} style={{maxWidth:'300px',minWidth:'200px',marginBottom: "1rem",marginRight:"1rem"}}>
			 <Card.Header style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
				{(obj.status === 'pending')?(
							<h5 className="text-danger" ><b>Pending</b></h5>
						):(
							<h5 className="text-success"  ><b>Approved</b></h5>
				)}
				<Badge variant='warning' >{obj.category.toUpperCase()}</Badge>
			 </Card.Header>
			 {/* Body Starts Here*/}
			 <Card.Body >
                  <Card.Text>Mentee :- {obj.menteeName}</Card.Text> 
                  <Card.Text>Mentor :- {obj.mentorName || '----'}</Card.Text> 
                  <Card.Text>
						<p className='cutTheText' 
							onClick={(e) => e.target.classList.toggle('showTheText')}
						>{obj.query}</p>
				  </Card.Text>            
             </Card.Body>
        </Card>
	)
}