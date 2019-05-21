import React,{Component} from 'react';
import { Row, Col,Button} from 'antd';
import {Link} from 'react-router-dom';
import absImg from '../images/5.webp';
import { Typography } from 'antd';

const { Title } = Typography;
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

class Home extends Component{
    render(){
        return( 
          <div className="intro-section" id="home-section">
              <Row type="flex" justify="center" align="middle"data-aos="fade-up">
                <Col span={10}>
                  <DemoBox value={100}>
                  <div className="container">
                    <Title>LIFE IS TOO SHORT</Title>
                    <p className="mb-5">“If you can’t explain it simply, you don’t understand it well enough.” –Albert Einstein</p>
                  </div>
                  <Button type="primary" shape="round" icon="download" size="large"style={{backgroundColor:'#000',margin:'2vh',width:'20vh'}}href="https://drive.google.com/file/d/1SOU7FuNL6PwzPHmFthVWdFubSprFCTIc/view?usp=sharing"target="_blank"> Download</Button>
                  <Link to ='/profile'>
                  <Button type="primary" shape="round" icon="caret-right" size="large"style={{backgroundColor:'#fff',color:'#000',borderColor:'#000',width:'20vh',margin:'2vh'}}>Profil</Button></Link>
                  </DemoBox>
                </Col>
                
                <Col span={10}>
                  <DemoBox value={80}>
                    <img src={absImg}alt="HomeImg"width="100%"/>
                  </DemoBox>
                </Col>
              </Row>
          </div>
        )
    }
}
export default Home;
   
