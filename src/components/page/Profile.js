import React,{Component} from 'react';
import { Row, Col, Drawer, Pagination, Collapse } from 'antd';

import CollapseAntd from '../CollapseAntd';
import StickyAffix from '../StickyAffix';
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;


class Profile extends React.Component{
    render(){
        return(
            <div className="intro-section" id="home-section">
            <p>Align Top</p>
              <Row type="flex" justify="center" align="middle"data-aos="">
                <Col span={10}>
                  <DemoBox value={100}>
                  <div className="container">
                  
                    <h1>ABOUT</h1>
                    <p className="mb-5">
                        <CollapseAntd></CollapseAntd>
                    </p>
                  </div>
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