import {Row, Col, Image} from 'antd';
import img1 from '../../static/media/pictures/1.png'
import img2 from '../../static/media/pictures/2.png'
import img3 from '../../static/media/pictures/3.png'
import img4 from '../../static/media/pictures/4.png'
import img5 from '../../static/media/pictures/5.png'
import img6 from '../../static/media/pictures/6.png'
import gameplay from '../../static/media/video/gameplay.mp4'

const GameplayComponent = () => {
  return (
    <>
    <div className='title'>
        <h1>Геймплей</h1>
    </div>
    <div className='content'>
        <h2>
            Скриншоты из игры
        </h2>
        <Row>
            <Col span={12}>
                <Image src={img1} alt={""}/>
            </Col>
            <Col span={12}>
                <Image src={img2} alt={""}/>
            </Col>
        </Row>
        <Row>
            <Col span={12}>
                <Image src={img3} alt={""}/>
            </Col>
            <Col span={12}>
                <Image src={img4} alt={""}/>
            </Col>
        </Row>
        <Row>
            <Col span={12}>
                <Image src={img5} alt={""}/>
            </Col>
            <Col span={12}>
                <Image src={img6} alt={""}/>
            </Col>
        </Row>
        <h2 style={{marginBottom: 0}}>
            Видео геймлея
        </h2>
        <Row>
            <Col span={24}>
                <video width="750" height="500" controls >
                <source src={gameplay} type="video/mp4"/>
                </video>
            </Col>
        </Row>


    </div>
    </>
  );
};

export default GameplayComponent;
