import React, {Fragment} from "react"
import Header from "../components/header/Header"
import Testimonial from "../components/testimonial/Testimonial"
import aboutImage from "../assets/—Pngtree—mobile payment digital marketing online_5253198.png"

const About = () => {

  const testimonial = [
    "Why choose Nova for your business",
    "Whether you’re online, in store or both, our intuitive Dashboard puts all your business data in one place. From real-time reports to customer contacts, you have everything at your fingertips to make informed business decisions and plan for the future with confidence.",
    "It’s your business—so you should be able to run and grow it with tools that serve you, not the other way around. We have a broad set of flexible tools ready for nearly any job, and you only ever pay for what you need.",
    "You’re never locked in to using exclusively Nova solutions. We work seamlessly with hundreds of third-party technologies (and counting) to streamline the way you like to work and save you time.",
    "Nova was established to give every business owner an easier way to take credit cards. We’ve grown our commitment since, offering a complete suite of business tools and equitable loans that give every eligible business with a dream access to funding. From side gigs to sports stadiums, we’re helping power businesses to succeed on their own terms."
  ]

  const aboutTitle = "It´s time to be part of a new world. You have everything in your hands"

  return (
    <Fragment>
      <Header info={aboutTitle} img={aboutImage}/>
      <Testimonial 
      testimonialRender={false}
      title={testimonial[0]}
      info1={testimonial[1]}
      info2={testimonial[2]}
      info3={testimonial[3]}
      info4={testimonial[4]}/>
    </Fragment>
  )
}

export default About