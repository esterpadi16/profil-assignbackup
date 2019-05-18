import React from 'react';
import { Affix, Button } from 'antd';
import absImg from './images/ester.png';

class StickyAffix extends React.Component{
render(){
    return( 
    <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
  
     <img src={absImg}width="100%"/>
     <h6>ESTER PRENATALIA ADI</h6>
     
  </Affix>
  );
}
}
export default StickyAffix;