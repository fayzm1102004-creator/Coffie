import React from 'react'
import  '../Home/Home.css'
import Carousel from 'react-bootstrap/Carousel';

import menu1 from '../../img/menu-1.jpg'
import menu2 from '../../img/menu-2.jpg'
import menu3 from '../../img/menu-3.jpg'
import ExampleCarouselImageone from '../../img/carousel-1.jpg';

function Menu() {
  return (
   <>
    <div style={{ position: 'relative' }}>
            <img src={ExampleCarouselImageone} className="d-block w-100" alt="carousel"  style={{height:"400px",objectFit:'cover'}}/>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(95, 68, 52, 0.4)',
              }}
            />
            <Carousel.Caption className="position-absolute top-50 start-50 translate-middle text-center">
              
              
            </Carousel.Caption>
          </div>
   <div className='f-container mt-5'>
<div className='text-center  '>
  <h3 >Menu & Pricing</h3>
  <h1>Competitive Pricing</h1>
</div>
{/**  card menu*/}
<div className='d-flex-ser img-menu '>

  { /* contaioenr cards */}
<div>
  {/* part one card */}
<div className='d-flex gap-5'>
  <img src={menu1} alt='menu'  />
  <div>
<h1>Black Coffee</h1>
<p>Sit lorem ipsum et diam elitr est dolor sed duo<br></br>
 guberg sea et et lorem dolor</p>
  </div>
</div>
<div className='d-flex gap-5'>
  <img src={menu2} alt='menu' />
  <div>
<h1>Chocolete Coffee</h1>
<p>Sit lorem ipsum et diam elitr est dolor sed duo<br></br>
 guberg sea et et lorem dolor</p>
  </div>
</div>
<div className='d-flex gap-5'>
  <img src={menu3} alt='menu' />
  <div>
<h1>Coffee With Milk</h1>
<p>Sit lorem ipsum et diam elitr est dolor sed duo<br></br>
 guberg sea et et lorem dolor</p>
  </div>
</div>
</div>
<div>
  {/*part two cards */}
<div className='d-flex gap-5'>
  <img src={menu1} alt='menu' />
  <div>
<h1>Black Coffee</h1>
<p>Sit lorem ipsum et diam elitr est dolor sed duo<br></br>
 guberg sea et et lorem dolor</p>
  </div>
</div>
<div className='d-flex gap-5'>
  <img src={menu2} alt='menu' />
  <div>
<h1>Chocolete Coffee</h1>
<p>Sit lorem ipsum et diam elitr est dolor sed duo<br></br>
 guberg sea et et lorem dolor</p>
  </div>
</div>
<div className='d-flex gap-5'>
  <img src={menu3} alt='menu' />
  <div>
<h1>Coffee With Milk</h1>
<p>Sit lorem ipsum et diam elitr est dolor sed duo<br></br>
 guberg sea et et lorem dolor</p>
  </div>
</div>
</div>
</div>
</div>
   </>
  )
}

export default Menu