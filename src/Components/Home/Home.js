import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ExampleCarouselImageone from '../../img/carousel-1.jpg';
import ExampleCarouselImagetwo from '../../img/carousel-2.jpg';
import overlaycenter from '../../img/overlay-bottom.png';
import overlaycenter2 from '../../img/overlay-top.png';
import coffee from '../../img/about.png';
import servicesone from '../../img/service-1.jpg';
import servicestwo from '../../img/service-2.jpg';
import servicesthree from '../../img/service-3.jpg';
import servicesfour from '../../img/service-4.jpg';
import menu1 from '../../img/menu-1.jpg';
import menu2 from '../../img/menu-2.jpg';
import menu3 from '../../img/menu-3.jpg';
import bg from '../../img/bg.jpg';
import client1 from '../../img/testimonial-1.jpg';
import client2 from '../../img/testimonial-2.jpg';
import client3 from '../../img/testimonial-3.jpg';
import client4 from '../../img/testimonial-4.jpg';
import { IoMdCheckmark } from "react-icons/io";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaAmbulance } from "react-icons/fa";
import { FaTable } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import './Home.css';

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <section>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {/* Slide 1 */}
          <Carousel.Item>
            <div style={{ position: 'relative' }}>
              <img src={ExampleCarouselImageone} className="d-block w-100" alt="carousel" />
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
                <h3 style={{ color: 'orange' }}>We Have Been Serving</h3>
                <h1 className="fw-bold text-white" >
                  COFFEE
                </h1>
                <h2 className="text-white">*since1950*</h2>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item>
            <div style={{ position: 'relative' }}>
              <img src={ExampleCarouselImagetwo} className="d-block w-100" alt="carousel" />
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
                <h3 style={{ color: 'orange' }}>We Have Been Serving</h3>
                <h1 className="fw-bold text-white" >
                  COFFEE
                </h1>
                <h2 className="text-white">*since1950*</h2>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>

        {/* Overlay image */}
        <div className="text-center bg-danger w-100 mt-4 z-3 ">
          <img
            className="w-100 z-1 "
            style={{
              position: 'absolute',
              bottom: '-170px',
              left: 0,
              width: '100%',
              zIndex: 1,
            }}
            src={overlaycenter}
            alt="overlay"
          />
        </div>

        {/*About */}
        <div className='f-container'>
          <div className='text-center after '>
            <h3>About Us</h3>
            <h1>Serving Since 1950</h1>
          </div>
          <div className='d-flex align-items-center'>
            {/*container cards About */}
            <div>
              <h2 className='color-h2'>Our Story</h2>
              <p className='color-s'>
                Eos kasd eos dolor vero vero,<br />
                lorem stet diam rebum. Ipsum <br />amet sed vero dolor sea
              </p>
              <p className='color-p'>
                Takimata sed vero vero no sit sed,<br />
                justo clita duo no duo amet et,<br />
                nonumy kasd sed dolor eos diam<br />
                lorem eirmod. Amet sit amet amet<br />
                no. Est nonumy sed labore eirmod<br />
                sit magna. Erat at est justo sit ut.<br />
                Labor diam sed ipsum et eirmod
              </p>
              <button className='btn-1'>learn more</button>
            </div>
            <div>
              <img src={coffee} alt='coffee' />
            </div>
            <div>
              <h2 className='color-h2'>Our Vision</h2>
              <span className='color-p'>
                Invidunt lorem justo sanctus clita.<br />
                Erat lorem labore ea, justo dolor<br />
                lorem ipsum ut sed eos, ipsum et<br />
                dolor kasd sit ea justo. Erat justo sed<br />
                sed diam. Ea et erat ut sed diam sea<br />
                ipsum est dolor
              </span>
              <p className='color-s'>
                <IoMdCheckmark size={25} color='orange' />Lorem ipsum dolor sit amet
              </p>
              <p className='color-s'>
                <IoMdCheckmark size={25} color='orange' />Lorem ipsum dolor sit amet
              </p>
              <p className='color-s'>
                <IoMdCheckmark size={25} color='orange' />Lorem ipsum dolor sit amet
              </p>
              <button className='btn-2'>learn more</button>
            </div>
          </div>
        </div>

        {/* services */}
        <div className='f-container '>
          <div className='text-center after '>
            <h3>Our Services</h3>
            <h1>Fresh & Organic Beans</h1>
          </div>
          <div className='d-flex-ser'>
            {/* container card services */}
            <div>
              {/* part one serv */}
              <div className='d-flex w-100 gap-5 align-items-center ;'>
                <img src={servicesone} width={'180px'} alt='delivery' />
                <div>
                  <h1 className='fs-4 fw-bold'>
                    {' '}
                    <FaAmbulance size={35} color='orange' /> Fastest Door
                  </h1>
                  <h1 className='fs-4 fw-bold'>Delivery</h1>
                  <p>
                    Sit lorem ipsum et diam elitr<br />
                    est dolor sed duo. Guberg sea<br />
                    et et lorem dolor sed est sit<br />
                    invidunt, dolore tempor diam<br />
                    ipsum takima erat tempor
                  </p>
                </div>
              </div>
              <div className='d-flex w-100 gap-5 align-items-center ;'>
                <img src={servicestwo} width={'180px'} alt='delivery' />
                <div>
                  <h1 className='fs-4 fw-bold'>
                    {' '}
                    <LiaCertificateSolid size={35} color='orange' /> Fastest Door
                  </h1>
                  <h1 className='fs-4 fw-bold'>Delivery</h1>
                  <p>
                    Sit lorem ipsum et diam elitr<br />
                    est dolor sed duo. Guberg sea<br />
                    et et lorem dolor sed est sit<br />
                    invidunt, dolore tempor diam<br />
                    ipsum takima erat tempor
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='d-flex w-100 gap-5 align-items-center ;'>
                <img src={servicesthree} width={'180px'} alt='delivery' />
                <div>
                  <h1 className='fs-4 fw-bold'>
                    {' '}
                    <FaCoffee size={35} color='orange' /> Fastest Door
                  </h1>
                  <h1 className='fs-4 fw-bold'>Delivery</h1>
                  <p className=''>
                    Sit lorem ipsum et diam elitr<br />
                    est dolor sed duo. Guberg sea<br />
                    et et lorem dolor sed est sit<br />
                    invidunt, dolore tempor diam<br />
                    ipsum takima erat tempor
                  </p>
                </div>
              </div>

              <div className='d-flex w-100 gap-5 align-items-center ;'>
                <img src={servicesfour} width={'180px'} alt='delivery' />
                <div>
                  <h1 className='fs-4 fw-bold'>
                    {' '}
                    <FaTable size={35} color='orange' /> Fastest Door
                  </h1>
                  <h1 className='fs-4 fw-bold'>Delivery</h1>
                  <p className=''>
                    Sit lorem ipsum et diam elitr<br />
                    est dolor sed duo. Guberg sea<br />
                    et et lorem dolor sed est sit<br />
                    invidunt, dolore tempor diam<br />
                    ipsum takima erat tempor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*discount */}
        <div className='position-relative w-100 '>
          <img src={bg} style={{ height: '500px', objectFit: 'cover' }} className="d-block w-100" alt="carousel" />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(63, 45, 35, 0.81)',
            }}
          />
          <div className="text-center bg-danger w-100 mt-4 z-3 ">
            <img
              className='w-100 z-1 '
              style={{
                position: 'absolute',
                bottom: '-10px',
                left: 0,
                width: '100%',
                zIndex: 9999,
              }}
              src={overlaycenter}
              alt="overlay"
            />
          </div>

          <div className="text-center bg-danger w-100 mt-4 z-3 ">
            <img
              className='w-100 z-1 '
              style={{
                position: 'absolute',
                top: '-5px',
                left: 0,
                width: '100%',
                zIndex: 9999,
              }}
              src={overlaycenter2}
              alt="overlay"
            />
          </div>
          <Carousel.Caption className="position-absolute top-50 start-50 translate-middle text-center">
            <h1 style={{ color: 'orange', fontSize: '75px' }}>50% OFF</h1>
            <h1 className="fw-bold fs-1 text-white">
              Sunday Special Offer
            </h1>
            <h2 className="text-white fs-4">Only for Sunday from 1st Jan to 30th Jan 2045</h2>
            <InputGroup className="mb-1">
              <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button className='btn-3' variant="outline-secondary">
                Button
              </Button>
            </InputGroup>
          </Carousel.Caption>
        </div>

        {/* menu*/}
        <div className='f-container'>
          <div className='text-center after '>
            <h3>Menu & Pricing</h3>
            <h1>Competitive Pricing</h1>
          </div>
          {/* card menu*/}
          <div className='d-flex-ser img-menu '>
            {/* contaioenr cards */}
            <div>
              {/* part one card */}
              <div className='d-flex gap-5'>
                <img src={menu1} alt='menu' />
                <div>
                  <h1>Black Coffee</h1>
                  <p>
                    Sit lorem ipsum et diam elitr est dolor sed duo<br />
                    guberg sea et et lorem dolor
                  </p>
                </div>
              </div>
              <div className='d-flex gap-5'>
                <img src={menu2} alt='menu' />
                <div>
                  <h1>Chocolete Coffee</h1>
                  <p>
                    Sit lorem ipsum et diam elitr est dolor sed duo<br />
                    guberg sea et et lorem dolor
                  </p>
                </div>
              </div>
              <div className='d-flex gap-5'>
                <img src={menu3} alt='menu' />
                <div>
                  <h1>Coffee With Milk</h1>
                  <p>
                    Sit lorem ipsum et diam elitr est dolor sed duo<br />
                    guberg sea et et lorem dolor
                  </p>
                </div>
              </div>
            </div>
            <div>
              {/*part two cards */}
              <div className='d-flex gap-5'>
                <img src={menu1} alt='menu' />
                <div>
                  <h1>Black Coffee</h1>
                  <p>
                    Sit lorem ipsum et diam elitr est dolor sed duo<br />
                    guberg sea et et lorem dolor
                  </p>
                </div>
              </div>
              <div className='d-flex gap-5'>
                <img src={menu2} alt='menu' />
                <div>
                  <h1>Chocolete Coffee</h1>
                  <p>
                    Sit lorem ipsum et diam elitr est dolor sed duo<br />
                    guberg sea et et lorem dolor
                  </p>
                </div>
              </div>
              <div className='d-flex gap-5'>
                <img src={menu3} alt='menu' />
                <div>
                  <h1>Coffee With Milk</h1>
                  <p>
                    Sit lorem ipsum et diam elitr est dolor sed duo<br />
                    guberg sea et et lorem dolor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact us */}
        {/* The main container for the Contact Us section, now better structured for CSS */}
        <div className='container position-relative'>
          {/* Background image */}
          <img src={bg} alt='contact' /> {/* No width/height here, handled by CSS */}
          
          {/* Dark overlay div */}
          <div className="contact-overlay-dark"></div> {/* New class for the dark overlay */}

          {/* Wave overlays (bottom and top) */}
          <img className='contact-overlay-bottom' src={overlaycenter} alt="overlay bottom" />
          <img className='contact-overlay-top' src={overlaycenter2} alt="overlay top" />

          {/* Text and form content container */}
          <div className='d-flex-form'>
            <div>
              <h1 className='h1-form'>30% OFF</h1>
              <h2 className='h2-form'>For Online Reservation</h2>
              <p className='color-p'>
                Lorem justo clita erat lorem labore ea, justo dolor lorem <br />
                ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat<br />
                justo sed sed diam. Ea et erat ut sed diam sea
              </p>
              <p className='color-p'>
                {' '}
                <IoMdCheckmark size={25} color='orange' />Lorem ipsum dolor sit ame
              </p>
              <p className='color-p'>
                <IoMdCheckmark size={25} color='orange' />Lorem ipsum dolor sit ame
              </p>
              <p className='color-p'>
                <IoMdCheckmark size={25} color='orange' />Lorem ipsum dolor sit ame
              </p>
            </div>

            <div className='form'>
              <Form>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                  <Col>
                    <Form.Control type="text" placeholder="name" className='input' />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 " controlId="formHorizontalPassword">
                  <Col>
                    <Form.Control type="email" placeholder="Email" className='input' />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                  <Col>
                    <Form.Control type="date" placeholder="Data" className='input' />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                  <Col>
                    <Form.Control type="time" placeholder="Data" className='input' />
                  </Col>
                </Form.Group>
                <Form.Select aria-label="Default select example" className='input'>
                  <option>person</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form>
            </div>
          </div>
        </div>

        {/*clients */}
        <div className='mt-5'>
          <div className='text-center after '>
            <h3>Testimonial</h3>
            <h1>Our Clients Say</h1>
          </div>
          {/*cards */}
          <div className='d-flex-ser gap-5 mt-5' style={{ width: '85%', margin: 'auto' }}>
            {/*card1*/}
            <div>
              <div className='d-flex gap-4 img-menu'>
                <img src={client1} alt='client1' />
                <div>
                  <h2 className='h2-client'>clinet name</h2>
                  <p>profession</p>
                </div>
              </div>
              <p>
                ipsum et dolor kasd sit ea justo. Erat<br /> justo sed sed <br />
                ipsum et dolor kasd sit ea justo. Erat<br /> justo sed sed{' '}
              </p>
            </div>
            {/*cards2 */}
            <div>
              <div className='d-flex gap-4 img-menu'>
                <img src={client2} alt='client1' />
                <div>
                  <h2 className='h2-client'>clinet name</h2>
                  <p>profession</p>
                </div>
              </div>
              <p c>
                ipsum et dolor kasd sit ea justo. Erat<br /> justo sed sed <br />
                ipsum et dolor kasd sit ea justo. Erat<br /> justo sed sed{' '}
              </p>
            </div>

            {/*cards3 */}
            <div>
              <div className='d-flex gap-4 img-menu'>
                <img src={client3} alt='client1' />
                <div>
                  <h2 className='h2-client'>clinet name</h2>
                  <p>profession</p>
                </div>
              </div>
              <p>
                ipsum et dolor kasd sit ea justo. Erat<br /> justo sed sed <br />
                ipsum et dolor kasd sit ea justo. Erat<br /> justo sed sed{' '}
              </p>
            </div>
            {/*cards4 */}
            <div>
              <div className='d-flex gap-3 img-menu'>
                <img src={client4} alt='client1' />
                <div>
                  <h2 className='h2-client'>clinet name</h2>
                  <p>profession</p>
                </div>
              </div>
              <p>
                ipsum et dolor kasd sit ea justo. Erat<br /> justo sed sed <br />
                ipsum et dolor kasd sit ea justo. Erat<br /> justo sed sed{' '}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;