import React, { useState } from "react"
import "./header.css"

const Header = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              <img src='./images/logo.png' alt='' />
            </div>
            {/*<ul className='flexSB'>*/}
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <a href='/FERR/'>Home</a>
              </li>
              <li>
                <a href='/FERR/'>Series</a>
              </li>
              <li>
                <a href='/FERR/'>Movies</a>
              </li>
              <li>
                <a href='/FERR/'>Pages</a>
              </li>
              <li>
                <a href='/FERR/'>Pricing</a>
              </li>
              <li>
                <a href='/trendingCRUD'>TrendingCRUD</a>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          <div className='account flexSB'>
            <i className='fa fa-search'></i>
            <i class='fas fa-bell'></i>
            <i className='fas fa-user'></i>
            <button>Subscribe Now</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header