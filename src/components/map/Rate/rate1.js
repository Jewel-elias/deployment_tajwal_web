import { useSelector } from 'react-redux';
import Rate from './rate'
import '../Rate/rate1.scss'
import BarChart from './BarChart';
import StarRatings from 'react-star-ratings';
import { useEffect, useRef, useState } from 'react';
import StarImg from '../../photo/starImg.jpg'
import BarChartImg from '../../photo/followImg.jpg'
import { useLocation, useParams } from 'react-router-dom';
import { useBetween } from 'use-between';

function Rate1(props) {
    const st = useSelector((state) => state.data);
    const loc = useLocation();
    const idS = useRef(0);
    const { idStore, setidStore } = useBetween(st.useShareState);
    const name = loc.pathname;

    useEffect(() => {
        if (name == '/Rate2') {
            starAndBar('.barCh1', '.stars1Cont', '.rate1.Follower', '.rate1.Rating');
        }
        else {
            starAndBar('.stars1Cont', '.barCh1', '.rate1.Rating', '.rate1.Follower');
        }
        
    }, [])
    var cnt=0;
    
    
        for (const feature of st.stores.features){
          if(idStore==feature.properties.id)
          idS.current=cnt;
          cnt++;
        }
       
    const starAndBar = (show, hid, withBg, withoutBg) => {
        document.querySelector(show).style.display = 'block';
        document.querySelector(hid).style.display = 'none';
        document.querySelector(withBg).style.background = "linear-gradient(to right, "
            + 'rgb(233, 232, 232)' + ", "
            + 'rgb(161, 202, 165)' + ","
            + 'rgb(231, 228, 228)' + ")";
        document.querySelector(withoutBg).style.background = 'white';
    }

    const str5 = st.stores.features[idS.current].properties.strRate.str5.toString();
    const str4 = st.stores.features[idS.current].properties.strRate.str4.toString();
    const str3 = st.stores.features[idS.current].properties.strRate.str3.toString();
    const str2 = st.stores.features[idS.current].properties.strRate.str2.toString();
    const str1 =st.stores.features[idS.current].properties.strRate.str1.toString();
    // const hid = () => {

    //     document.querySelector('.Rate').style.display = 'none'
    // }
   
    return (

        <div className='Rates1'>
            {/* <div className='close' onClick={hid}>&times;</div> */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
            <div className='rates1'>
                <div className='rate1 Follower bg-blur'
                    onClick={() => starAndBar('.barCh1', '.stars1Cont', '.rate1.Follower', '.rate1.Rating')}>المتابعيين
                </div>
                <div className='rate1 Rating'
                    onClick={() => starAndBar('.stars1Cont', '.barCh1', '.rate1.Rating', '.rate1.Follower')}>التّقييمات
                </div>
            </div>
            <div className='stars1Cont' style={{ display: name == '/Rate1' ? 'block' : 'none' }} >
                <img src={StarImg} className=' col-lg-6 starImg'></img>
                <div className='contS'>
                    <div className=' stars1' >
                        <StarRatings

                            rating={st.stores.features[idS.current].properties.outOf5}
                            starRatedColor="#FC0"
                            numberOfStars={5}
                            name='rating'
                            starDimension="32px"
                            starSpacing="1px"

                        />
                        <div className=' col-lg-6 rates of5'><h4>{st.stores.features[idS.current].properties.outOf5}/5</h4><span className=' rates allnum '>({st.stores.features[idS.current].properties.num})</span></div>
                    </div>
                 
                </div>

                <div className='stars2'>

                    <div className='Flex'>
                        <div className="fas fa-star" ></div><span className='num num1'>5</span>
                        <div className="progress str5">
                            <div className="progress-bar bg-darkopacity " role="progressbar"
                                style={{ width: `${str5}%` }} aria-valuenow={str5} aria-valuemin="0" aria-valuemax="100">{str5}%</div>
                        </div></div>

                    <div className='Flex'>
                        <div className="fas fa-star" ></div><span className='num num2'>4</span>
                        <div className="progress str4 ">
                            <div className="progress-bar bg-darkopacity " role="progressbar"
                                style={{ width: `${str4}%` }} aria-valuenow={str4} aria-valuemin="0" aria-valuemax="100">{str4}%</div>
                        </div></div>

                    <div className='Flex'>
                        <div className="fas fa-star" ></div><span className='num num2'>3</span>
                        <div className="progress str3 ">
                            <div className="progress-bar bg-darkopacity" role="progressbar"
                                style={{ width: `${str3}%` }} aria-valuenow={str3} aria-valuemin="0" aria-valuemax="100">{str3}%</div>
                        </div></div>

                    <div className='Flex'>
                        <div className="fas fa-star" ></div><span className='num num2'>2</span>
                        <div className="progress str2 ">
                            <div className="progress-bar bg-darkopacity" role="progressbar"
                                style={{ width: `${str2}%` }} aria-valuenow={str2} aria-valuemin="0" aria-valuemax="100">{str2}%</div>
                        </div></div>

                    <div className='Flex'>
                        <div className="fas fa-star" ></div><span className='num num2'>1</span>
                        <div className="progress str1">
                            <div className="progress-bar bg-darkopacity" role="progressbar"
                                style={{ width: `${str1}%` }} aria-valuenow={str1} aria-valuemin="0" aria-valuemax="100">{str1}%</div>
                        </div></div>

                </div>


            </div>
            <div className='barCh1' style={{ display: name == '/Rate2' ? 'block' : 'none' }} >
                <img src={BarChartImg} className='BarChartImg'></img>
                
                <BarChart
                    selectYear={0}
                    w={490}
                    h={190}
                    svgMt={'110px'}
                    svgMr={'-20px'}
                    paddongXscale={0.3}
                    XAxisFontS={'13.5px'}
                    colorText={'black'}
                    textMt={205}
                    textFontS={'14.5px'}
                    display={true}
                />
            </div>
        </div>
    )
}
export default Rate1;
