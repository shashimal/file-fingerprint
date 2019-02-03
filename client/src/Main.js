import React, {Component} from 'react'
import Header from './components/Header/Header'
import Uploader from './components/Upload/Uploader'

class Main extends Component {

    render() {
        return (

            <div className='container'>
                <div className="row">
                    <Header/>
                    <Uploader/>
                </div>
            </div>
        )
    }

}
export default Main;