import React, { useState, useEffect } from 'react';
import '../../../bootstrap/css/bootstrap.css'
import '../../style/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useBetween } from 'use-between';
import { NavLink } from "react-router-dom";
import AddItem from './AddItem';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import BuisnessPicture from '../../images/NewMoon.jpg';


function TodoItems() {

    // HOOKS
    const st = useSelector((state) => state.dataB);
    const state = useSelector((state) => state.data);
    const { selectedCategory, selectedFilterDropdown1, setSelectedFilterDropdown1,
        selectedFilterDropdown2 } = useBetween(st.useSharingFilters)
    const { isUserOrBuisness, setisUserOrBusisness } = useBetween(state.useShareState);
    const [items, setItems] = useState((st.buisnessProfile.WorkType === 'مطعم') ? (st.items) : (st.clothesItems));

    const { itemName, setItemName } = useBetween(st.useSharingFilters);
    const { itemPhotos, setItemPhotos } = useBetween(st.useSharingFilters);
    const { itemCategory, setItemCategory } = useBetween(st.useSharingFilters);
    const { itemType, setItemType } = useBetween(st.useSharingFilters);
    const { itemSizes, setItemSizes } = useBetween(st.useSharingFilters);
    const { itemText, setItemText } = useBetween(st.useSharingFilters);
    const { itemPrice, setItemPrice } = useBetween(st.useSharingFilters);

    st.userType = (isUserOrBuisness === 'buisness') ? 'Buisness' : 'Client';
    const dispatch = useDispatch();

    // Constants And Variables
    // items = (st.buisnessProfile.WorkType === 'مطعم') ? (st.items) : (st.clothesItems);
    const addedItem = (st.buisnessProfile.WorkType === 'مطعم') ? (st.addedItem) : (st.clothesAddedItem);
    addedItem.itemId = items.length;

    var RenderedItems = items;
    let Renderedlength = RenderedItems.length;

    // MODAL SHOW FUNCTIONS
    const [show, setShow] = useState(false);
    const [showTrueModal, setShowTrueModal] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseTrueModal = () => setShowTrueModal(false);
    const handleShowTrueModal = () => {
        setShowTrueModal(true);

        // Clearing 
        setItemName('')
        setItemText('')
        setItemPrice('')
        setItemSizes([])
        setItemPhotos([])
        setItemCategory('')
        setItemType('')
    }

    setTimeout(() => {
        var skeletonTodoLoad = document.getElementsByClassName('skeleton-todo-load');
        for (let i = 0; i < 8; i++) {
            skeletonTodoLoad[i].style.display = 'none'
        }

        var listItemsLoad = document.getElementsByClassName('list-items-load');
        for (let i = 0; i < listItemsLoad.length; i++) {
            listItemsLoad[i].style.display = 'block'
        }
    }, 5000)

    useEffect(() => {
        // **SKELETON JAVASCRIPT
        // var grid = document.querySelector('.grid-animate');

        // const cardTemplate = document.getElementById('card-template')
        // for (let i = 0; i < 10; i++) {
        //     grid.appendChild(d)
        // }


        //******** Fetching from fake api "no internet when trying it" */
        // fetch("https://jsonplaceholder.typicode.com/posts")
        //     .then(res => res.json())
        //     .then(json => {
        //         alert('yeees')
        //         console.log(json)
        //         grid.innerHTML = ''
        //         posts.forEach(post => {
        //             const div = cardTemplate.content.cloneNode(true)
        //             div.querySelector('[data-title]').textContent = post.title
        //             div.querySelector('[data-body]').textContent = post.body
        //             grid.append(div)
        //         })
        //     })

    })

    // Check category (sandwich , meal , drink...)
    function checkCategory(item) {
        if (selectedCategory === 'الكل')
            return true;
        else {
            if (item.itemCategory === selectedCategory) {
                return true;
            }
            return false;
        }
    }

    // Check type (vegeterian or not)
    function checkTypeFirst(item) {
        if (selectedFilterDropdown1.type === undefined) {
            setSelectedFilterDropdown1({
                type: [],
                minPrice: selectedFilterDropdown1.minPrice,
                maxPrice: selectedFilterDropdown1.maxPrice
            });
            return true;
        }
        else if (selectedFilterDropdown1.type.length === 0) {
            return true;
        }
        else {
            for (let i = 0; i < selectedFilterDropdown1.type.length; i++) {
                if (item.itemType === selectedFilterDropdown1.type[i])
                    return true;
            }
            return false;
        }
    }

    // Check Range Price
    function checkRangePrice(item) {
        var mn = Number(selectedFilterDropdown1.minPrice);
        var mx = Number(selectedFilterDropdown1.maxPrice);
        if ((Number(item.itemPrice) >= mn) && (Number(item.itemPrice) <= mx)) {
            return true;
        }
    }

    const switchStepsBlocks = (currentStep, currentStepContentId, nextStepId, nextStepContentId) => {
        document.getElementById(currentStep).classList.remove('current-item');// remove current step tab
        document.getElementById(currentStepContentId).classList.remove('current-list');// remove current step content tab

        document.getElementById(nextStepId).classList.add('current-item');// switch to next step tab
        document.getElementById(nextStepContentId).classList.add('current-list');// switch to next step content tab

        document.getElementById('back-btn-add-item').textContent = "العودة";
    }

    const checkAddItem = (currentStep) => {

        var nextStepId;// next step tab
        var nextStepContentId;// next step content tab
        var currentStepContentId;// current step content tab
        if (currentStep === 'step-1-add-item-bar') {
            if (itemName === '') {
                // =====> ERROR
                document.getElementById('name-add-item').classList.add('is-invalid');
            }
            if (itemText === '') {
                // =====> ERROR
                document.getElementById('desc-add-item').classList.add('is-invalid');
            }
            if (itemPrice === '') {
                // =====> ERROR
                document.getElementById('price-add-item').classList.add('is-invalid');
            }
            if (itemName !== '' && itemText !== '' && itemPrice !== '') {
                currentStepContentId = "step-1-add-item-content";
                nextStepId = 'step-2-add-item-bar';
                nextStepContentId = "step-2-add-item-content";

                switchStepsBlocks(currentStep, currentStepContentId, nextStepId, nextStepContentId);
            }
        }
        else if (currentStep === 'step-2-add-item-bar') {
            if (itemType === '') {
                // =====> ERROR
                document.getElementById('type-li-validation').classList.add('is-invalid');
            }
            if (itemCategory === '') {
                // =====> ERROR
                document.getElementById('select-category-add-item').classList.add('is-invalid');
            }
            if (itemType !== '' && itemCategory !== '') {
                currentStepContentId = "step-2-add-item-content";
                nextStepId = 'step-3-add-item-bar';
                nextStepContentId = "step-3-add-item-content";

                switchStepsBlocks(currentStep, currentStepContentId, nextStepId, nextStepContentId);
            }
        }
        else if (currentStep === 'step-3-add-item-bar') {
            if (true) {
                currentStepContentId = "step-3-add-item-content";
                nextStepId = 'step-4-add-item-bar';
                nextStepContentId = "step-4-add-item-content";
                document.getElementById('next-btn-add-item').textContent = "إضافة العنصر";

                switchStepsBlocks(currentStep, currentStepContentId, nextStepId, nextStepContentId);
            }
        }
        else if (currentStep === 'step-4-add-item-bar') {
            if (true) {
                currentStepContentId = "step-4-add-item-content";
                nextStepId = 'step-1-add-item-bar';
                nextStepContentId = "step-1-add-item-content";

                const updateItems = [

                    ...items,

                    {
                        itemId: items.length + 1,
                        itemStoreName: 'New Moon',
                        itemStorePicture: BuisnessPicture,
                        itemName: itemName,
                        itemPhotos: itemPhotos,
                        itemCategory: itemCategory,
                        itemType: itemType,
                        itemText: itemText,
                        itemPrice: itemPrice,
                        itemLikes: 83,
                        itemDislikes: 10,
                        itemComments: 56,
                        itemDate: 'Mar 10 2022 10:00:00 AM',
                        itemCommentsDetails: []
                    }
                ];
                setItems(updateItems);
                //   setallMess(updatemess);

                handleClose();
                // dispatch({
                //     type: 'add-new-item',
                //     state: addedItem
                // })
                handleShowTrueModal();

                switchStepsBlocks(currentStep, currentStepContentId, nextStepId, nextStepContentId);
            }
        }

    }
    // Switch Between Steps in Modal Add Item
    const switchNextStep = () => {
        var currentStepId = document.getElementsByClassName('current-item')[0].id;// current step tab
        checkAddItem(currentStepId);
    }

    const switchBackStep = () => {
        var currentStepId = document.getElementsByClassName('current-item')[0].id;// current step tab

        var backStepId;// back step tab
        var backStepContentId;// back step content tab
        var currentStepContentId;// current step content tab
        if (currentStepId === 'step-1-add-item-bar') {
            currentStepContentId = "step-1-add-item-content";
            backStepId = 'step-4-add-item-bar';
            backStepContentId = "step-4-add-item-content";


            handleClose();
        }
        else if (currentStepId === 'step-2-add-item-bar') {
            currentStepContentId = "step-2-add-item-content";
            backStepId = 'step-1-add-item-bar';
            backStepContentId = "step-1-add-item-content";

            document.getElementById('back-btn-add-item').textContent = "إلغاء";
        }
        else if (currentStepId === 'step-3-add-item-bar') {
            currentStepContentId = "step-3-add-item-content";
            backStepId = 'step-2-add-item-bar';
            backStepContentId = "step-2-add-item-content";
        }
        else if (currentStepId === 'step-4-add-item-bar') {
            currentStepContentId = "step-4-add-item-content";
            backStepId = 'step-3-add-item-bar';
            backStepContentId = "step-3-add-item-content";

            document.getElementById('next-btn-add-item').textContent = "التالي";
        }
        document.getElementById(currentStepId).classList.remove('current-item');// remove current step tab
        document.getElementById(currentStepContentId).classList.remove('current-list');// remove current step content tab

        document.getElementById(backStepId).classList.add('current-item');// switch to back step tab
        document.getElementById(backStepContentId).classList.add('current-list');// switch to back step content tab
    }



    // .filter(checkRangePrice)
    var LastItems = items.filter(checkCategory).filter(checkTypeFirst).filter(checkRangePrice).sort((a, b) => {
        if (selectedFilterDropdown2 === 'low-to-high')
            return Number(a.itemPrice) - Number(b.itemPrice);
        else if (selectedFilterDropdown2 === 'high-to-low')
            return Number(b.itemPrice) - Number(a.itemPrice);
        else if (selectedFilterDropdown2 === 'most-likes')
            return b.itemLikes - a.itemLikes;
        else if (selectedFilterDropdown2 === 'recently') {
            let da = new Date(a.itemDate),
                db = new Date(b.itemDate);
            return db - da;
        }
        return b.itemLikes - a.itemLikes;
    });

    // LastItems = items;
    // Renderedlength = 0;
    var ListItems = Renderedlength ? (
        LastItems.length ? (
            LastItems.map(item => {
                return (
                    <div className="col list-items-load" key={item.itemId}>
                        <NavLink to="/itemInterface" state={{ itemId: item.itemId }} key={item.itemId + 1}
                            style={{ textDecoration: 'none', color: 'inherit' }} exact="true">
                            <div className="card card-me">
                                <img src={item.itemPhotos[0]} className="card-img-top card-image" alt="..." />
                                <div className="card-body" dir="rtl">
                                    <h5 className="card-title card-title-me">{item.itemName}</h5>
                                    <p className='card-price-me'>
                                        <span className='price-number'>{item.itemPrice}</span>
                                        <span className='currency-me'>ل.س</span>
                                    </p>
                                    <p className="card-text card-text-me" data-bs-toggle="tooltip" data-bs-placement="bottom" title={item.itemText}>
                                        {item.itemText.slice(0, 70)}...
                                    </p>
                                    <p dir="ltr" className='p-icons-me'>
                                        <span className='span-icons-me'>
                                            <i className="bi bi-hand-thumbs-up icon-me"></i>
                                            {item.itemLikes}
                                        </span>
                                        <span className='span-icons-me'>
                                            <i className="bi bi-hand-thumbs-down icon-me"></i>
                                            {item.itemDislikes}
                                        </span>
                                        <span className='span-icons-me'>
                                            <i className="bi bi-chat-square icon-me"></i>
                                            {item.itemCommentsDetails.length}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                )
            })
        )
            : (
                //  Filtered item not added
                <div className='empty-store list-items-load'>
                    <div><i className="bi bi-cart2 empty-store-icon"></i></div>
                    <div className='empty-store-line1'>هذا العنصر غير متوفر</div>
                    <div className='empty-store-line2'>يبدو أنك لم تقم بإضافة عنصر بهذه المكونات بعد.</div>
                    <button type='button' className='btn btn-edit btn-empty-store' onClick={handleShow}>
                        إضافة عنصر
                    </button>
                </div>
            )
    )
        : (
            //  the store contains no item
            <div className='empty-store list-items-load'>
                <div><i className="bi bi-cart2 empty-store-icon"></i></div>
                <div className='empty-store-line1'>مخزنك فارغ</div>
                <div className='empty-store-line2'>يبدو أنك لم تقم بإضافة أي عنصر حتى الآن.</div>
                <button type='button' className='btn btn-edit btn-empty-store' onClick={handleShow}>
                    إضافة عنصر
                </button>
            </div>
        )



    const tempSkeletonKeys = ['skeleton1', 'skeleton2', 'skeleton3', 'skeleton4',
        'skeleton5', 'skeleton6', 'skeleton7', 'skeleton8'];
    var skeletonItems = tempSkeletonKeys.map(skeleton => {
        return (
            <div className='col skeleton-todo-load' key={skeleton}>
                <div className="card card-me" style={{ backgroundColor: '#eee', borderColor: 'transparent' }}>
                    <div className="card-img-top card-image skeleton" alt="..." />
                    <div className="card-body" dir="rtl">
                        <h5 className="card-title card-title-me title-animate skeleton skeleton-product-title"></h5>

                        <div className="card-text card-text-me title-animate" data-bs-toggle="tooltip" data-bs-placement="bottom" title={items[0].itemText}>
                            <div className='skeleton skeleton-text'></div>
                            <div className='skeleton skeleton-text'></div>
                            <div className='skeleton skeleton-text'></div>
                            <div className='skeleton skeleton-text'></div>
                        </div>
                        <p dir="ltr" className='p-icons-me'>
                            <span className='span-icons-me skeleton skeleton-product-icon'>
                            </span>
                            <span className='span-icons-me skeleton skeleton-product-icon'>
                            </span>
                            <span className='span-icons-me skeleton skeleton-product-icon'>
                            </span>
                        </p>
                    </div>
                </div>
            </div>)

    })


    return (
        <div className='TodoItems'>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.7.2/font/bootstrap-icons.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 grid-animate" dir="rtl">
                {/* SKELETON */}
                {/* class = skeleton-todo-load */}
                {skeletonItems}

                {/* LIST ITEMS */}
                {/* class = list-items-load */}
                {ListItems}
                {
                    Renderedlength ?
                        st.userType === 'Buisness' ? (
                            <div className="col list-items-load" key='add-item' style={{ display: LastItems.length ? 'block' : 'none' }}>
                                <div className="card card-me card-add">
                                    <Button variant="primary" onClick={handleShow} className="add-icon">
                                        <i className="bi bi-plus-circle icon-add-card"></i>
                                    </Button>
                                    <Modal show={show} onHide={handleClose} size='md'>
                                        <Modal.Header dir="auto">
                                            <Modal.Title className="modal-title-me">
                                                إضافة منتج
                                                <h6 className='subheading-work-hours'>املأ الحقول بما يلائمها تبعا للخطوات التالية.</h6>
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body className="add-item-modal-body"><AddItem /></Modal.Body>
                                        <Modal.Footer dir="auto">

                                            <Button variant="secondary" className="btn-add-item-modal"
                                                onClick={switchBackStep} id="back-btn-add-item"
                                            >
                                                إلغاء
                                            </Button>
                                            <Button variant="primary" className="btn btn-edit btn-add-item-modal"
                                                onClick={switchNextStep} id="next-btn-add-item"
                                            >
                                                التالي
                                            </Button>

                                        </Modal.Footer>
                                    </Modal>

                                    {/* Modal for correct adding item */}
                                    <Modal show={showTrueModal} onHide={handleCloseTrueModal} size='md'>
                                        <Modal.Header dir="auto">
                                            <Modal.Title>
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className='true-add'>
                                                <div><i className="bi bi-check-circle true-add-icon"></i></div>
                                                <div className='true-add-line1'>تمّت إضافة المنتج بنجاح</div>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer dir="auto">
                                            <Button variant="primary" className="btn btn-edit btn-add-item-modal"
                                                onClick={handleCloseTrueModal} id="next-btn-add-item"
                                            >
                                                حسناً
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                        ) : (
                            <div></div>
                        )
                        : (<></>)
                }


            </div>

        </div>

    )
}
export default TodoItems;

