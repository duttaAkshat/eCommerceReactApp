import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://removal.ai/wp-content/uploads/2021/12/eCommerce-product-images-cover.png"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={450}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="55667788"
            title="Sony cyber Shot ZR522 Compact Digital Camera"
            price={15700}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReojqmz-El0QZpB6dqo7Lzos16QKaIR0bsBA&usqp=CAU"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={2390}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="One Plus WR-677 Smart watch"
            price={3000}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={4999}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={93500}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={79599}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFX8WXm3-GPo4MgD-kE7JizJY50mdMI9GonA&usqp=CAU"
          />
          <Product
            id="93847621"
            title="JBL J2 Wireless Noise-Canceling Headphones"
            price={5499}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSeXLwBmjf4Efs8DJ-sFEJl9MyFYtb1FAgRzqwvN1FgXdH2DyA15h_JBlXXtYRQI_tYxldmJKp93_mL7RELTwpZKfivDSzAnTcKhKQNJE1YglWM9A0iWYDVnxI"
          />

          <Product
            id="84759302"
            title="LKC Smart Home Security Camera System"
            price={3999}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDGBsTUQzQa86cy1f6BIwLPZi5H-UzTkBXA&usqp=CAU"
          />
        </div>

        <div className="home__row">
          <Product
            id="67584930"
            title="HouseWood Gourmet Coffee Sampler Pack"
            price={329}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWNW8ixX8txMGlMvPILW8MGCmljCoRULQmw&usqp=CAU"
          />

          <Product
            id="12038475"
            title="Vaku Fitness Tracker with Heart Rate Monitor"
            price={7199}
            rating={3}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5vwiXCwnlJbNhLq4tEG-YDxrNw2QJcZJJQ&usqp=CAU"
          />

          <Product
            id="23987456"
            title="Mivi Portable Bluetooth Speaker"
            price={899}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZB1JqohyI41mDp3xINU0nil_q4g8-My28pQ&usqp=CAU"
          />
        </div>
        <div className="home__row">
          <Product
            id="98765432"
            title="Goldline Stylish Leather Laptop Bag"
            price={2390}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmIAGIMxySaKXe2K8fWWIKOT5np08pemfEyA&usqp=CAU"
          />

          <Product
            id="45678901"
            title="HP 355 Sleek Wireless Mouse"
            price={750}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSobZ1r5hmF_oiZElxKSd3QvToeoj8z5dt2mg&usqp=CAU"
          />

          <Product
            id="11223344"
            title="Chinahouse Ceramic Cooking Pot Set"
            price={500}
            rating={3}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsyDcJV3HA6EvT4DYDyVvip-BY8EgGcBHP8g&usqp=CAU"
          />
        </div>
        <div className="home__footer">
          <hr />

          <p>
            Made with 🖤 by{" "}
            <a target="blank" href="https://www.linkedin.com/in/akshat-dutta/">
              Akshat Dutta
            </a>
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Home;
