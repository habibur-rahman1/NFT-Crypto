import React from 'react'
import bgimggg from "../assets/image/woodframe-01.png"
import imggg from "../assets/image/713442.png"
import imggg2 from "../assets/image/Icon ionic-md-jet.png"
import Header from '../components/Header'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Purchese() {
  return (
    <div>
        
      
        
      <header>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <span class="CryptoGame">
              Crypto<span class="text-style-1">Game</span>
            </span>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
      </header>
        


<div class="first__unit">
        <div class="container">
            <div class="unit__inner">
                <div class="preview__title">
                    <p>ATTACKING</p>
                    <p>Defensive</p>
                    <p>Generation</p>
                </div>
                <div class="preview" style={{marginBottom: "115px"}}>
                    <div class="row">
                        {
                            [1,2,3].map(item => <div class="col-md-4">
                            <div class="box">
                                <div class="box__chg">
                                    <p>202</p>
                                    <div class="icons"> <a href="#"> -</a> <a href="#"><i class="fa-solid fa-plus"></i></a></div>
                                </div>
                                <div class="box__pre" 
                                style={{backgroundImage: `url(${bgimggg})`,
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    height: "304px",
                                    maxWidth: "391px",
                                    margin: "auto",
                                    position: "relative"}}
                                    >

                                <div class="inner__box">
                                    <img src={imggg} alt="image"/>
                                </div>

                                <div class="preview__content">
                                    <div class="content">
                                        <h4>Mountain Land</h4>
                                        <a class="first__child" href="#"><img src={imggg2} alt="img"/>Land Attack: 1</a>
                                        <a class="last__child" href="#"><img src={imggg2} alt="img"/>Land Attac: 2</a>
                                    </div>
                                </div>

                                <div class="preview__button">
                                    <a href="#">200 Leaf</a>
                                </div>

                            </div>
                            </div>
                        </div>)
                        }
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
<div class="first__unit">
        <div class="container">
            <div class="unit__inner">
                
                <div class="preview" style={{marginBottom: "115px", border: "none"}}>
                    <div class="row">
                        {
                            [1,2,3].map(item => <div class="col-md-4">
                            <div class="box">
                                <div class="box__chg">
                                    <p>202</p>
                                    <div class="icons"> <a href="#"> -</a> <a href="#"><i class="fa-solid fa-plus"></i></a></div>
                                </div>
                                <div class="box__pre" 
                                style={{backgroundImage: `url(${bgimggg})`,
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    height: "304px",
                                    maxWidth: "391px",
                                    margin: "auto",
                                    position: "relative"}}
                                    >

                                <div class="inner__box">
                                    <img src={imggg} alt="image"/>
                                </div>

                                <div class="preview__content">
                                    <div class="content">
                                        <h4>Mountain Land</h4>
                                        <a class="first__child" href="#"><img src={imggg2} alt="img"/>Land Attack: 1</a>
                                        <a class="last__child" href="#"><img src={imggg2} alt="img"/>Land Attac: 2</a>
                                    </div>
                                </div>

                                <div class="preview__button">
                                    <a href="#">200 Leaf</a>
                                </div>

                            </div>
                            </div>
                        </div>)
                        }
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
<div class="first__unit">
        <div class="container">
            <div class="unit__inner">
                
                <div class="preview" style={{marginBottom: "115px", border: "none"}}>
                    <div class="row">
                        {
                            [1,2,3].map(item => <div class="col-md-4">
                            <div class="box">
                                <div class="box__chg">
                                    <p>202</p>
                                    <div class="icons"> <a href="#"> -</a> <a href="#"><i class="fa-solid fa-plus"></i></a></div>
                                </div>
                                <div class="box__pre" 
                                style={{backgroundImage: `url(${bgimggg})`,
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    height: "304px",
                                    maxWidth: "391px",
                                    margin: "auto",
                                    position: "relative"}}
                                    >

                                <div class="inner__box">
                                    <img src={imggg} alt="image"/>
                                </div>

                                <div class="preview__content">
                                    <div class="content">
                                        <h4>Mountain Land</h4>
                                        <a class="first__child" href="#"><img src={imggg2} alt="img"/>Land Attack: 1</a>
                                        <a class="last__child" href="#"><img src={imggg2} alt="img"/>Land Attac: 2</a>
                                    </div>
                                </div>

                                <div class="preview__button">
                                    <a href="#">200 Leaf</a>
                                </div>

                            </div>
                            </div>
                        </div>)
                        }
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- first unit section end here -->

    <!-- middle unit start here --> */}
    <div class="middle__unit">
        <div class="container">
            <div class="middle__inner">
                
               
                
            
                <div class="section__foot">
                    <a href="#">Confirm Total Purchase 1200 Leaf</a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Purchese