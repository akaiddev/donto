import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import FooterData from './Components/Data/FooterData'
import FooterOne from './Components/Footer/FooterOne'
import Header from './Components/Header/Header'
import HomeOne from './Components/HomeOne'
import About from './Components/Page/About'
import Blog from './Components/Page/Blog'
import BlogDetails from './Components/Page/BlogDetails'
import Contact from './Components/Page/Contact'
import DentistDetails from './Components/Page/DentistDetails'
import ServiceDetails from './Components/Page/ServiceDetails'
import Team from './Components/Page/Team'

function App() {
  return (
    <div className='main-wrapper'>
      <Router>
        <Header />

        <Route
          exact
          path='/'
          render={(props) => (
            <>
              <HomeOne />
            </>
          )}
        />

        <Route path='/Page/About' component={About} />
        <Route path='/Page/ServiceDetails' component={ServiceDetails} />
        <Route path='/Page/DentistDetails' component={DentistDetails} />
        <Route path='/Page/BlogDetails' component={BlogDetails} />
        <Route path='/Page/Blog' component={Blog} />
        <Route path='/Page/Team' component={Team} />
        <Route path='/Page/Contact' component={Contact} />

        <FooterOne FooterData={FooterData} />
      </Router>
    </div>
  )
}

export default App
