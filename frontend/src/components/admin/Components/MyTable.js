import React from 'react';
import { Card, Button,Badge} from 'react-bootstrap';
import Avatar from './default-user-avatar.svg';
import {Model} from 'react-bootstrap';


export default function MyTable({obj}){
	let dt = new Date(obj.applicationDate);
	
	return(
			  <tbody>
				<tr  className={(obj.status === 'approved')?'bg-warning':'bg-light'}>
				  <td ><Badge variant={(obj.status === 'approved')?'success':'danger'} >{obj.status.toUpperCase()}</Badge></td>
				  <td>{obj.category.toUpperCase()}</td>
				  <td>{obj.menteeName || '----'}</td>
				  <td>{obj.mentorName || '----'}</td>
				  <td>{new Date(obj.selectedDate).toDateString() || '----'}</td>
				  <td  className='cutTheText' onClick={(e) => e.target.classList.toggle('showTheText') } >
							{obj.query}
				  </td>
				</tr>
			  </tbody>
	)
}