import React, {Component} from 'react';
import './App.css';
import Main from './components/page/Main';
import PageHeader from './components/PageHeader';
import DrawerComp from './components/drawer';



class App extends Component {
    render() {
        return (
            <div>
                <PageHeader/>
                <Main/>
            </div>
        )
    }
}

export default App;
