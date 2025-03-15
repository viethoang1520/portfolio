import { Row, Col } from 'antd'
import './Hero.scss'
import Button from '../Button/Button';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
function Hero() {
  return (
    <div className="hero">
      <Row className='container'>
        <Col xs={24} sm={12} md={5} lg={10} xl={14} className="introduction">
          <div className="title-block">
            <h1 className='content upper-title'>Dinh Viet Hoang</h1>
            <div className="lower-title">
              <h1 className='content style'>Back-end</h1>
              <h1 className='content lower-title'> Developer</h1>
            </div>
          </div>
          <div className="description">
            <h5 className="desc-content">My name is Viet Hoang, and I am currently a student at FPT University, where I am dedicated to expanding my knowledge and skills in various fields. I am always eager to learn and embrace new challenges, as I believe that personal growth comes from stepping outside of my comfort zone. </h5>
          </div>
          <Link>
            <Button content='Download CV' width='190px' height='50px' />
          </Link>
        </Col>
        <Col xs={24} sm={12} md={19} lg={10} xl={10} className='image-block'>
          <Image
            className='avatar-image'
            preview={false}
            width={360}
            // src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            src="https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/481247910_1395825384910068_4910217659920203763_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=PW7EobfVrZUQ7kNvgFIiTOj&_nc_oc=AdhlfqJUiSUGB3FPmRmqa00VYOcB4TzphKnbe1clH_slwmeS1_UBOoZIR10OEVwsqz8&_nc_zt=23&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=PR6f4MuE2GDK0Fq3CQlvmA&oh=00_AYHcQ9-mV2mlsbrObZnIZpxb_8I1ie6qc8DWY8rWqfEIqA&oe=67DB8B94"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Hero;