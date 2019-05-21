import React,{Component} from 'react';
import { Row, Col } from 'antd';
class Container extends Component{
    render(){
        return(
        <Row>
            <Col span={8} push={0}> </Col>
            <Col span={16} pull={0}> </Col>
        </Row>)
    }
                
}
export default Container;