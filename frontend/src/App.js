import React, { Fragment } from 'react';

import './css/App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import BlogDetailedPage from './components/Blog/BlogDetailedPage.js'
import BlogList from './components/Blog/BlogList.js'
import BlogLists from './components/Blog/BlogLists.js'
import MentorLists from './components/Profile/Mentor/MentorLists'
import MentorCreateForm from './components/Profile/MentorCreateForm';
import MentorDashboard from './components/Profile/Mentor/MentorDashboard';
import MyProfile from './components/Profile/MyProfile/MyProfile.js'
import OtherProfile from './components/Profile/OtherProfile/OtherProfile.js'
import MenteeCreateForm from './components/Mentee/MenteeCreateForm';
import MenteeHistory from './components/Mentee/MenteeHistory';
import BlogCreateForm from './components/Blog/BlogCreateForm';
import BlogDetail from './components/Blog/BlogDetail';



import Index from './components/index.js'
import Question from './components/Question/Question.js'
import Answer from './components/Answer/Answer'
import Login from './components/Login/Login'
import Chat from './components/Chat/Chat/Chat.js'
import Join from './components/Chat/Join/Join.js'
import NavBar from './components/NavBar'
import AdminPage from './components/admin/AdminPage';
import AdminDashboardPage from './components/admin/AdminDashboardPage';
import Footer from './components/Footer'
import Mentor from './components/Team'
//import Testimonial from './components/testimonial'
//import Signup from './components/AnnouncementForm/AnnouncementForm.js'


function App() {
  return (
    <Fragment>
      <BrowserRouter>

        <NavBar />
        {/* <ReactNotification /> */}
        <div>

          <Switch>

            {/* blogs,mentors,mentees */}
            <Route path="/blogdetail" render={props => <BlogDetailedPage {...props} />} />
            <Route path="/blogs/view/:bid" render={props => <BlogDetail {...props} />} />
            <Route path="/blogs" render={props => <BlogLists {...props} />} />
            <Route path="/bloglist" render={props => <BlogList {...props} />} />
            {/*<Route path="/announcements" render={props => <Signup {...props} />} />*/}
            
			{/* <Route path="/createblog" render={props => <BlogCreateForm {...props} /> } /> */}
            <Route path="/mentors" render={props => <MentorLists {...props} />} />
            <Route exact path="/mentor" render={props => <MentorCreateForm {...props} />} />
            <Route path="/mentor/dashboard" render={props => <MentorDashboard {...props} />} />
			
			{/* Using the same  Profile component, with different options changed in the file and it Myprofile and other profile */}
            <Route path="/profile/:id" render={props => <OtherProfile {...props} />} />
            <Route path="/profile" render={props => <MyProfile {...props} />} /> 
			
			{/* Added Route For Mentee History Page  */}	
			<Route path="/mentee/dashboard" render={props => <MenteeHistory {...props} />} />
            <Route path="/mentee" render={props => <MenteeCreateForm {...props} />} />
            
			{/* <Route path="/qna" render={props => <Question {...props} /> } /> */}
            <Route path="/index" render={props => <Index {...props} />} />
            <Route path="/qna" render={props => <Question {...props} />} />
            <Route path="/answer/:id" render={props => <Answer {...props} />} />
            <Route exact path="/login" render={props => <Login {...props} />} />
            <Route path="/join" render={props => <Join {...props} />} />
            <Route path="/chat" render={props => <Chat {...props} />} />
            {/* <Route path="/login" render={props => <Login {...props} /> } />
            <Route path="/student" render={props => <Student {...props} /> } /> */}

		  <Route exact path="/admin" render={props => <AdminPage {...props} /> } /> 
				{/* Added Route For Admin Page  */}
			<Route  path="/admin/dashboard" render={props => <AdminDashboardPage {...props} /> } />
    
            <Route path="/team" render={props => <Mentor {...props} /> } /> 

            <Redirect to="/index" />
            <Redirect from="/" to="/index" />
            
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </Fragment>
  )
}

export default App;
