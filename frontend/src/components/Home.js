import React from 'react'
import teacher from '../assets/img/Rectangle 6@2x.png'

import achive from '../assets/final assets/Group 6@2x.png'
import talk from '../assets/final assets/Group 7@2x.png'

import video from '../assets/img/Rectangle 15@2x.png'
import mic from '../assets/img/Rectangle 14@2x.png'
import greaterThen from '../assets/img/Rectangle 13.png'
import dialog from '../assets/img/Rectangle 5.png'
import '../css/Home.css'
import { Link } from 'react-router-dom'
import Testimonial from './testimonial/testimonial.js'



export default function Home(){
    return(
        <div className='container-fluid  px-4 px-sm-5 py-5 px-md-3'>
            <div id="main-row" className='row'>
                <div id='row' className='col-12 col-sm-6 order-2 order-sm-1 row'>
                    <div className='col position-relative d-flex aling-items-center justify-content-center'>
                        <img className='d-block w-100' src={achive}></img>
                        <a href="https://www.youtube.com/watch?v=sz-2NJd0VyI&list=PLG4B5XWKSwQjACqJmgk0mAndu7aX83dyX" target="_blank" >  <img id='video' className='position-absolute' href="#" src={video}></img>
                        </a> 
                    </div>
                    <div className='col d-flex aling-items-center justify-content-center position-relative'>
                        <img className='d-block w-100' src={talk}></img>
                       <Link to={`/chat?name=dadabn&room=General`} > <img id='mic' className='position-absolute' src={mic}></img>
                    </Link></div>
                   <img id='greaterThen' className='d-none d-sm-block position-absolute' src={greaterThen}></img>
                    
                </div>
                 
                <div className='col-12 col-sm-6 order-1 order-sm-2 d-flex flex-sm-row aling-items-center justify-content-center justify-content-sm-end'>
                
                    <img id='teacher' className='' src={teacher}></img><br />
                    {/* <p>Xyz</p> */}
                    <a id='btn-sm-register' className='d-block position-absolute d-sm-none mx-auto mt-4' href='/login'>REGISTER</a>
                    <img id='dialog' className='position-absolute' src={dialog}></img>
                </div>
                
            </div>{!localStorage.getItem('token')? <a id='btn-register' className='d-none d-sm-block mx-auto mt-4' href='/login'>REGISTER</a> :""}
            
        </div>
        
    )
}