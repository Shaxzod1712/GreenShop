import React from "react";
import mainbig from '../../assets/imgs/main-big-flower.png'
import mainsmall from '../../assets/imgs/main-small-flower.png'
import './style.css'



class Main extends React.Component{
    render(){
        return(
            <div className="container_main">
                <div className="mainwrapper1">
                    <h4>WELCOME TO GREENSHOP</h4>
                    <h1>LET'S MAKE A BATTER PLANET</h1>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use <br /> our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                    <button>SHOP NOW</button>
                </div>
                <div className="mainwrapper2">
                   <img src={mainsmall} alt="" className="mainsmall"/>
                   <img src={mainbig} alt="" className="mainbig" />
                </div>
            </div>
        )
    }
}

export default Main