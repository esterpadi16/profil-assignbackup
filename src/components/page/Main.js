import React from 'react'
import {Switch,Route} from 'react-router-dom';
import Home from "./Home";
import Profile from "./Profile";
import Contact from "./Contact";
import Portofolio from "./Portofolio";
import Skills from"./Skills";

class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/portofolio" component={Portofolio}/>
                <Route path="/skills" component={Skills}/>
            </Switch>
        )
    }
}

export default Main;