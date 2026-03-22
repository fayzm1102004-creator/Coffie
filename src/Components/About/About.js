import React from 'react'
import  './../Home/Home.css'
import coffee from '../../img/about.png'
import ExampleCarouselImageone from '../../img/carousel-1.jpg';
import Carousel from 'react-bootstrap/Carousel';

import { IoMdCheckmark } from "react-icons/io";

function About() {
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
    <div className=' f-container mt-5'>


<div className='text-center  '>

  <h3 >About Us</h3>
  <h1>Serving Since 1950</h1>
</div>


<div className='d-flex   align-items-center'>
{/**container cards About  */}

<div>
  <h2 className='color-h2'>Our Story</h2>
<p className='color-s'>Eos kasd eos dolor vero vero,<br></br>
lorem stet diam rebum. Ipsum <br></br>amet sed vero dolor sea</p>
<p className='color-p'>
Takimata sed vero vero no sit sed, 
<br></br>
justo clita duo no duo amet et, 
<br></br>
nonumy kasd sed dolor eos diam 
<br></br>
lorem eirmod. Amet sit amet amet 
<br></br>
no. Est nonumy sed labore eirmod 
<br></br>
sit magna. Erat at est justo sit ut. 
<br></br>
Labor diam sed ipsum et eirmod
</p>
<button className='btn-1'>learn more</button>
</div>
<div>
<img src={coffee} alt='coffee'/>

</div>
<div>

<h2 className='color-h2'>Our Vision</h2>
  <span className='color-p'>
    Invidunt lorem justo sanctus clita. 
     <br></br>
     Erat lorem labore ea, justo dolor 
     <br></br>
     lorem ipsum ut sed eos, ipsum et 
     <br></br>
     dolor kasd sit ea justo. Erat justo sed 
     <br></br>
     sed diam. Ea et erat ut sed diam sea 
     <br></br>
     ipsum est dolor
    </span>
  <p className='color-s'><IoMdCheckmark size={25} color='orange'/>Lorem ipsum dolor sit amet</p>
  <p className='color-s'><IoMdCheckmark size={25} color='orange'/>Lorem ipsum dolor sit amet</p>
  <p className='color-s'><IoMdCheckmark size={25} color='orange'/>Lorem ipsum dolor sit amet</p>
  <button className='btn-2'>learn more</button>
</div>
</div>
</div></>
  )
}

export default About