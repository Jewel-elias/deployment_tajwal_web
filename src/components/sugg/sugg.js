import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import SmileSugg1 from '../photo/smiling_face_with_sunglasses.gif';
import SmileSugg2 from '../photo/smiling_face_with_halo.gif';
import ShowMore from 'react-show-more-button';
import WOW from 'wowjs';
import './sugg.scss'



const Sugg = () => {
    const state = useSelector((state) => state.data);
    const SuggPag = state.SuggPages;
    const SuggProducts = state.SuggProducts;
    const [btnName, setbtnName] = useState('عرض المزيد');
    const [btnName1, setbtnName1] = useState('عرض المزيد');

    setTimeout(() => {
        var skeletonTodoLoad = document.getElementsByClassName('skeleton-sugg-load');
        for (let i = 0; i < skeletonTodoLoad.length; i++) {
            skeletonTodoLoad[i].style.display = 'none'
        }

        var listItemsLoad = document.getElementsByClassName('pages-sugg-load');
        for (let i = 0; i < listItemsLoad.length; i++) {
            listItemsLoad[i].style.display = 'block'
        }

        skeletonTodoLoad = document.getElementsByClassName('skeleton-sugg-prod-load');
        for (let i = 0; i < skeletonTodoLoad.length; i++) {
            skeletonTodoLoad[i].style.display = 'none'
        }

        listItemsLoad = document.getElementsByClassName('prod-sugg-load');
        for (let i = 0; i < listItemsLoad.length; i++) {
            listItemsLoad[i].style.display = 'block'
        }
    }, 5000)

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])
    const cnt = () => {
        if (btnName == 'عرض المزيد')
            setbtnName('عرض الاقل')
        else
            setbtnName('عرض المزيد')
    }
    const cnt1 = () => {
        if (btnName1 == 'عرض المزيد')
            setbtnName1('عرض الاقل')
        else
            setbtnName1('عرض المزيد')
    }
    const tempSkeletonSuggKeys = ['skeletonSugg1', 'skeletonSugg2', 'skeletonSugg3', 'skeletonSugg4',
        'skeletonSugg5', 'skeletonSugg6', 'skeletonSugg7', 'skeletonSugg8'];

    var skeletonPages = tempSkeletonSuggKeys.map(skeleton => {
        return (
            <div className="SuggPages skeleton skeleton-sugg-load" key={skeleton}>
                <div className='imgPage skeleton' />
                <div className="info title-animate">
                    <div className='namePages skeleton skeleton-text skeleton-text-sugg'></div>
                    <div className='typePages skeleton skeleton-text skeleton-text-sugg'></div>
                    <div className='typePages skeleton skeleton-text skeleton-text-sugg'></div>
                </div>
            </div>
        )
    });

    const tempSkeletonProdKeys = ['skeletonProd1', 'skeletonProd2', 'skeletonProd3', 'skeletonProd4',
        'skeletonProd5', 'skeletonProd6', 'skeletonProd7', 'skeletonProd8'];

    var skeletonProd = tempSkeletonProdKeys.map(skeleton => {
        return (
            <div className="SuggProducts skeleton skeleton-sugg-prod-load" key={skeleton}>

                <div className='imgProd skeleton' />
                <div className="info title-animate">
                    <div className='nameProd skeleton skeleton-text skeleton-text-sugg' style={{ opacity:'.7' }}></div>
                    <div className='storeProd skeleton skeleton-text skeleton-text-sugg' style={{ opacity:'.7' }}></div>
                    <div className='typeProd skeleton skeleton-text skeleton-text-sugg' style={{ opacity:'.7' }}></div>
                </div>
            </div>
        )
    });
    const SuggPages =
        SuggPag.map(item => {

            return (
                <div className="SuggPages pages-sugg-load" key={item.id}>
                    <div className="ratePages">{item.rate} <i className='fa fa-star '></i></div>
                    <img src={item.photo} className='imgPage'></img>
                    <div className="info">
                        <div className='namePages'>{item.name}</div>
                        <div className='typePages'> <i className={`${item.type == 'مطعم' ? "fa fa-cutlery" : "fas fa-tshirt"}`}></i>{item.type}</div>
                        <div className='typePages'> <i className="fa fa-map-marker" aria-hidden="true"></i> {item.Loc} </div>
                    </div>
                </div>


            )
        })
    const SuggProd =
        SuggProducts.map(item => {

            return (
                <div className="SuggProducts prod-sugg-load" key={item.id}>

                    <img src={item.photo} className='imgProd'></img>
                    <div className="info">
                        <div className='nameProd'>{item.name}</div>
                        <div className='storeProd'>
                            {/* <i className={`${item.type == 'مطعم' ? "fa fa-cutlery" : "fas fa-tshirt"}`}></i> */}
                            {item.store}</div>
                        <div className='typeProd'> {item.type} </div>
                    </div>
                </div>


            )
        })
    const styleBtn = {

        background: '#47A851',
        color: 'white',
        width: '140px',
        border: 'none',
        borderRadius: '50px',
        paddingBottom: '6px',



    }
    return (
        <div className="ContSugg">

            <div className="suggToday"><bdi>إلى أين تريد الذهاب اليوم؟</bdi>
                <img src={SmileSugg1} className='SmileSugg'></img>
            </div>
            <div className="thingToTry"><bdi>  أماكن قد ترغب بزيارتها:</bdi> </div>
            <ShowMore maxHeight={450}

                className='ListLikeProd'
                onChange={() => cnt()}
                button={
                    <button style={styleBtn} className="btnSeeMore">{btnName}</button>}
            >
                <div className="ContSuggPages col-lg-7 ">
                    {skeletonPages}
                    {SuggPages}
                </div>
            </ShowMore>
            {/* ---------------------------------------------------------------- */}
            <div className="suggToday SProd"><bdi> هل من منتجات تريد تجربتها اليوم؟</bdi>
                <img src={SmileSugg2} className='SmileSugg'></img>
            </div>
            <div className="thingToTry"><bdi> منتجات قد ترغب بتجربتها: </bdi></div>
            <ShowMore maxHeight={450}

                className='ListLikeProd'
                onChange={() => cnt1()}
                button={
                    <button style={styleBtn} className="btnSeeMore">{btnName1}</button>}
            >
                <div className="ContSuggProd col-lg-7">
                    {skeletonProd}
                    {SuggProd}
                </div>
            </ShowMore>
        </div>
    )
}
export default Sugg;