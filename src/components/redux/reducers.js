
import NewMoon from '../photo/NewMoon.jpg';
import Img from '../photo/NewMoon.jpg';
import Cranchy from '../photo/cranshe.jpg';
import Gosto from '../photo/Gosto.jpg';
import She from '../photo/she.jpg';
import Bordo from '../photo/bordo.jpg';

import Pizza from '../photo/pizza1.jpg'
import Hamburger from '../photo/hamburger.jpg';
import Dr1 from '../photo/dr1.jpg';
import Dr2 from '../photo/dr2.jpg';
import Dr3 from '../photo/dr3.jpg';
import MinCheeseBer from '../photo/minCheeseBer.jpg';
import Moheto from '../photo/moheto.jpg';
import Iced_coffee from '../photo/iced_coffee.webp';
import Shauorma from '../photo/shauorma.webp';
import Jm from '../photo/Jm.jpg';
import fourSessisonPizza from '../photo/fourSessisonPizza.jpg';



import UserPhoto from '../photo/myPhoto.jpg'
import Img2 from '../photo/cranshe.jpg'
import useGeolocation from 'react-hook-geolocation'
import { useState } from 'react';

//step 3

const reminders = (state = [], action) => {

    //-----------------------<بيانات المستخدم>------------------------------
    const isUserLogin = false;
    const users = [
        {
            id: 1, userPhoto: UserPhoto, userName: 'Meery-Awad', Loc: 'حمص-باب السباع',
            email: 'meeryawad@hotmail.com', password: 'meery123'
        },
        {
            id: 2, userPhoto: UserPhoto, userName: 'Jawel', Loc: 'حمص-النزهة',
            email: 'jawel@hotmail.com', password: 'jawel123'
        }
    ]

    const currentUser = [
        {
            userPhoto: UserPhoto,
            userName: 'Meery-Awad',
            email: 'meeryawad@hotmail.com',
            password: 'meery123',
            isUserOrBuisness: '', // 'user' or 'buisness'
            Loc: 'حمص-باب السباع',
            currentRoot: '/Map',
            followPages: [
                { id: 1, photo: NewMoon, name: 'New Moon', Loc: 'حمص-الحضارة', type: 'مطعم', rate: 4.8 },
                { id: 2, photo: Cranchy, name: 'كرانشي', Loc: 'حمص-الحضارة', type: 'مطعم', rate: 4.5 },
                { id: 3, photo: Bordo, name: 'بوردو', Loc: 'حمص-الحضارة', type: 'مطعم', rate: 4.9 },
                { id: 4, photo: She, name: 'She Fashion', Loc: 'حمص-الحضارة', type: 'ألبسة', rate: 4.6 },
                { id: 5, photo: Gosto, name: 'غوستو', Loc: 'حمص-الحضارة', type: 'مطعم', rate: 4.2 },
               
                { id: 6, photo: NewMoon, name: 'New Moon', Loc: 'حمص-الحضارة', type: 'مطعم', rate: 4.8 },
                { id: 7, photo: Cranchy, name: 'كرانشي', Loc: 'حمص-الحضارة', type: 'مطعم', rate: 4.5 },
                { id: 8, photo: Bordo, name: 'بوردو', Loc: 'حمص-الحضارة', type: 'مطعم', rate: 4.9 },
                { id: 9, photo: Jm, name: 'Just Moda', Loc: 'حمص-الحضارة', type: 'ألبسة', rate: 3.9 },
                { id: 10, photo: Gosto, name: 'غوستو', Loc: 'حمص-الحضارة', type: 'مطعم', rate: 4.2 },

            ],
            likedProducts: [
                { id: 1, photo: Hamburger, name: 'همبرغر', store: 'New Moon', type: 'طعام' },
                { id: 2, photo: fourSessisonPizza, name: 'بيتزا الفصول الاربعة', store: 'New Moon', type: 'طعام' },
                { id: 3, photo: Dr1, name: 'فستان', store: 'She Fashion', type: 'نسواني' },
                { id: 4, photo: Pizza, name: ' بيتزا ببروني', store: 'غوستو', type: 'طعام' },
                { id: 5, photo: Dr2, name: 'كنزة صوف', store: 'Just Moda', type: 'نسواني' },
                { id: 6, photo:Moheto, name: 'موهيتو', store: 'Bordo', type: 'مشروبات' },
                { id: 7, photo: MinCheeseBer, name: 'ميني تشيز برغر', store: 'غوستو', type: 'طعام' },
                { id: 8, photo: Dr3, name: 'بجامة قطن', store: 'She Fashion', type: 'نسواني' },
                { id: 9, photo: Iced_coffee, name: 'Iced Coffee', store: 'Bordo', type: 'مشروبات' },
                { id: 10, photo: Shauorma, name: 'وجبة شاورما', store: 'New Moon', type: 'طعام' },
        
        

            ],
            //شكوى
            //  const time = new Date().toLocaleTimeString();
            messages: [
                {
                    storeId: 1, name: 'كرانشي', img: Img, loc: 'الحضارة- شارع العشاق',
                    allMess: [
                        { idMess: 1, mess: 'البيتزا مو طيبي ', time: '9:15:07ص' },
                        { idMess: 2, mess: "كل الاكل مو طيب ", time: '9:18:07ص' },
                        { idMess: 3, mess: "الاكل بايت", time: '9:18:07ص' },
                    ]
                },
                {
                    storeId: 2, name: 'New Moon', img: Img, loc: 'الحضارة- شارع العشاق',
                    allMess: [

                        { idMess: 1, mess: "كل الاكل مو طيب ", time: '9:18:07ص' }]
                },




            ]

        }]
    //-----------------------</بيانات المستخدم>------------------------------

    //---------------------------<الاقتراحات>----------------------------------
    var NewSugg=4;
    var NewNoti=10;
    const SuggPages = [
        { id: 1, photo: NewMoon, name: 'New Moon', Loc: 'حمص-الحضارة', type: 'مطعم', rate: 4.8 },
        { id: 2, photo: Cranchy, name: 'كرانشي', Loc: 'حمص-الحضارة', type: 'مطعم', rate: 4.5 },
        { id: 3, photo: Bordo, name: 'بوردو', Loc: 'حمص-الحضارة', type: 'مطعم', rate: 4.9 },
        { id: 4, photo: She, name: 'She Fashion', Loc: 'حمص-الحضارة', type: 'ألبسة', rate: 4.6 },
        { id: 5, photo: Gosto, name: 'غوستو', Loc: 'حمص-الحضارة', type: 'مطعم', rate: 4.2 },
       
        { id: 6, photo: NewMoon, name: 'New Moon', Loc: 'حمص-الحضارة', type: 'مطعم', rate: 4.8 },
        { id: 7, photo: Cranchy, name: 'كرانشي', Loc: 'حمص-الحضارة', type: 'مطعم', rate: 4.5 },
        { id: 8, photo: Bordo, name: 'بوردو', Loc: 'حمص-الحضارة', type: 'مطعم', rate: 4.9 },
        { id: 9, photo: Jm, name: 'Just Moda', Loc: 'حمص-الحضارة', type: 'ألبسة', rate: 3.9 },
        { id: 10, photo: Gosto, name: 'غوستو', Loc: 'حمص-الحضارة', type: 'مطعم', rate: 4.2 },

    ];
    const SuggProducts = [
        { id: 1, photo: Hamburger, name: 'همبرغر', store: 'New Moon', type: 'طعام' },
        { id: 2, photo: fourSessisonPizza, name: 'بيتزا الفصول الاربعة', store: 'New Moon', type: 'طعام' },
        { id: 3, photo: Dr1, name: 'فستان', store: 'She Fashion', type: 'نسواني' },
        { id: 4, photo: Pizza, name: ' بيتزا ببروني', store: 'غوستو', type: 'طعام' },
        { id: 5, photo: Dr2, name: 'كنزة صوف', store: 'Just Moda', type: 'نسواني' },
        { id: 6, photo:Moheto, name: 'موهيتو', store: 'Bordo', type: 'مشروبات' },
        { id: 7, photo: MinCheeseBer, name: 'ميني تشيز برغر', store: 'غوستو', type: 'طعام' },
        { id: 8, photo: Dr3, name: 'بجامة قطن', store: 'She Fashion', type: 'نسواني' },
        { id: 9, photo: Iced_coffee, name: 'Iced Coffee', store: 'Bordo', type: 'مشروبات' },
        { id: 10, photo: Shauorma, name: 'وجبة شاورما', store: 'New Moon', type: 'طعام' },

    ]

    //---------------------------</الاقتراحات>----------------------------------

    //  ---------------------<بيانات المتجر > -----------------------------------


    const stores = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [36.7446, 34.7275]
                },

                'properties': {
                    'id': 1,
                    'city': 'حمص',
                    'street': 'الحضارة-العشاق',
                    'name': 'غوستو',
                    'type': 'مطعم',
                    'photo': Gosto,
                    'icon': '',
                    'follow': true,
                    'numFollow': '51K',
                    'star': 4.9,
                    'state': 'مفتوح الآن',
                    'food': [{ id: 1, img: Pizza, name: 'بيتزا', type: ' بيتزا  مرغريتا', price: 3500, like: 0, dislike: 0, comment: 0, likeInt: false, dislikeInt: false },
                    { id: 2, img: Hamburger, name: 'Humburger', type: 'همبرغر دبل', price: 2500, like: 0, dislike: 0, comment: 3, likeInt: false, dislikeInt: false },
                    { id: 3, img: Hamburger, name: 'Humburger', type: 'همبرغر دبل', price: 2500, like: 7, dislike: 2, comment: 3, likeInt: false, dislikeInt: false },
                    { id: 4, img: Hamburger, name: 'Humburger', type: 'همبرغر دبل', price: 2500, like: 7, dislike: 2, comment: 3, likeInt: false, dislikeInt: false },


                    ],
                    // -----------------------------<احصائيات>---------------------------
                    //stars
                    'outOf5': 4.3,
                    'num': '2.5k',
                    'str1': true,
                    'str2': true,
                    'str3': false,
                    'str4': false,
                    'str5': false,
                    'strRate': { str5: 70, str4: 27, str3: 50, str2: 42, str1: 18 },

                    //Followers
                    'rateOfFollower': [
                        { year: 2022, Jan: 100, Feb: 100, Mar: 87, Apr: 13, May: 66, Jun: 80, July: 20, Aug: 100, Sept: 91, Oct: 100, Nov: 20, Dec: 26 },
                        { year: 2021, Jan: 80, Feb: 10, Mar: 87, Apr: 13, May: 60, Jun: 10, July: 10, Aug: 80, Sept: 91, Oct: 70, Nov: 20, Dec: 26 }]
                    // -----------------------------</احصائيات>---------------------------

                }
            },
            {
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [36.7327, 34.7249]
                },
                'properties': {
                    'id': 2,
                    'city': 'حمص',
                    'street': 'الحضارة-العشاق',
                    'name': 'She Fashion',
                    'type': 'ألبسة',
                    'photo': She,
                    'icon': '',
                    'follow': false,
                    'star': 4.5,
                    'state': 'مفتوح الآن',
                    'food': [{ id: 1, img: Pizza, name: 'بيتزا', type: ' بيتزا  مرغريتا', price: 3500, like: 0, dislike: 0, comment: 0, likeInt: false, dislikeInt: false },
                    { id: 2, img: Hamburger, name: 'Humburger', type: 'همبرغر دبل', price: 2500, like: 0, dislike: 0, comment: 3, likeInt: false, dislikeInt: false },
                    { id: 3, img: Hamburger, name: 'Humburger', type: 'همبرغر دبل', price: 2500, like: 7, dislike: 2, comment: 3, likeInt: false, dislikeInt: false },
                    { id: 4, img: Hamburger, name: 'Humburger', type: 'همبرغر دبل', price: 2500, like: 7, dislike: 2, comment: 3, likeInt: false, dislikeInt: false },
                    ],
                    // -----------------------------<احصائيات>---------------------------
                    //stars
                    'outOf5': 4.3,
                    'num': '2.5k',
                    'str1': true,
                    'str2': true,
                    'str3': true,
                    'str4': false,
                    'str5': false,
                    'strRate': { str5: 70, str4: 27, str3: 50, str2: 42, str1: 18 },

                    //Followers
                    'rateOfFollower': [
                        { year: 2022, Jan: 100, Feb: 100, Mar: 87, Apr: 13, May: 66, Jun: 80, July: 20, Aug: 100, Sept: 91, Oct: 100, Nov: 20, Dec: 26 },
                        { year: 2021, Jan: 80, Feb: 10, Mar: 87, Apr: 13, May: 60, Jun: 10, July: 10, Aug: 80, Sept: 91, Oct: 70, Nov: 20, Dec: 26 }]
                    // -----------------------------</احصائيات>---------------------------
                }
            },
            {
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [36.7256, 34.7234]
                },
                'properties': {
                    'id': 3,
                    'city': 'حمص',
                    'street': 'الحضارة-العشاق',
                    'name': 'Just Moda',
                    'type': 'ألبسة',
                    'photo': Jm,
                    'icon': '',
                    'follow': false,
                    'star': 4.3,
                    'state': 'مفتوح الآن',
                    'food': [{ id: 1, img: Pizza, name: 'بيتزا', type: ' بيتزا  مرغريتا', price: 3500, like: 0, dislike: 0, comment: 0, likeInt: false, dislikeInt: false },
                    // { id: 2, img: Hamburger, name: 'Humburger', type: 'همبرغر دبل', price: 2500, like: 0, dislike: 0, comment: 3, likeInt: false, dislikeInt: false },
                    // { id: 3, img: Hamburger, name: 'Humburger', type: 'همبرغر دبل', price: 2500, like: 7, dislike: 2, comment: 3, likeInt: false, dislikeInt: false },
                    { id: 4, img: Hamburger, name: 'Humburger', type: 'همبرغر دبل', price: 2500, like: 7, dislike: 2, comment: 3, likeInt: false, dislikeInt: false },
                    ],
                    // -----------------------------<احصائيات>---------------------------
                    //stars
                    'outOf5': 4.3,
                    'num': '2.5k',
                    'str1': true,
                    'str2': true,
                    'str3': true,
                    'str4': false,
                    'str5': false,
                    'strRate': { str5: 70, str4: 27, str3: 50, str2: 42, str1: 18 },

                    //Followers
                    'rateOfFollower': [
                        { year: 2022, Jan: 100, Feb: 100, Mar: 87, Apr: 13, May: 66, Jun: 80, July: 20, Aug: 100, Sept: 91, Oct: 100, Nov: 20, Dec: 26 },
                        { year: 2021, Jan: 80, Feb: 10, Mar: 87, Apr: 13, May: 60, Jun: 10, July: 10, Aug: 80, Sept: 91, Oct: 70, Nov: 20, Dec: 26 }]
                    // -----------------------------</احصائيات>---------------------------
                }
            },
            {
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [36.7266, 34.7238]
                },
                'properties': {
                    'id': 4,
                    'city': 'حمص',
                    'street': 'الحضارة-العشاق',
                    'name': 'New Moon',
                    'type': 'مطعم',
                    'photo': Bordo,
                    'icon': '',
                    'follow': false,
                    'star': 4.9,
                    'state': 'مفتوح الآن',
                    'food': [{ id: 1, img: Pizza, name: 'بيتزا', type: ' بيتزا  مرغريتا', price: 3500, like: 0, dislike: 0, comment: 0, likeInt: false, dislikeInt: false },
                    { id: 2, img: Hamburger, name: 'Humburger', type: 'همبرغر دبل', price: 2500, like: 0, dislike: 0, comment: 3, likeInt: false, dislikeInt: false },
                    { id: 3, img: Hamburger, name: 'Humburger', type: 'همبرغر دبل', price: 2500, like: 7, dislike: 2, comment: 3, likeInt: false, dislikeInt: false },
                    { id: 4, img: Hamburger, name: 'Humburger', type: 'همبرغر دبل', price: 2500, like: 7, dislike: 2, comment: 3, likeInt: false, dislikeInt: false },
                    ],
                    'outOf5': 4.3,
                    'num': '2.5k',
                    'str1': true,
                    'str2': true,
                    'str3': true,
                    'str4': false,
                    'str5': false,
                    'strRate': { str5: 70, str4: 27, str3: 50, str2: 42, str1: 18 },

                    //Followers
                    'rateOfFollower': [
                        { year: 2022, Jan: 100, Feb: 100, Mar: 87, Apr: 13, May: 66, Jun: 80, July: 20, Aug: 100, Sept: 91, Oct: 100, Nov: 20, Dec: 26 },
                        { year: 2021, Jan: 80, Feb: 10, Mar: 87, Apr: 13, May: 60, Jun: 10, July: 10, Aug: 80, Sept: 91, Oct: 70, Nov: 20, Dec: 26 }]
                    // -----------------------------</احصائيات>---------------------------
                }
            },
            {
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [36.7256, 34.7234]
                },
                'properties': {
                    'id': 5,
                    'city': 'حمص',
                    'street': 'الحضارة-العشاق',
                    'name': 'كرانشي',
                    'type': 'مطعم',
                    'photo': Cranchy,
                    'icon': '',
                    'follow': false,
                    'star': 4.2,
                    'state': 'مفتوح الآن',
                    'food': [{ id: 1, img: Pizza, name: 'بيتزا', type: ' بيتزا  مرغريتا', price: 3500, like: 0, dislike: 0, comment: 0, likeInt: false, dislikeInt: false },
                    { id: 2, img: Hamburger, name: 'Humburger', type: 'همبرغر دبل', price: 2500, like: 0, dislike: 0, comment: 3, likeInt: false, dislikeInt: false },
                    { id: 3, img: Hamburger, name: 'Humburger', type: 'همبرغر دبل', price: 2500, like: 7, dislike: 2, comment: 3, likeInt: false, dislikeInt: false },
                    { id: 4, img: Hamburger, name: 'Humburger', type: 'همبرغر دبل', price: 2500, like: 7, dislike: 2, comment: 3, likeInt: false, dislikeInt: false },
                    ],
                    'outOf5': 4.3,
                    'num': '2.5k',
                    'str1': true,
                    'str2': true,
                    'str3': true,
                    'str4': false,
                    'str5': false,
                    'strRate': { str5: 70, str4: 27, str3: 50, str2: 42, str1: 18 },

                    //Followers
                    'rateOfFollower': [
                        { year: 2022, Jan: 100, Feb: 100, Mar: 87, Apr: 13, May: 66, Jun: 80, July: 20, Aug: 100, Sept: 91, Oct: 100, Nov: 20, Dec: 26 },
                        { year: 2021, Jan: 80, Feb: 10, Mar: 87, Apr: 13, May: 60, Jun: 10, July: 10, Aug: 80, Sept: 91, Oct: 70, Nov: 20, Dec: 26 }]
                    // -----------------------------</احصائيات>---------------------------
                }
            },

        ]
    };


    //  -------------------</بيانات المتجر> ---------------------------------------





    //////////////////////////  for Front only /////////////////////////////////


    const useShareState = () => {

        const [dropdownOpenLogin, setdropdownOpenLogin] = useState(false);

        const [selectMessId, setSelectMessId] = useState(-1);
        const [messStore, setMessStore] = useState(currentUser[0].messages);
        const [idStore, setidStore] = useState(0);
        var [theProd, setTheProd] = useState([]);
        var [tempUser, setTempUser] = useState(currentUser[0]);
        var [theNameProd, setNameProd] = useState('');
        var [theNumProd, setTheNumProd] = useState();
        const [dirWay, setDirWay] = useState('walking');
        const [value, setInputValue] = useState('');
        const [index, setIndex] = useState(0);
        const [flyTo, setFlyTo] = useState(false);
        const [allMess, setallMess] = useState([]);
        const [activeFiltra, setactiveFiltra] = useState(false);
        const [isUserOrBuisness, setisUserOrBusisness] = useState(currentUser[0].isUserOrBuisness)
        if (isUserOrBuisness == 'buisness') {
            currentUser[0].userPhoto = Img;
            currentUser[0].userName = 'New Moon'
        }
        else {
            currentUser[0].userPhoto = UserPhoto;
            currentUser[0].userName = 'Meery-Awad'
        }
        const [isUserLogin, setisUserLogin] = useState(false);
        const [currentRoot, setcurrentRoot] = useState(currentUser[0].currentRoot);
       
        if (isUserOrBuisness == 'buisness') { setcurrentRoot('/ProductBusi') }
        else { setcurrentRoot('/Map') }
        /////////////////// My Location ////////////////////////

        const geolocation = useGeolocation();
        const lati = geolocation.latitude;
        const long = geolocation.longitude;

        ///////////////////////////////////////////////////////

        ////////////////////////// city //////////////////////
        const city = [{ cityId: 1, cityName: 'حمص' }];
        ///////////////////////////////////////////////////////

        //////////////////////// street//////////////////////
        const street = [{ streetId: 1, streetName: 'الحضارة-العشاق' }]
        /////////////////////////////////////////////////////

        /////////////////////// store ///////////////////////
        const store = [{ storeId: 1, storeName: 'مطاعم', storeIcon: 'fa fa-cutlery' },
        { storeId: 2, storeName: 'ألبسة', storeIcon: 'fas fa-tshirt' }

        ]

        ////////////////////////////////////////////////////

        // -------------------- <بيانات المنتجات> -------------------------------------------
        const Shop = "مطعم";
        var products = [];
        if (Shop == "مطعم") {
            products = [{ id: 1, type: "طعام", icon: 'fas fa-hamburger', list: stores.features[idStore].properties.food },
            { id: 2, type: "شراب", icon: 'fa fa-glass', list: [] },
            { id: 3, type: "حلويات", icon: "fas fa-cookie", list: [] }];

        }
        else {
            products = [{ type: "", icon: '' },
            { type: "", icon: '' },
            { type: "", icon: "" }];

        }

        // ------------------------------</بيانات المنتجات>------------------------


        return {
            dropdownOpenLogin,
            setdropdownOpenLogin,
            isUserOrBuisness,
            setisUserOrBusisness,
            isUserLogin,
            setisUserLogin,
            currentRoot,
            setcurrentRoot,
            //myLoc
            lati, long,
            //gatigory
            activeFiltra, setactiveFiltra,
            idStore, setidStore,
            index, setIndex,
            allMess, setallMess,
            theProd, setTheProd,
            theNameProd, setNameProd,
            theNumProd, setTheNumProd,
            selectMessId, setSelectMessId,
            messStore, setMessStore,
            dirWay, setDirWay,
            value, setInputValue,
            city, street, store,
            products,
            tempUser, setTempUser,
            flyTo, setFlyTo

        }
    }


    ////////////////////////// </for Front only> /////////////////////////////////


    // ----------------------------data----------------------------------------

    const data = {
        // بيانات المستخدم
        users, isUserLogin, currentUser,

        // بيانات المنتجات
        stores,
        // الاقتراحات
        SuggPages, SuggProducts, NewSugg,NewNoti,
        // just for Front
        useShareState,
    }




    return data;

}

export default reminders