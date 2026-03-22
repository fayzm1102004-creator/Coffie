import React from 'react'
import  './Services.module.css'
import { FaAmbulance } from "react-icons/fa";
import { FaTable } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaCoffee } from "react-icons/fa";
import ExampleCarouselImageone from '../../img/carousel-1.jpg';
import Carousel from 'react-bootstrap/Carousel';
import servicesone from '../../img/service-1.jpg'
import servicestwo from '../../img/service-2.jpg'
import servicesthree from '../../img/service-3.jpg'
import servicesfour from '../../img/service-4.jpg'
function Services() {
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
    <div className='f-container '>
<div className='text-center mt-5 '>
  <h3 >Our Services</h3>
  <h1>Fresh & Organic Beans</h1>
</div>
<div className='d-flex-ser'>
{/** container card services */}
<div>
{/** part one serv */}
<div className='d-flex w-100 gap-5  align-items-center ;'>
  <img  src={servicesone} width={'180px'} alt='delivery'/>

<div><h1 className='fs-4 fw-bold'> <  FaAmbulance  size={35} color='orange' />  Fastest Door</h1>
<h1 className='fs-4 fw-bold'>Delivery</h1>
<p>
  Sit lorem ipsum et diam elitr 
  <br></br>
  est dolor sed duo. Guberg sea 
  <br></br>
  et et lorem dolor sed est sit 
  <br></br>
  invidunt, dolore tempor diam 
  <br></br>
  ipsum takima erat tempor
  
  </p>
</div>
</div><div className='d-flex w-100 gap-5  align-items-center ;'>
  <img  src={servicestwo} width={'180px'} alt='delivery'/>

<div><h1 className='fs-4 fw-bold'> <  LiaCertificateSolid  size={35} color='orange'/> Fastest Door</h1>
<h1 className='fs-4 fw-bold'>Delivery</h1>
<p>
  Sit lorem ipsum et diam elitr 
  <br></br>
  est dolor sed duo. Guberg sea 
  <br></br>
  et et lorem dolor sed est sit 
  <br></br>
  invidunt, dolore tempor diam 
  <br></br>
  ipsum takima erat tempor
  </p>
</div>
</div>
</div>
<div>
  
<div className='d-flex w-100 gap-5  align-items-center ;'>
  <img  src={servicesthree} width={'180px'} alt='delivery'/>
<div><h1 className='fs-4 fw-bold'> < FaCoffee size={35} color='orange'/> Fastest Door</h1>
<h1 className='fs-4 fw-bold'>Delivery</h1>
<p className=''>
  Sit lorem ipsum et diam elitr 
  <br></br>
  est dolor sed duo. Guberg sea 
  <br></br>
  et et lorem dolor sed est sit 
  <br></br>
  invidunt, dolore tempor diam 
  <br></br>
  ipsum takima erat tempor
  </p>
</div>
</div>

<div className='d-flex w-100 gap-5  align-items-center ;'>
  <img  src={servicesfour} width={'180px'} alt='delivery'/>
<div><h1 className='fs-4 fw-bold' > <  FaTable size={35} color='orange'/> Fastest Door</h1>
<h1 className='fs-4 fw-bold'>Delivery</h1>
<p className=''>
  Sit lorem ipsum et diam elitr 
  <br></br>
  est dolor sed duo. Guberg sea 
  <br></br>
  et et lorem dolor sed est sit 
  <br></br>
  invidunt, dolore tempor diam 
  <br></br>
  ipsum takima erat tempor
  </p>
</div>
</div>
</div>
</div>
</div>

    </>
  )
}

export default Services