import React, { Component}from 'react';
import './works.css';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody,UncontrolledCollapse
} from 'reactstrap';

import brand from '../../assets/brand.png';


class Works extends Component {

  constructor(){

    super();
  
    }

    render()
   {
     return(

        <React.Fragment>
          <div class="container">
          <h1>How <em class="animated"><img src={brand} alt="mentomeet" width="250" height="60" /></em> works</h1>
          <br/>
          <br/>
{/*const Example = (props) => {
  return (
  */}
    <CardDeck>
      <Card >
        {/*<CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />*/}
        <CardBody >
          <CardTitle tag="h4">
            <Button color="link" id="toggler" style={{ marginBottom: '1rem' }}>
              Sign up for <br/>free 
            </Button> 
           </CardTitle>
          <br/>
          <UncontrolledCollapse toggler="#toggler">
      
          Sign up and choose your section from JEE, NEET and Career (college students) stepping one important step ahead to your goal.
           complete your profile and let us help you in a better way.
           
          </UncontrolledCollapse>
          
         
         
        </CardBody>
      </Card>
      <Card >
        {/*<CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />*/}
        <CardBody >
          <CardTitle tag="h4">
            <Button color="link" id="toggler" style={{ marginBottom: '1rem' }}>
            Schedule Meeting with your mentor
            </Button> 
           </CardTitle>
          <br/>
          <UncontrolledCollapse toggler="#toggler">
          Schedule meetings using the ‘talk-to-mentor’ tab and solve your queries with our mentors. Once scheduled, you can find the meeting link in your dashboard and Gmail.

           
          </UncontrolledCollapse>
          
         
         
        </CardBody>
      </Card>
      <Card >
        {/*<CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />*/}
        <CardBody >
          <CardTitle tag="h4">
            <Button color="link" id="toggler" style={{ marginBottom: '1rem' }}>
            Buy a <br/>Plan 
            </Button> 
           </CardTitle>
          <br/>
          <UncontrolledCollapse toggler="#toggler">
      
          From practice to perfection, love your journey throughout this preparation period until you get your dream job with our unlimited and exclusively designed resources.
(plan details)

           
          </UncontrolledCollapse>
          
         
         
        </CardBody>
      </Card>

      <Card >
        {/*<CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />*/}
        <CardBody >
          <CardTitle tag="h4">
            <Button color="link" id="toggler" style={{ marginBottom: '1rem' }}>
            
            Check your preparation level 
            </Button> 
           </CardTitle>
          <br/>
          <UncontrolledCollapse toggler="#toggler">
      
          Analyzation is the first step towards improvement. Check your knowledge and exam preparation with our topic-wise test series prepared just for you.
          </UncontrolledCollapse>
          
         
         
        </CardBody>
      </Card>
    </CardDeck>
    <br/>
    <br/>
    </div >
    <div class="container">
    <CardDeck>
      <Card >
        {/*<CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />*/}
        <CardBody >
          <CardTitle tag="h4">
            <Button color="link" id="toggler" style={{ marginBottom: '1rem' }}>
              Sign up for <br/>free 
            </Button> 
           </CardTitle>
          <br/>
          <UncontrolledCollapse toggler="#toggler">
      
          Sign up and choose your section from JEE, NEET and Career (college students) stepping one important step ahead to your goal.
           complete your profile and let us help you in a better way.
           
          </UncontrolledCollapse>
          
         
         
        </CardBody>
      </Card>
      <Card >
        {/*<CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />*/}
        <CardBody >
          <CardTitle tag="h4">
            <Button color="link" id="toggler" style={{ marginBottom: '1rem' }}>
            Schedule Meeting with your mentor
            </Button> 
           </CardTitle>
          <br/>
          <UncontrolledCollapse toggler="#toggler">
          Schedule meetings using the ‘talk-to-mentor’ tab and solve your queries with our mentors. Once scheduled, you can find the meeting link in your dashboard and Gmail.

           
          </UncontrolledCollapse>
          
         
         
        </CardBody>
      </Card>
      <Card >
        {/*<CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />*/}
        <CardBody >
          <CardTitle tag="h4">
            <Button color="link" id="toggler" style={{ marginBottom: '1rem' }}>
            Buy a <br/>Plan 
            </Button> 
           </CardTitle>
          <br/>
          <UncontrolledCollapse toggler="#toggler">
      
          From practice to perfection, love your journey throughout this preparation period until you get your dream job with our unlimited and exclusively designed resources.
(plan details)

           
          </UncontrolledCollapse>
          
         
         
        </CardBody>
      </Card>

      <Card >
        {/*<CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />*/}
        <CardBody >
          <CardTitle tag="h4">
            <Button color="link" id="toggler" style={{ marginBottom: '1rem' }}>
            
            Check your preparation level 
            </Button> 
           </CardTitle>
          <br/>
          <UncontrolledCollapse toggler="#toggler">
      
          Analyzation is the first step towards improvement. Check your knowledge and exam preparation with our topic-wise test series prepared just for you.
          </UncontrolledCollapse>
          
         
         
        </CardBody>
      </Card>
    </CardDeck>
    <br/><br/>







  
    </div>
    </React.Fragment>
     );
}
}

export default Works