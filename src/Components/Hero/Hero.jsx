import { Row, Col } from 'antd'
import './Hero.scss'
import Button from '../Button/Button';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
function Hero() {
  return (
    <div className="hero">
      <Row className='container'>
        <Col xs={24} sm={12} md={10} lg={10} xl={14} className="introduction">
          <div className="title-block">
            <h1 className='content upper-title'>Đinh Việt Hoàng</h1>
            <div className="lower-title">
              <h1 className='content style'>Back-end</h1>
              <h1 className='content lower-title'> Developer</h1>
            </div>
          </div>
          <div className="description">
            <h5 className="desc-content">My name is Viet Hoang, and I am currently a student at FPT University, where I am dedicated to expanding my knowledge and skills in various fields. I am always eager to learn and embrace new challenges, as I believe that personal growth comes from stepping outside of my comfort zone. </h5>
          </div>
          <Link>
            <Button content='CONTACT ME' />
          </Link>
        </Col>
        <Col xs={24} sm={12} md={10} lg={10} xl={10} className='image-block'>
          <Image
            className='avatar-image'
            preview={false}
            width={360}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Hero;