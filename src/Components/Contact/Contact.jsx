import React from 'react'
import './Contact.scss'
import Button from '../Button/Button'
import { Col, Input, Row } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { Link } from 'react-router-dom'


export default function Contact() {
  return (
    <div className="contact-block">
      <div className='contact container'>
        <div className="contact-title-container">
          <h1 data-aos="zoom-in-up" className='contact-title'><p>CONTACT</p> <p className='title-color'>ME!</p></h1>
          <div data-aos="zoom-in-up" data-aos-delay="100" className="contact-title-line"></div>
        </div>
        <Row gutter={[24, 14]} className='input-block'>
          <Col xs={24} sm={24} md={12}>
            <Input size='large' className='input-element' placeholder="Full Name" />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Input size='large' className='input-element' placeholder="Email Address" />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Input size='large' className='input-element' placeholder="Mobile Number" />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Input size='large' className='input-element' placeholder="Email Subject" />
          </Col>
          <Col xs={24} >
            <TextArea
              className='input-element'
              size='large'
              showCount
              maxLength={930}
              placeholder="Your Message"
              style={{
                height: 250,
                resize: 'none',
              }}
            />
          </Col>
        </Row>
        <Button content='SEND MESSAGE' />
      </div>
    </div>
  )
}
