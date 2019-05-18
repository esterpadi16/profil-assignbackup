import React,{Component} from 'react';
import { Row, Col, Drawer } from 'antd';
import absImg from '../images/7.png';
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

class Home extends Component{
    render(){
        return( 
          <div className="intro-section" id="home-section">
            <p>Align Top</p>
              <Row type="flex" justify="center" align="middle"data-aos="fade-up">
                <Col span={10}>
                  <DemoBox value={100}>
                  <div className="container">
                  
                    <h1>LIFE IS TOO SHORT</h1>
                    <p className="mb-5">“If you can’t explain it simply, you don’t understand it well enough.” –Albert Einstein</p>
                  </div>
                  </DemoBox>
                </Col>
                
                <Col span={10}>
                  <DemoBox value={80}>
                    <img src={absImg}width="100%"/>
                  </DemoBox>
                </Col>
              </Row>
           
          </div>
          
        )
    }
}
export default Home;
   
