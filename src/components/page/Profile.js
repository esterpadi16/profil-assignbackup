import React,{Component} from 'react';
import { Row, Col} from 'antd';
import CollapseAntd from '../component-asset/CollapseAntd';
import StickyAffix from '../component-asset/StickyAffix';
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;


class Profile extends Component{
    render(){
        return(
            <div className="intro-section" id="home-section">
            <p>Align Top</p>
              <Row type="flex" justify="center" align="middle"data-aos="fade-right">
                <Col span={10}>
                  <DemoBox value={100}>
                  
                    <h1>ABOUT</h1>
                    <p className="mb-5">
                        <CollapseAntd></CollapseAntd>
                    </p>
                  </DemoBox>
                </Col>
                
                <Col span={10}>
                  <DemoBox value={80}>
                    <StickyAffix/>
                  </DemoBox>
                </Col>
              </Row>
              <Row>
                  <Col span={10}></Col>
              </Row>
           
          </div>
          
        )
    }
}

export default Profile;