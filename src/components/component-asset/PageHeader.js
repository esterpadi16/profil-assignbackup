import React,{Component} from 'react';
import { Menu} from 'antd';
import {Link} from 'react-router-dom';

class PageHeader extends Component {
  constructor(){
    super();
    this.state = {
      menu:[
        {url:'/home', name:'Home'},
        {url:'/profile', name:'Profile'},
        {url:'/portofolio',name:'Portofolio'},
        {url:'/contact',name:'Contact'},
        {url:'/skills', name:'Skills'},
      ]
    }
  }
   render() {
    return (
      <Menu mode="horizontal">
          {this.state.menu.map((data) => {
              return(
                  <Menu.Item key={data.name}>
                      <Link to={data.url}>{data.name}</Link>
                  </Menu.Item>
              )
          })}

      </Menu>
  );
}
}

export default PageHeader;