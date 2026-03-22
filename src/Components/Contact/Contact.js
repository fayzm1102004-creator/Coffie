import React from 'react';
import overlaycenter from '../../img/overlay-bottom.png';
import overlaycenter2 from '../../img/overlay-top.png';
import ExampleCarouselImageone from '../../img/carousel-1.jpg';
// Make sure this line is commented out or removed: // import bg from '../../img/bg.jpg';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { IoMdCheckmark } from 'react-icons/io';
import Container from 'react-bootstrap/Container';

import './Contact.css'; // This path depends on where you save Contact.css

function Contact() {
  return (
    <>
      <div className="page-header">
        <img src={ExampleCarouselImageone} alt="carousel" />
        <div className="overlay"></div>
      </div>

      <Container className="contact-section-wrapper" fluid="md">
        <div className="contact-section-bg">
          {/* CONFIRM THIS LINE IS ABSENT: <img src={bg} alt="contact background" /> */}
          <div className="bg-overlay"></div>
          <img className="overlay-img-bottom" src={overlaycenter} alt="bottom overlay" />
          <img className="overlay-img-top" src={overlaycenter2} alt="top overlay" />
        </div>

        <div className="contact-content-wrapper">
          <div className="contact-text-side">
            <h1 className="h1-form">30% OFF</h1>
            <h2 className="h2-form">For Online Reservation</h2>
            <p className="color-p">
              Lorem justo clita erat lorem labore ea, justo dolor lorem <br />
              ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat
              <br /> justo sed sed diam. Ea et erat ut sed diam sea
            </p>
            <p className="color-p">
              <IoMdCheckmark size={25} color="#DA9F5B" className="io-checkmark" />
              Lorem ipsum dolor sit ame
            </p>
            <p className="color-p">
              <IoMdCheckmark size={25} color="#DA9F5B" className="io-checkmark" />
              Lorem ipsum dolor sit ame
            </p>
            <p className="color-p">
              <IoMdCheckmark size={25} color="#DA9F5B" className="io-checkmark" />
              Lorem ipsum dolor sit ame
            </p>
          </div>

          <div className="contact-form-side">
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Col>
                  <Form.Control type="text" placeholder="Your Name" className="input" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Col>
                  <Form.Control type="email" placeholder="Your Email" className="input" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Col>
                  <Form.Control type="date" className="input" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Col>
                  <Form.Control type="time" className="input" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Col>
                    <Form.Select aria-label="Number of persons" className="input">
                        <option>Number of Persons</option>
                        <option value="1">One Person</option>
                        <option value="2">Two Persons</option>
                        <option value="3">Three Persons</option>
                        <option value="4">Four Persons</option>
                        <option value="5">Five Persons</option>
                    </Form.Select>
                </Col>
              </Form.Group>
              <button type="submit" className="btn btn-primary w-100 py-3 mt-3">
                Book Now
              </button>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Contact;