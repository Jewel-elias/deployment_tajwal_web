/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../../bootstrap/css/bootstrap.css'
import '../../style/App.css';
import imagePlaceholder from '../../images/imagePlaceholder.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import WorkHours from '../WorkHours';
import MyItems from '../BuisnessItems/MyItems';
import { render } from '@testing-library/react';
import { NavLink } from 'react-router-dom';
import { useBetween } from 'use-between';
import GoogleMap from '../../../components/googleMaps/googleMaps';
import Axios from 'axios'

function SignUpBuisness() {


    // dispatch for save edits
    const dispatch = useDispatch();
    const st = useSelector((state) => state.dataB);
    const [signUpStepNumber, setSignUpStepNumber] = useState("signup-buisness-1");

    //** New Account Data
    const [shopType, setShopType] = useState("مطعم");// ما طبيعة المتجر الذي تملكه ؟
    const [shopName, setShopName] = useState("");// اسمه 
    const [shopDescription, setShopDescription] = useState("");// وصفه 
    const [shopPlaceManually, setShopPlaceManually] = useState("");// مكان يدوي
    // **************
    const [shopLocation, setShopLocation] = useState("");// مكان خريطة
    const [shopImage, setShopImage] = useState(imagePlaceholder);// صورة للمتجر 
    const [shopWorkTime, setShopWorkTime] = useState();// أوقات الدوام 
    // **************
    const [shopPhoneNumber, setShopPhoneNumber] = useState("");// رقم هاتف 
    const [shopEmail, setShopEmail] = useState("");// بريدك الالكتروني 
    const [shopPassword, setShopPassword] = useState("");// كلمة السر 
    const [shopConfirmPassword, setShopConfirmPassword] = useState("");// تأكيد كلمة السر
    // **************
    // MODAL SHOW FUNCTIONS
    // *** (Time modal)
    const [show, setShow] = useState(false);
    const state = useSelector((state) => state.data);

    const { lati, long } = useBetween(state.useShareState);
    const { isUserOrBuisness, setisUserOrBusisness } = useBetween(state.useShareState);
    const { isUserLogin, setisUserLogin } = useBetween(state.useShareState);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // *** (Map Modal)
    const [showLocationOnMap, setShowLocationOnMap] = useState(false);

    const handleCloseLocationOnMap = () => setShowLocationOnMap(false);
    const handleShowLocationOnMap = () => setShowLocationOnMap(true);
    const { signUpWelcome, setSignUpWelcome } = useBetween(st.useSharingFilters);

    useEffect(() => {
        setSignUpWelcome('اكتسب زبائن جديدة لمتجرك الخاص');
    });
    const clickField = (event, id) => {
        document.getElementById(id).classList.remove('is-invalid');
    }

    const checkCurrentStepList = (event, currentStep) => {

        var tmp = true;
        if (currentStep === "signup-buisness-1") {
            if (document.getElementById("select-category-signup").value === "") {
                tmp = false;
                document.getElementById("select-category-signup").classList.add('is-invalid');
            }
            if (document.getElementById("name-shop").value === "") {
                tmp = false;
                document.getElementById('name-shop').classList.add('is-invalid');
            }
            if (document.getElementById("desc-shop").value === "") {
                tmp = false;
                document.getElementById('desc-shop').classList.add('is-invalid');
            }

            if (tmp) {
                document.getElementById("step-1-sign-up-bar").classList.remove('current-item-sign-up');// remove current step tab
                document.getElementById("step-2-sign-up-bar").classList.add('current-item-sign-up');// switch to back step tab

                document.getElementById("step-1-sign-up").classList.remove('current-list-sign-up');// remove current step list
                document.getElementById("step-2-sign-up").classList.add('current-list-sign-up');// switch to back step list
                setSignUpStepNumber("signup-buisness-2");
            }
        }
        else if (currentStep === "signup-buisness-2") {
            if (document.getElementById("location-shop").value === "") {
                tmp = false;
                document.getElementById('location-shop').classList.add('is-invalid');
            }
            if (document.getElementById("img-sign-up").src === imagePlaceholder) {
                tmp = false;
                document.getElementById('img-input-sign-up').style.visibility = "visible";
            }

            if (tmp) {
                document.getElementById("step-2-sign-up-bar").classList.remove('current-item-sign-up');// remove current step tab
                document.getElementById("step-3-sign-up-bar").classList.add('current-item-sign-up');// switch to back step tab

                document.getElementById("step-2-sign-up").classList.remove('current-list-sign-up');// remove current step list
                document.getElementById("step-3-sign-up").classList.add('current-list-sign-up');// switch to back step list
                setSignUpStepNumber("signup-buisness-3");
                document.getElementById("next-btn-sign-up").textContent = "إنشاء";
            }
        }
        else if (currentStep === "signup-buisness-3") {
            if (document.getElementById("phone-shop").value === "") {
                tmp = false;
                document.getElementById('phone-shop').classList.add('is-invalid');
            }
            if (document.getElementById("email-shop").value === "") {
                tmp = false;
                document.getElementById('email-shop').classList.add('is-invalid');
            }
            if (document.getElementById("password-shop").value === "") {
                tmp = false;
                document.getElementById('password-shop').classList.add('is-invalid');
            }
            if (document.getElementById("confirm-password-shop").value === "") {
                tmp = false;
                document.getElementById('confirm-password-shop').classList.add('is-invalid');
            }

            if (tmp) {

                document.getElementById('x').click();
                setisUserOrBusisness('buisness');
                setisUserLogin(true);

                // connect with api || sign up new buisness account
                Axios.post('https://jsonplaceholder.typicode.com/posts',
                    {
                        // if the name is different in the api => clientType: type,...
                        shopType, shopName, shopDescription, shopPlaceManually,
                        shopLocation, shopImage, shopWorkTime, shopPhoneNumber,
                        shopEmail, shopPassword, shopConfirmPassword
                    }).then(res => console.log('Posting data',res))
                    .catch(err => console.log(err));


                // dispatch({
                //     type: 'new-buisness-account',
                //     state: {
                //         shopType, shopName, shopDescription, shopPlaceManually,
                //         shopLocation, shopImage, shopWorkTime, shopPhoneNumber,
                //         shopEmail, shopPassword, shopConfirmPassword
                //     }
                // });
            }

        }
    }

    const switchBackStep = (event, currentStep) => {
        if (currentStep === "signup-buisness-2") {
            document.getElementById("step-2-sign-up-bar").classList.remove('current-item-sign-up');// remove current step tab
            document.getElementById("step-1-sign-up-bar").classList.add('current-item-sign-up');// switch to back step tab

            document.getElementById("step-2-sign-up").classList.remove('current-list-sign-up');// remove current step list
            document.getElementById("step-1-sign-up").classList.add('current-list-sign-up');// switch to back step list
            setSignUpStepNumber("signup-buisness-1");
        }
        else if (currentStep === "signup-buisness-3") {
            document.getElementById("step-3-sign-up-bar").classList.remove('current-item-sign-up');// remove current step tab
            document.getElementById("step-2-sign-up-bar").classList.add('current-item-sign-up');// switch to back step tab

            document.getElementById("step-3-sign-up").classList.remove('current-list-sign-up');// remove current step list
            document.getElementById("step-2-sign-up").classList.add('current-list-sign-up');// switch to back step list
            document.getElementById("next-btn-sign-up").textContent = "التالي";
            setSignUpStepNumber("signup-buisness-2");
        }
    }

    const switchStep = (event, id) => {
        if (id === "next") {
            checkCurrentStepList(event, signUpStepNumber);
        }
        else if (id === "previous") {
            switchBackStep(event, signUpStepNumber)
        }

    }
    function handleImageChange(e) {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();

            reader.onload = function (e) {
                setShopImage(e.target.result);
            };

            reader.readAsDataURL(e.target.files[0]);
        }
        document.getElementById("signup-upload-img").value = '';
        document.getElementById('img-input-sign-up').style.visibility = "hidden";
    }
    const changeField = (event, id) => {
        if (id === 'shop-name') {
            setShopName(event.target.value);
        }
        else if (id === 'shop-desc') {
            setShopDescription(event.target.value);
        }
        else if (id === 'shop-location') {
            setShopPlaceManually(event.target.value);
        }
        else if (id === 'shop-location-map') {
            setShopLocation(event.target.value);
        }
        else if (id === 'shop-phone') {
            setShopPhoneNumber(event.target.value);
        }
        else if (id === 'shop-email') {
            setShopEmail(event.target.value);
        }
        else if (id === 'shop-password') {
            setShopPassword(event.target.value);
        }
        else if (id === 'shop-confirm-password') {
            setShopConfirmPassword(event.target.value);
        }
    }

    return (
        <div className='SignUpBuisness'>
            <NavLink to='/ProductBusi'><div id='x' style={{ display: 'none' }}></div></NavLink>
            <section className="step-wizard-sign-up">
                <ul className="step-wizard-sign-up-list" dir="rtl">
                    <li className="step-wizard-sign-up-item current-item-sign-up" id="step-1-sign-up-bar">
                        <span className="progress-count-sign-up">
                            1
                        </span>
                    </li>
                    <li className="step-wizard-sign-up-item" id="step-2-sign-up-bar">
                        <span className="progress-count-sign-up">
                            2
                        </span>
                    </li>
                    <li className="step-wizard-sign-up-item " id="step-3-sign-up-bar">
                        <span className="progress-count-sign-up">
                            3
                        </span>
                    </li>
                </ul>
            </section>

            {/* First Step Sign Up */}
            <ul className="list-group list-group-flush list-edit-item-step-1 list-sign-up current-list-sign-up" id="step-1-sign-up">
                <li className="input-field-add-item input-field-signup">
                    <label htmlFor="type" className='label-restaurant-clothes'>ما طبيعة المتجر الذي تملكه ؟</label>
                    <select className="form-select form-control input-signup" aria-label="Default select example"
                        id="select-category-signup" required>
                        <option key='restaurant' value='restaurant'>مطعم</option>
                        <option key='clothes' value='clothes'>ملابس</option>
                    </select>
                    <div className="invalid-feedback">يرجى تحديد طبيعة المتجر</div>
                </li>
                <li className="input-field-add-item required-input input-field-signup ">
                    <label htmlFor="name-shop" className='label-edit-modal'>اسم المتجر:</label>
                    <input type="text" id="name-shop" className='form-control input-signup'
                        onChange={(event) => changeField(event, "shop-name")}
                        onClick={(event) => clickField(event, 'name-shop')}
                        placeholder='اسم المتجر' required />

                    <div className="invalid-feedback">يرجى إدخال اسم للمتجر</div>
                </li>
                <li className="input-field-add-item required-input input-field-signup">
                    <label htmlFor="desc-shop" className='label-edit-modal'>وصف المتجر:</label>
                    <textarea rows={3} type="text" id="desc-shop" className='form-control input-signup'
                        onChange={(event) => changeField(event, "shop-desc")}
                        onClick={(event) => clickField(event, 'desc-shop')}
                        placeholder='500 محرف كحد أقصى ...' required />
                    <div className="invalid-feedback">يرجى إدخال وصف للمتجر</div>
                </li>


            </ul>


            {/* Second Step Sign Up */}
            <ul className="list-group list-group-flush list-edit-item-step-1 list-sign-up" id="step-2-sign-up">
                <li className="input-field-add-item required-input input-field-signup">
                    <label htmlFor="location-shop" className='label-edit-modal'>مكان المتجر:</label>
                    <input type="text" id="location-shop" className='form-control input-signup'
                        onChange={(event) => changeField(event, "shop-location")}
                        onClick={(event) => clickField(event, 'location-shop')}
                        placeholder='اسم المدينة / اسم الشارع' required />

                    <div className="invalid-feedback">يرجى إدخال مكان المتجر</div>
                </li>
                <li className="input-field-add-item required-input input-field-signup">
                    <label htmlFor="location-map-shop" className='label-edit-modal'>موقع المتجر على الخريطة:</label>
                    {/* <input type="text" id="location-map-shop" className='form-control input-signup'
                                    onChange={(event) => changeField(event, "shop-location-map")}
                                    onClick={(event) => clickField(event, 'location-map-shop')}
                                    placeholder='اسم المدينة / اسم الشارع' required /> */}
                    <Button variant="primary" onClick={handleShowLocationOnMap} className="calendar-btn">
                        الخريطة
                    </Button>
                    <div className="invalid-feedback">يرجى إدخال موقع المتجر على الخريطة</div>
                </li>
                <li className="input-field-add-item input-field-signup" style={{ marginTop: '20px' }}>
                    <label htmlFor="signup-upload-img" className='label-edit-modal required-input-after-span'>
                        <span>صورة للمتجر:</span>
                        <img src={shopImage} alt='...' className='pro-image-signup' id="img-sign-up" />
                    </label>
                    <div className="invalid-feedback" id="img-input-sign-up"
                        style={{ display: "inline", marginRight: "10px", visibility: "hidden" }}>
                        يرجى إدخال صورة خاصة بالمتجر
                    </div>
                    <input
                        id="signup-upload-img"
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                    />
                </li>
                <li className="input-field-add-item input-field-signup required-input" style={{ marginTop: '20px' }}>
                    <label htmlFor="hours-work" className='label-edit-modal'>حدّد أوقات دوامك:</label>
                    <Button variant="primary" onClick={handleShow} className="calendar-btn">
                        تقويم الأسبوع
                    </Button>
                </li>
            </ul>


            {/* Third Step Sign Up */}
            <ul className="list-group list-group-flush list-edit-item-step-1 list-sign-up" id="step-3-sign-up">
                <li className="input-field-add-item required-input input-field-signup">
                    <label htmlFor="phone-shop" className='label-edit-modal'>رقم هاتف للمتجر:</label>
                    <input type="text" id="phone-shop" className='form-control input-signup'
                        onChange={(event) => changeField(event, "shop-phone")}
                        onClick={(event) => clickField(event, 'phone-shop')}
                        placeholder='09--------' required dir="auto" />

                    <div className="invalid-feedback">يرجى إدخال رقم الهاتف</div>
                </li>
                <li className="input-field-add-item required-input input-field-signup">
                    <label htmlFor="email-shop" className='label-edit-modal'>بريدك الالكتروني:</label>
                    <input type="email" id="email-shop" className='form-control input-signup'
                        onChange={(event) => changeField(event, "shop-email")}
                        onClick={(event) => clickField(event, 'email-shop')}
                        placeholder='freshMap@hotmail.com' required />

                    <div className="invalid-feedback">يرجى إدخال بريدك الالكتروني</div>
                </li>
                <li className="input-field-add-item required-input input-field-signup">
                    <label htmlFor="password-shop" className='label-edit-modal'>كلمة السّر:</label>
                    <input type="password" id="password-shop" className='form-control input-signup'
                        onChange={(event) => changeField(event, "shop-password")}
                        onClick={(event) => clickField(event, 'password-shop')}
                        placeholder='********' required />

                    <div className="invalid-feedback">يرجى إدخال كلمة السّر</div>
                </li>
                <li className="input-field-add-item required-input input-field-signup">
                    <label htmlFor="confirm-password-shop" className='label-edit-modal'>تأكيد كلمة السّر:</label>
                    <input type="password" id="confirm-password-shop" className='form-control input-signup'
                        onChange={(event) => changeField(event, "shop-confirm-password")}
                        onClick={(event) => clickField(event, 'confirm-password-shop')}
                        placeholder='********' required />

                    <div className="invalid-feedback">يرجى تأكيد كلمة السّر</div>
                </li>
            </ul>


            {/* Buttons Sign Up */}
            <div className='div-buttons-sign-up'>
                <Button variant="secondary" className="btn btn-edit btn-sign-up-previous"
                    onClick={(event) => switchStep(event, "previous")} id="back-btn-sign-up"
                >
                    العودة
                </Button>
                <Button variant="primary" className="btn btn-edit btn-sign-up-next"
                    onClick={(event) => switchStep(event, "next")} id="next-btn-sign-up"
                >
                    التالي
                </Button>
            </div>


            {/* Time Modal */}
            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header dir="auto">
                    <Modal.Title>
                        أوقات الدّوام
                        <h6 className='subheading-work-hours'>حدّد أوقات دوامك وفقاً للأيام و السّاعات.</h6>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body><WorkHours /></Modal.Body>
                <Modal.Footer dir="auto">
                    <Button variant="secondary" className="btn btn-calendar-modal-cancel"
                        onClick={handleClose}>
                        إلغاء
                    </Button>
                    <Button variant="primary" className="btn btn-calendar-modal-save"
                        onClick={handleClose}>
                        حفظ البرنامج
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Location On Map Modal */}
            <Modal show={showLocationOnMap} onHide={handleCloseLocationOnMap} size='lg'>
                <Modal.Header dir="auto">
                    <Modal.Title>
                        الخريطة
                        <h6 className='subheading-work-hours'>حدّد موقعك على الخريطة.</h6>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <GoogleMap lati={lati} long={long} />
                </Modal.Body>
                <Modal.Footer dir="auto">
                    <Button variant="secondary" className="btn btn-calendar-modal-cancel"
                        onClick={handleCloseLocationOnMap}>
                        إلغاء
                    </Button>
                    <Button variant="primary" className="btn btn-calendar-modal-save"
                        onClick={handleCloseLocationOnMap}>
                        حفظ الموقع
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}
export default SignUpBuisness;