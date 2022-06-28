import { useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings';
import React, { useState, Fragment, useEffect } from 'react'
import BarChart from './BarChart';
import Rate1 from './rate1';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../Rate/rate.css'
import { NavLink } from 'react-router-dom';


function Rate(props) {
    const state = useSelector((state) => state.data);
    const [dis,setDisplay]= useState(false);
    let currentYear = new Date().getFullYear();
    var mrROfInfo = 0;
    var cnt = 0;

    const prevIcon = () => {
        mrROfInfo = mrROfInfo - 4;
    //   alert(mrROfInfo);
        cnt++;
        document.querySelector(".Rcont .carousel-control-next-icon").style.display = 'block';
        document.querySelector(".RateList").style.marginRight = mrROfInfo.toString() + '%';

        if (mrROfInfo > 0) {
            document.querySelector(".Rcont .carousel-control-next-icon").style.display = 'none';
        }
        if (cnt == 3) {
            document.querySelector(".Rcont .carousel-control-prev-icon").style.display = 'none';

        }


    }
    const nextIcon = () => {
        if (mrROfInfo != 0)
            mrROfInfo = mrROfInfo + 4;
        //   alert(mrROfInfo);
        document.querySelector(".Rcont .carousel-control-prev-icon").style.display = 'block';
        document.querySelector(".RateList").style.marginRight = mrROfInfo.toString() + '%';

        if (mrROfInfo >= 0) {
            document.querySelector(".Rcont .carousel-control-next-icon").style.display = 'none';
        }
        cnt--;

    }
    const hid=()=>{
        // alert(1);
        Array.from(document.querySelectorAll("a.nav-link"))
        .forEach(function (val) {
          val.style.borderBottom = "none";
          val.style.fontSize = '13px';
        });
    }

    return (
        <div className='Rcont'>
          
        <div className='Rates'>
           

            {/* ---------------------------- تقيمات------------------------------------- */}
            <div className='RateList'>
                <div className="RateCont">
                    <NavLink to='/Rate1'>
                        <div className='rates titleRate' >التقيمات</div>
                    </NavLink>


                    <div className='rates stars'>
                        <StarRatings

                            rating={state.outOf5}
                            starRatedColor="#FC0"
                            numberOfStars={5}
                            name='rating'
                            starDimension="20px"
                            starSpacing="0px"



                        />

                    </div>
                    <div className='rates allnum'>{state.num} ratings</div>
                    <div className='rates of5'><span className='numOf5'><h3>{state.outOf5}</h3></span>
                        <span className='outOf' > out of 5</span></div>
                </div>
                {/* ----------------------------------------------------------------------------------- */}

                {/* -----------------------------------------المتابعين------------------------------------- */}
                <div className="FollowRateCont" >

                    <NavLink to='/Rate2'   >
                        <div className='rates titleFollowRate' onClick={()=>hid()} >المتابعيين</div>
                    </NavLink >
                    <div className='currentYear'><span className='YearFollow'>  خلال عام </span>{currentYear} </div>

                


                    <BarChart selectYear={0}
                        w={240}
                        h={60}
                        svgMt={'5px'}
                        svgMr={'14.5px'}
                        paddongXscale={0.1}
                        XAxisFontS={'7.4px'}
                        colorText={'white'}
                        textMt={66}
                        textFontS={'6.5px'}
                        display={false}
                    />

                </div>

            </div>


        </div>
        </div>
    )
}
export default Rate;