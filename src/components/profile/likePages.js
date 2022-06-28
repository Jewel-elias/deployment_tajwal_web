import React, { useEffect, useState } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Arrow from 'react-arrows'
import ShowMore from 'react-show-more-button';
import './likePages.scss'
import { useSelector } from 'react-redux';
import '../sugg/sugg.scss'
import sadSmail from '../photo/frowning_face.gif'
import WOW from 'wowjs';
//  const getItems = () =>
//     Array(20)
//         .fill(0)
//         .map((_, ind) => ({ id: `element-${ind}` }));
function LikePages(props) {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])
    //     const state = useSelector((state) => state.data);
    //     const [items, setItems] = useState(state.currentUser[0].followPages);

    //     const [idItem, setid] = useState(0);
    //     const [selected, setSelected] = useState([]);
    //     const [position, setPosition] = useState(0);

    //     const isItemSelected = (id) => !!selected.find((el) => el === id);

    //     const handleClick =
    //         (id) =>
    //             ({ getItemById, scrollToItem }) => {
    //                 const itemSelected = isItemSelected(id);

    //                 setSelected((currentSelected) =>
    //                     itemSelected
    //                         ? currentSelected.filter((el) => el !== id)
    //                         : currentSelected.concat(id)
    //                 );
    //             };
    // const listlikePages=items.length?(
    // items.map((item) => {
    //     return(
    //     <LikePage
    //         itemId={item.id} // NOTE: itemId is required for track items
    //         imgPage={item.photo}
    //         name={item.name}
    //         loc={item.Loc}
    //         key={item.id}

    //     />
    // )})
    // ):(
    //     <p><bdi>لا توجد صفحات تابعتها حتى الآن!!<img src={sadSmail} className='sadSmail'></img></bdi></p>

    //     )

    //     return (
    //         <div >
    //             <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} rtl='true' scrollContainerClassName='ScrollLikeP'
    //             transitionDuration={1500}>
    //                {listlikePages}
    //             </ScrollMenu>
    //         </div>
    //     );


    //     function LeftArrow() {

    //         const { isFirstItemVisible, scrollPrev } =
    //             React.useContext(VisibilityContext);
    //         if (idItem > 3)
    //             return (
    //                 <div disabled={isFirstItemVisible} onClick={() => scrollPrev()} className='arrow'>


    //                     <i class="fa fa-angle-left left-arrow-like-pages" ></i>
    //                 </div>
    //             );
    //         else
    //             return (
    //                 <div></div>
    //             )
    //     }

    //     function RightArrow() {
    //         const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

    //         if (idItem > 3)
    //             return (
    //                 <div disabled={isLastItemVisible} onClick={() => scrollNext()} className='arrow'>

    //                     <i class="fa fa-angle-right right-arrow-like-pages"></i>

    //                 </div>
    //             );
    //         else
    //             return (
    //                 <div></div>
    //             )
    //     }

    //     function LikePage({ imgPage, name, loc, itemId }) {

    //         setid(itemId);
    //         return (
    //             <div className='likeP'

    //                 style={{
    //                     width: '300px',


    //                 }}
    //                 tabIndex={0}
    //             >
    //                 <div className="card">
    //                     <img src={imgPage} className='imgPage'></img>
    //                     <div className='nameAndLoc namePage'>{name}</div>
    //                     <div className='nameAndLoc locPage'>{loc}</div>
    //                     {/* <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
    //                 <div>selected: {JSON.stringify(!!selected)}</div> */}
    //                 </div>
    //                 {/* <div
    //                     style={{
    //                         height: '200px',
    //                     }}
    //                 /> */}
    //             </div>
    //         );
    //     }
    // }

    setTimeout(() => {
        var skeletonTodoLoad = document.getElementsByClassName('skeleton-sugg-load-profile');
        for (let i = 0; i < skeletonTodoLoad.length; i++) {
            skeletonTodoLoad[i].style.display = 'none'
        }

        var listItemsLoad = document.getElementsByClassName('pages-sugg-load-profile');
        for (let i = 0; i < listItemsLoad.length; i++) {
            listItemsLoad[i].style.display = 'block'
        }

    }, 5000)

    const state = useSelector((state) => state.data);
    const [items, setItems] = useState(state.currentUser[0].followPages);
    const [btnName, setbtnName] = useState('عرض المزيد');
    const cnt = () => {
        if (btnName == 'عرض المزيد')
            setbtnName('عرض الاقل')
        else
            setbtnName('عرض المزيد')
    }

    const tempSkeletonLikePagesKeys = ['skeletonLikePages1', 'skeletonLikePages2', 'skeletonLikePages3', 'skeletonLikePages4',
        'skeletonLikePages5', 'skeletonLikePages6', 'skeletonLikePages7', 'skeletonLikePages8'];

    var skeletonPages = tempSkeletonLikePagesKeys.map(skeleton => {
        return (
            <div className="SuggPages skeleton skeleton-sugg-load-profile" key={skeleton}>
                <div className='imgPage skeleton' />
                <div className="info title-animate">
                    <div className='namePages skeleton skeleton-text skeleton-text-sugg'></div>
                    <div className='typePages skeleton skeleton-text skeleton-text-sugg'></div>
                    <div className='typePages skeleton skeleton-text skeleton-text-sugg'></div>
                </div>
            </div>
        )
    });

    const LikePages =
        items.map(item => {

            return (
                <div className="SuggPages pages-sugg-load-profile" key={item.id}>
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
    const styleBtn = {

        background: '#47A851',
        color: 'white',
        width: '130px',
        border: 'none',
        borderRadius: '50px',
        paddingBottom: '6px',
    }
    return (
        <div className='LikeP'>
            <div className='ContSugg '>
                <ShowMore maxHeight={450}

                    className='ListLikeProd'
                    onChange={() => cnt()}
                    button={
                        <button style={styleBtn} className="btnSeeMore">{btnName}</button>}
                >
                    <div className="ContSuggPages col-lg-8">
                        {skeletonPages}
                        {LikePages}
                    </div>
                </ShowMore>
            </div>
        </div>
    )
}
export default LikePages;