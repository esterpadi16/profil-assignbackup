import React,{Component} from 'react';
import { Pagination } from 'antd';

class Pagination extends Component{
render(){
    return(<Pagination defaultCurrent={1} total={4} />);
}
}