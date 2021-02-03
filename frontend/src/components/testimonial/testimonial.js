import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import './style.css';
import $ from "jquery";
import abdul from '../../assets/members/abdul.jpg'


class Testimonial extends Component {
constructor(){

  super();

  }


   render()
   {
     return(
        <React.Fragment>
          <h1>FEEDBACK</h1>
          <link href="css/bootstrap.min.css" rel="stylesheet"></link>

        <div class="slider-area">
          <div class="container">
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>
              
               
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <div class="img-area">
                        <img src={abdul} alt=""/>
                    </div>
                    <div class="carousel-caption">
                      <h3>Jason Doe </h3>
                      <h4> Web Developer</h4>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quam eius eaque totam labore cupiditate pariatur nihil quibusdam? Possimus, minus dolor facilis rerum consequatur vitae.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="img-area">
                        <img src={abdul} alt=""/>
                    </div>
                    <div class="carousel-caption">
                      <h3>Claire Doe </h3>
                      <h4> App Developer</h4>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quam eius eaque totam labore cupiditate pariatur nihil quibusdam? Possimus, minus dolor facilis rerum consequatur vitae.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="img-area">
                        <img src={abdul} alt=""/>
                    </div>
                    <div class="carousel-caption">
                      <h3>Amy Watson </h3>
                      <h4> Graphic Designer</h4>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quam eius eaque totam labore cupiditate pariatur nihil quibusdam? Possimus, minus dolor facilis rerum consequatur vitae.
                      </p>
                    </div>
                  </div>
                </div>
              
                
                <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                  <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                  <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
            </div>

        </div>
         </div>
         
    
        


     </React.Fragment>
       
      )
    }
}
export default Testimonial;