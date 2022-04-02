import React from "react";
import ButtonBox from "../ButtonBox"

function Testimonial({testimonialRender, title, info1, info2, info3, info4}) {

  return (
    <section className="testimonial">
        <h2>{title}</h2>
        <p>{info1}</p>
        <p>{info2}</p>
        <p>{info3}</p>
        {
          testimonialRender? <ButtonBox text1="Get started" text2="Contact Sales" />: <p>{info4}</p>
        }
        
    </section>
  );
}

export default Testimonial;