import React, { Component } from 'react'
import AboutOne from './About/AboutOne'
import Appointment from './Appointment'
import BlogOne from './Blog/BlogOne'
import ClientLogos from './ClientLogos'
import BlogData from './Data/BlogData'
import FeaturesData from './Data/FeaturesData'
import ServiceData from './Data/ServiceData'
import TeamData from './Data/TeamData'
import FeaturesOne from './Features/FeaturesOne'
import GalleryOne from './Gallery/GalleryOne'
import HeroOne from './Hero/HeroOne'
import Promo from './Promo'
import ServiceOne from './Service/ServiceOne'
import TeamOne from './Team/TeamOne'
import TestimonailOne from './Testimonial/TestimonailOne'

class HomeOne extends Component {
  render() {
    return (
      <React.Fragment>
        <HeroOne />
        <FeaturesOne FeaturesData={FeaturesData} />
        <AboutOne />
        <ServiceOne ServiceData={ServiceData} />
        <TeamOne TeamData={TeamData} />
        <Appointment />
        <GalleryOne />
        <TestimonailOne />
        <BlogOne BlogData={BlogData} />
        <Promo />
        <ClientLogos />
      </React.Fragment>
    )
  }
}

export default HomeOne
