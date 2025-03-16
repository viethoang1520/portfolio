import { Row, Col } from 'antd'
import './Hero.scss'
import Button from '../../components/Button/Button';
import { Image } from 'antd';
import image from '../../assets/images/avatar.jpg'
import cv from '../../assets/cv.pdf'
function Hero() {
  return (
    <div className="hero">
      <Row className='container hero-block'>
        <Col data-aos="fade-up" data-aos-delay="100" sm={12} md={12} lg={10} xl={10} className='image-block'>
          <Image
            className='avatar-image'
            preview={false}
            width={600}
            src={image}
          />
        </Col>
        <Col data-aos="fade-up" data-aos-delay="200" sm={12} md={12} lg={14} xl={14} className="introduction">
          <div className="title-block">
            <h1 className='content upper-title'>Hi there👋, I'm Viet Hoang</h1>
            <div className="lower-title">
              <h1 className='content style'>Back-end</h1>
              <h1 className='content lower-title'> Developer</h1>
            </div>
          </div>
          <div className="description">
            <h5 className="desc-content">"Welcome to my portfolio! My name is Viet Hoang, and I am currently a student at FPT University, where I am dedicated to expanding my knowledge and skills in various fields. I am always eager to learn and embrace new challenges, as I believe that personal growth comes from stepping outside of my comfort zone."</h5>
          </div> 
          <a href={cv} download='Đinh Việt Hoàng-NodeJS_Devloper.pdf'>
            <Button content='Download CV' width='175px' height='45px' icon='material-symbols:download' />
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default Hero;