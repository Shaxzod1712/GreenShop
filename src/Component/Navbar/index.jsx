import React from "react";
import './style.css'
import logo from'../../assets/imgs/logo.png'
import {ReactComponent as Search} from'../../assets/icons/search.svg'
import {ReactComponent as Trolley} from'../../assets/icons/trolley.svg'
import {ReactComponent as Logout} from'../../assets/icons/logout.svg'



class Navbar extends React.Component{
    render(){
        return(
            <div className="Container_Navbar">
                <div className="wrapper con1">
                    <img src={logo} alt="" className="logo1" />
                    GREENSHOP
                </div>
                <div className="wrapper con2">
                    <div className="con2_1">Home</div>
                    <div className="con2_1">Shop</div>
                    <div className="con2_1">Plant Care</div>
                    <div className="con2_1">Blogs</div>
                </div>
                <div className="wrapper con3">
                    <Search/>
                    <Trolley className='icontrolly'/>
                    <button className="button1">
                        <Logout/>Login
                    </button>
                </div>
            </div>
        )
    }
}

export default Navbar