import React from 'react'
import "./Hero.css"
import Header from "./Header"
import hero_image from "./assets/hero_image.png"
import hero_image_back from "./assets/hero_image_back.png"
import Heart from "./assets/heart.png"
import Calories from "./assets/calories.png"



function Hero() {
  return (
    <div className='hero'>
        <div className="left-h">  <Header />

        <div className="the-best-ad">
          <div></div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>

          <div className='hero-text'>
            <div>
              <div><span className='stroke-text'>SHAPE </span>
              <span>YOUR</span></div>
            </div>
            <div>
              <span>
                IDEAL BODY
              </span>
            </div>
            <div>
              <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
              </div>
          </div>

          <div className="figures">
            <div>
            <span>+140</span>
            <span>EXPERT COACHES</span>
            </div>
            <div>
            <span>+978</span>
            <span>MEMBERS JOINED</span>
            </div>
            <div>
            <span>+50</span>
            <span>FITNESS PROGRAMS</span>
            </div>
          </div>

          <div className="hero-buttons">
            <buttons className="btn">Get Started</buttons>
            <buttons className="btn">Learn More</buttons>
          </div>


        </div>

        <div className="right-h">

        <button className='btn'>Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt="heart"></img>
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

          <img className='hero-image' src={hero_image} alt="hero_image"/>

          <img className='hero-image-back' src={hero_image_back} alt="hero_image_back"/>

          <div className="calories">
            <img src={Calories} alt='calories' />
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>
            
          </div>

        </div>
    </div>
  )
}

export default Hero