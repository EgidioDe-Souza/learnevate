import React from 'react'
import { Link } from 'react-router-dom'

function CardItem() {
  return (
    <React.Fragment>
      <li className="cards__item">
        <Link className="cards__item__link">
          <figure className="cards__item__pic-wrap">
             {/* <img src="/" alt="Learning Image"
            className="cards__item__img"/> */}
          </figure>
            <div className="cards__item__info">
              <h5 className="cards__item__text"></h5>
            </div>
        </Link>
      </li>   
    </React.Fragment>
  )
}

export default CardItem
