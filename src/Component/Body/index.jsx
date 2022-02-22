import React from "react";
import './style.css';
import m1 from '../../assets/imgs/m1.png'
import m2 from '../../assets/imgs/m2.png'
import m3 from '../../assets/imgs/m3.png'
import m4 from '../../assets/imgs/m4.png'
import m5 from '../../assets/imgs/m5.png'
import m6 from '../../assets/imgs/m6.png'
import m7 from '../../assets/imgs/m7.png'
import m8 from '../../assets/imgs/m8.png'
import m9 from '../../assets/imgs/m9.png'


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
                        <h4>Prise Range</h4>
                        <div className="categories_body_prise">
                            <input type="range"/>
                            <p>Prise: $39-$1230</p>
                            <button>Filter</button>
                        </div>
                        <h4>Size</h4>
                        <div className="categories_body_size">
                            <div className="categories_body_size1">
                                <p>Small</p>
                                <p>Medium</p>
                                <p>Large</p>
                            </div>
                            <div className="categories_body_size2">
                                <p>(119)</p>
                                <p>(89)</p>
                                <p>(78)</p>
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
                        <div className="body__">
                            <div className="bodyfoto1">
                                <img src={m1} alt="" />
                                <h5>Barberton Daisy</h5>
                                <p>$199.00</p>
                            </div>
                            <div className="bodyfoto1">
                                <img src={m2} alt="" />
                                <h5>Angel Wing Begonia</h5>
                                <p>$169.00</p>
                            </div>
                            <div className="bodyfoto1">
                                <img src={m3} alt="" />
                                <h5>African Violet</h5>
                                <p>$199.00</p>
                            </div>
                        </div>

                        <div className="body__">
                            <div className="bodyfoto1">
                                <img src={m4} alt="" />
                                <h5>Beach Spider Lily</h5>
                                <p>$129.00</p>
                            </div>
                            <div className="bodyfoto1">
                                <img src={m5} alt="" />
                                <h5>Blushing Bromeliad</h5>
                                <p>$139.00</p>
                            </div>
                            <div className="bodyfoto1">
                                <img src={m6} alt="" />
                                <h5>Aluminum Plant</h5>
                                <p>$179.00</p>
                            </div>
                        </div>

                        <div className="body__">
                            <div className="bodyfoto1">
                                <img src={m7} alt="" />
                                <h5>Bird's Nest Fern</h5>
                                <p>$39.00</p>
                            </div>
                            <div className="bodyfoto1">
                                <img src={m8} alt="" />
                                <h5>Broadleaf Lady Palm</h5>
                                <p>$59.00</p>
                            </div>
                            <div className="bodyfoto1">
                                <img src={m9} alt="" />
                                <h5>Chinese Evergreen</h5>
                                <p>$99.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body