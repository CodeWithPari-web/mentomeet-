import React from 'react';

import './../css/App.css';


import WhyChooseUs from '../components/WhyChooseUs'
import Home from '../components/Home'
import CareerSolutionEveryone from "../components/CareerSolutionEveryone"
import BlogDetailedPage from '../components/Blog/BlogDetailedPage'
import BlogList from './Blog/BlogList'
import About from './About'
import BeyondMentorship from './BeyondMentorship'
import WhyChooseMentomeet from './WhyChooseMentomeet'
import Footer from './Footer'
import Mentor from './Team'
// import WordFromStudents from './WordFromStudents.js'
import FadeIn from 'react-fade-in';
//import Announcements from './Announcements';
//import Signup from './AnnouncementForm/AnnouncementForm.js';
import { Carousel } from 'react-bootstrap';

import Testimonial from './testimonial/testimonial.js';
import Works from './works/works.js';

import $ from 'jquery'

function Index() {
  return (
    <div>
      <FadeIn>
      <Home/>
      {/*<Announcements/>*/}
      <CareerSolutionEveryone/>
      <WhyChooseUs/> 
      {/* <BlogDetailedPage/> */}
      
      <About/>
      {/* <Mentor/> */}
      <BeyondMentorship/>     
      <WhyChooseMentomeet/>
       {/* <Footer /> */}
       </FadeIn>
        <Testimonial/>
        <Works/>
       {/*} <Signup/>*/
       }
    </div>
  )
}

export default Index;
