import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './likeProducts.scss'
import ShowMore from 'react-show-more-button';
import sadSmail from '../photo/frowning_face.gif'
import WOW from 'wowjs';
function LikeProducts(props) {
    const state = useSelector((state) => state.data);
    const [items, setItems] = useState(state.currentUser[0].likedProducts);
    const [btnName, setbtnName] = useState('عرض المزيد');
    const cnt = () => {
        if (btnName == 'عرض المزيد')
            setbtnName('عرض الاقل')
        else
            setbtnName('عرض المزيد')
    }
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    setTimeout(() => {
        var skeletonTodoLoad = document.getElementsByClassName('skeleton-sugg-prod-load-profile');
        for (let i = 0; i < skeletonTodoLoad.length; i++) {
            skeletonTodoLoad[i].style.display = 'none'
        }

        var listItemsLoad = document.getElementsByClassName('prod-sugg-load-profile');
        for (let i = 0; i < listItemsLoad.length; i++) {
            listItemsLoad[i].style.display = 'block'
        }
    }, 5000)

    const tempSkeletonLikeProdKeys = ['skeletonLikeProd1', 'skeletonLikeProd2', 'skeletonLikeProd3', 'skeletonLikeProd4',
        'skeletonLikeProd5', 'skeletonLikeProd6', 'skeletonLikeProd7', 'skeletonLikeProd8'];

    var skeletonProd = tempSkeletonLikeProdKeys.map(skeleton => {
        return (
            <div className="SuggProducts skeleton skeleton-sugg-prod-load-profile" key={skeleton}>

                <div className='imgProd skeleton' />
                <div className="info title-animate">
                    <div className='nameProd skeleton skeleton-text skeleton-text-sugg' style={{ opacity: '.7' }}></div>
                    <div className='storeProd skeleton skeleton-text skeleton-text-sugg' style={{ opacity: '.7' }}></div>
                    <div className='typeProd skeleton skeleton-text skeleton-text-sugg' style={{ opacity: '.7' }}></div>
                </div>
            </div>
        )
    });

    const ListItems = items.length ? (
        items.map(item => {

            return (
                <div className="SuggProducts prod-sugg-load-profile" key={item.id}>

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
    ) : (

        <p><bdi> لا توجد منتجات اعجبتك حتى الآن!!<img src={sadSmail} className='sadSmail'></img></bdi></p>

    )
    const styleBtn = {

        background: '#47A851',
        color: 'white',
        width: '130px',
        border: 'none',
        borderRadius: '50px',
        paddingBottom: '6px',


    }
    const styleBtnHover = {
        background: 'white',
        color: '#47A851',


    }
    return (
        <div className='LikeProd'>
            <ShowMore maxHeight={450}

                className='ListLikeProd'
                onChange={() => cnt()}
                button={
                    <button style={styleBtn} className="btnSeeMore">{btnName}</button>}
            >
                <div className='ContSuggProd col-lg-7'>
                    {skeletonProd}
                    {ListItems}
                </div>
            </ShowMore>
        </div>
    )
}
export default LikeProducts;