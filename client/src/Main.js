import React, {Component} from 'react'
import Header from './components/Header/Header'
import MainNavigation from "./components/Navigation/ManinNavigation";

class Main extends Component {

    render() {
        return (

            <div className='container'>
                <div className="row">
                    <Header/>
                    <MainNavigation/>
                </div>
            </div>
        )
    }
}
export default Main;