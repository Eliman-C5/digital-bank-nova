import React, {Fragment} from "react";
import CardWindow from "./CardWindow";
import uuid from "uuid/v4"
import cardProduct from "../../assets/—Pngtree—digital marketing bulb element_2079819.png";

function Cards({cardsRender}) {

  const infoCard = [
  {
    text: "Take payments safel and securely, wheter you´re selling in person or onlinne", 
    id: uuid(),
    img: "https://cdn.pixabay.com/photo/2019/08/27/07/59/electronic-4433604__340.jpg"
  },
  {
    text: "Your payments, business, banking accounts, and cash flow, synced together seamlessly",
    id: uuid(),
    img: "https://cdn.pixabay.com/photo/2018/05/17/20/49/cryptocurrency-3409641__340.jpg"
  }, 
  {
    text: "We design and build our hardware in-house, so it all works seamlessly", 
    id: uuid(), 
    img: "https://cdn.pixabay.com/photo/2019/08/12/13/27/hand-4401240__340.jpg"
  }];

  const infoCardProducts = [
    {
    id: uuid(),
    img: "https://cdn.pixabay.com/photo/2017/02/14/07/26/singapore-2064905_960_720.jpg"
  }
  ]
  
  if (cardsRender) {
      return (
        <Fragment>
          <h2 className="card-title">Areas where we are operating</h2>
          <section className="cards">
          {
            infoCard.map((info) => (
              <CardWindow 
                windowOption={true}
                classProp="card-window"
                key={info.id} 
                id={info.id} 
                info={info.text}
                img={info.img}
              />)
            )
          }
          </section>
          <p className="card-section">
          We offer you a lot of services such as Inventory, Online Store, Dashboard ad analytics, Marketing and Payment integration, among other things.
          Get contact with different people around the world to create a good team and change the world.
          You can start selling with Nova and improve your company. Everybody needs a road to walk and Nova offers you that road.
          <br />
          You will get tools that improve your statitics.
          Take secure payments from customers, clients, and more.
          Keep customers coming back to your business with personal touches and rewards.
          Take care of your team with tools to schedule, manage and pay your staff.
          <br />
        </p>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
        <h2 className="card-title">Our Story starts with you</h2>
        <p className="card-section">We design and build our tools—so you can run your business with sleek devices and a customizable website that look and feel good. It makes it easy for your team and your customers, too.
        Nova Online works for allkinds of businesses—retail,restaurants, services—withoutcostly customization or add ons. Get orders to your customers in lots of ways by offering shipping, pickup, delivery, and even QR code ordering.</p>
        <p className="card-section">Expand your reach and sell more using seamless integrations with Google, Instagram, Facebook, and more. Built-in SEO tools make it easy for shoppers to find your business on search engines.
        Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast.
        </p>
        <section className="cards-products">
          {
            infoCardProducts.map((info) => (
            <CardWindow 
              classProp="cards-window"
              key={info.id} 
              id={info.id} 
              img={info.img}
              windowOption={false}
            />
            ))
          }
        </section>
        <section className="cards-products section-product">
          <h1 className="products-title">“This is the most user-friendly software I’ve found. I’ve tried others and given up. But I completed my website on Nova!”</h1>
          <div className="products-img">
            <img src={cardProduct} alt="product pic"/>
          </div>
        </section>
        <section className="cards-products">
          <h1 className="products-title">Start selling online today</h1>
          <p className="card-section">Launch a free eCommerce website with Nova Online. No monthly fees or startup costs. Pay only when you make a sale—just 2.9% + 30¢ per transaction.
          Get access to the entire suite of integrated Nova solutions to help you run your business. Integration between Nova Online and all Nova point of sale systems makes inventory management easy. Subscribe to Nova Marketing and easily send email promotions to your customers using the contact information in Nova Customer Directory. Create coupons, gift cards, or use Nova Loyalty to offer a rewards program for online and in-person purchases.
          </p>
        </section>
      </Fragment>
      )
    }
}

export default Cards;