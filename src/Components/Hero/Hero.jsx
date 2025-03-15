import { Row, Col } from 'antd'
import './Hero.scss'
import Button from '../Button/Button';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import image from '../../assets/images/avatar.jpg'
import cv from '../../assets/cv.pdf'
function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'VietHoang_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className="hero">
      <Row gutter={[0, 0]} className='container hero-block'>
        <Col sm={12} md={12} lg={10} xl={10} className='image-block'>
          <Image
            className='avatar-image'
            preview={false}
            width={600}
            src={image}
          />
        </Col>
        <Col sm={12} md={12} lg={14} xl={14} className="introduction">
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
          <Link>
            <Button onClick={handleDownloadCV} content='Download CV' width='185px' height='45px' icon='material-symbols:download' />
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Hero;