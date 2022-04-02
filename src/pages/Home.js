import React, {Fragment} from "react";
import Header from "../components/header/Header";
import Cards from '../components/cards/Cards';
import Testimonial from '../components/testimonial/Testimonial';
import headerImage from '../assets/kisspng-online-banking-business-vector-graphics-mobile-ban-5bf079c28270c4.3890355015424864665343.png';

const Home = () => {

  const testimonial = [
    "Let´s get started",
    "It´s time to change the world! Nova is the new platform to connect businesses, software platforms, marketplaces and new clients around the world. Nova is taking businesses to next level because of new technologies (Blockchain, microcredits, crowdfunding, get financing, manage business spend).",
    "Nova is used for small and big companies. Our services are developed for making growth and improve companies processes.",
    "Come and build the future"
  ]

  const headerInfo = "Join us to make the world a better place through knowledge about money"

  return (
    <Fragment>
      <Header info={headerInfo} img={headerImage}/>
      <Testimonial 
      testimonialRender={true}
      title={testimonial[0]}
      info1={testimonial[1]}
      info2={testimonial[2]}
      info3={testimonial[3]}/>
      <Cards cardsRender={true}/>
    </Fragment>
  )
}

export default Home