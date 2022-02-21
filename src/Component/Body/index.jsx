import React from "react";
import './style.css';



class Body extends React.Component{
    render(){
        return(
            <div className="container_body">
                <div className="bodywrapper1">
                    <div className="categories">
                        <h4>Categories</h4>
                        <div className="categories_body">
                            <div className="categories_body1">
                                <p>House Plants</p>
                                <p>Potter Plants</p>
                                <p>Seeds</p>
                                <p>Small Plants</p>
                                <p>Big Plants</p>
                                <p>Succulents</p>
                                <p>Terrariums</p>
                                <p>Gardening</p>
                                <p>Accersories</p>
                            </div>
                            <div className="categories_body2">
                                <p>(33)</p>
                                <p>(12)</p>
                                <p>(65)</p>
                                <p>(39)</p>
                                <p>(23)</p>
                                <p>(17)</p>
                                <p>(19)</p>
                                <p>(13)</p>
                                <p>(18)</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="bodywrapper2">
                    <div className="mininavbar">
                        <div className="mininavbar_1">
                            <p>All plants</p>
                            <p>New Arrivals</p>
                            <p>Sale</p>
                        </div>
                        <div className="mininavbar_2">
                            <p>Short by: Default sorting  \/</p>
                        </div>
                    </div>
                    <div className="bodyfoto">

                    </div>
                </div>
            </div>
        )
    }
}

export default Body