import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
      <h1>Check Out These Learning Resources</h1>     
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
             src="images/img-9.jpg"
             text="Reading Books"
             label="Reading"
             path="/services"
            />
           
            <CardItem 
             src="images/img-2.jpg"
             text="Enrol in an online course"
             label="Studying"
             path="/services"
            />
           
          </ul>
          <ul className="cards__items">
            <CardItem 
             src="images/img-9.jpg"
             text="Reading Books"
             label="Reading"
             path="/services"
            />
           
            <CardItem 
             src="images/img-2.jpg"
             text="Enrol in an online course"
             label="Studying"
             path="/services"
            />
            <CardItem 
             src="images/img-2.jpg"
             text="Enrol in an online course"
             label="Studying"
             path="/services"
            />
           
          </ul>
        </div>    
      </div>   
    </div>
  )
}

export default Cards
