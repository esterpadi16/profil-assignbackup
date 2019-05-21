import React from 'react';
import { Affix} from 'antd';
import absImg from '../images/ester.webp';

class StickyAffix extends React.Component{
render(){
    return( 
    <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
  
     <img src={absImg}Alt="imgg"width="100%"/>
     <h6>ESTER PRENATALIA ADI</h6>
     
  </Affix>
  );
}
}
export default StickyAffix;