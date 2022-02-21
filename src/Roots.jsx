import React from "react";
import './roots.css'
import Navbar from './Component/Navbar'
import Main from './Component/Main'
import Body from './Component/Body'


class Root extends React.Component{
    render(){
        return(
            <div className="rootcontainer">
                <Navbar/>
                <Main/>
                <Body/>
            </div>
        )
    }
}
export default Root