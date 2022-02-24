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
import m12 from '../../assets/imgs/super-sale-flower.png'
import m13 from '../../assets/imgs/Super-Sale-Top.png'


class Body extends React.Component{
    constructor(){
        super()
        this.state = {
            count: 0,
        }
    }
    render(){
        const decriment =()=>{
            if(this.state.count > 0){
            this.setState({
                    count : this.state.count - 1

                })
            }
        }
        const incriment = ()=>{
            if(this.state.count < 10){
            this.setState({
                count : this.state.count + 1  
            })
        }
        }
        return(
            <div className="container_body">
                <div className="container-body">

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
                    <div className="salephoto">
                        <div className="salephotobackgraund">

                        </div>
                        <img src={m13} alt="" className="salephoto2"/>
                        <img src={m12} alt="" className="salephoto1"/>
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
                                <div className="bodyfoto1_">
                                    <div className="bodyfoto1_right">
                                        <h5>Barberton Daisy</h5>
                                        <p>$119.00</p>
                                    </div>
                                    <div className="bodyfoto1_left">
                                        <h1 className="decriment" onClick={decriment}>-</h1>
                                        <h1 className="count">{this.state.count}</h1>
                                        <h1 className="incriment" onClick={incriment}>+</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="bodyfoto1">
                                <img src={m2} alt="" />
                                <div className="bodyfoto1_">
                                    <div className="bodyfoto1_right">
                                        <h5>Angel Wing Begonia</h5>
                                        <p>$169.00</p>
                                    </div>
                                    <div className="bodyfoto1_left">
                                        <h1 className="decriment" onClick={decriment}>-</h1>
                                        <h1 className="count">{this.state.count}</h1>
                                        <h1 className="incriment" onClick={incriment}>+</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="bodyfoto1">
                                <img src={m3} alt="" />
                                <div className="bodyfoto1_">
                                    <div className="bodyfoto1_right">
                                        <h5>African Violet</h5>
                                        <p>$199.00</p>
                                    </div>
                                    <div className="bodyfoto1_left">
                                        <h1 className="decriment" onClick={decriment}>-</h1>
                                        <h1 className="count">{this.state.count}</h1>
                                        <h1 className="incriment" onClick={incriment}>+</h1>
                                    </div>
                                </div>
                            </div>

                            
                        </div>

                        <div className="body__">
                            <div className="bodyfoto1">
                                <img src={m4} alt="" />
                                <div className="bodyfoto1_">
                                    <div className="bodyfoto1_right">
                                        <h5>Beach Spider Lily</h5>
                                        <p>$129.00</p>
                                    </div>
                                    <div className="bodyfoto1_left">
                                        <h1 className="decriment" onClick={decriment}>-</h1>
                                        <h1 className="count">{this.state.count}</h1>
                                        <h1 className="incriment" onClick={incriment}>+</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="bodyfoto1">
                                <img src={m5} alt="" />
                                <div className="bodyfoto1_">
                                    <div className="bodyfoto1_right">
                                        <h5>Blushing Bromeliad</h5>
                                        <p>$139.00</p>
                                    </div>
                                    <div className="bodyfoto1_left">
                                        <h1 className="decriment" onClick={decriment}>-</h1>
                                        <h1 className="count">{this.state.count}</h1>
                                        <h1 className="incriment" onClick={incriment}>+</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="bodyfoto1">
                                <img src={m6} alt="" />
                                <div className="bodyfoto1_">
                                    <div className="bodyfoto1_right">
                                        <h5>Aluminum Plant</h5>
                                        <p>$179.00</p>
                                    </div>
                                    <div className="bodyfoto1_left">
                                        <h1 className="decriment" onClick={decriment}>-</h1>
                                        <h1 className="count">{this.state.count}</h1>
                                        <h1 className="incriment" onClick={incriment}>+</h1>
                                    </div>
                                </div>
                            </div>

                            
                        </div>

                        <div className="body__">
                            <div className="bodyfoto1">
                                <img src={m7} alt="" />
                                <div className="bodyfoto1_">
                                    <div className="bodyfoto1_right">
                                        <h5>Bird's Nest Fern</h5>
                                        <p>$99.00</p>
                                    </div>
                                    <div className="bodyfoto1_left">
                                        <h1 className="decriment" onClick={decriment}>-</h1>
                                        <h1 className="count">{this.state.count}</h1>
                                        <h1 className="incriment" onClick={incriment}>+</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="bodyfoto1">
                                <img src={m8} alt="" />
                                <div className="bodyfoto1_">
                                    <div className="bodyfoto1_right">
                                        <h5>Broadleaf Lady Palm</h5>
                                        <p>$59.00</p>
                                    </div>
                                    <div className="bodyfoto1_left">
                                        <h1 className="decriment" onClick={decriment}>-</h1>
                                        <h1 className="count">{this.state.count}</h1>
                                        <h1 className="incriment" onClick={incriment}>+</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="bodyfoto1">
                                <img src={m9} alt="" />
                                <div className="bodyfoto1_">
                                    <div className="bodyfoto1_right">
                                        <h5>Chinese Evergreen</h5>
                                        <p>$39.00</p>
                                    </div>
                                    <div className="bodyfoto1_left">
                                        <h1 className="decriment" onClick={decriment}>-</h1>
                                        <h1 className="count">{this.state.count}</h1>
                                        <h1 className="incriment" onClick={incriment}>+</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
                <div className="bodyend">
                    <div className="bodyend1">
                    <h2>1</h2>
                    <h2>2</h2>
                    <h2>3</h2>
                    <h2>4</h2>
                    <h2>{'>'}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body