import { useState } from 'react';


import BuisnessPicture from '../images/NewMoon.jpg';

// profile photos :
import Jewel from '../images/Jewel.jpg';
import Meery from '../images/Meery.jpg';
import Mary from '../images/Jewel.jpg';
import Laith from '../images/Meery.jpg';

// item photos :

//      Crispy
import Crispy1 from '../images/Food/Chicken/Crispy1.jpg';
import Crispy2 from '../images/Food/Chicken/Crispy2.jpg';
import Crispy3 from '../images/Food/Chicken/Crispy3.jpg';
//      Hamburger
import Hamburger1 from '../images/Food/Hamburger/Hamburger1.jpg';
import Hamburger2 from '../images/Food/Hamburger/Hamburger2.jpg';
import Hamburger3 from '../images/Food/Hamburger/Hamburger3.jpeg';
//      Kabab
import Kabab1 from '../images/Food/Kabab/Kabab1.jpg';
import Kabab2 from '../images/Food/Kabab/Kabab2.jpg';
import Kabab3 from '../images/Food/Kabab/Kabab3.jpg';
//      Pizza
import Pizza1 from '../images/Food/Pizza/Pizza1.jpg';
import Pizza2 from '../images/Food/Pizza/Pizza2.jpg';
import Pizza3 from '../images/Food/Pizza/Pizza3.jpg';
import Pizza4 from '../images/Food/Pizza/Pizza4.jpeg';
import Pizza5 from '../images/Food/Pizza/Pizza5.jpg';
import Pizza6 from '../images/Food/Pizza/Pizza6.jpg';
//      Salad
import Salad1 from '../images/Food/Salad/Salad1.jpg';
import Salad2 from '../images/Food/Salad/Salad2.jpg';
import Salad3 from '../images/Food/Salad/Salad3.jpg';
//      Shawarma
import Shawarma1 from '../images/Food/Shawarma/Shawarma1.jpg';
import Shawarma2 from '../images/Food/Shawarma/Shawarma2.jpg';
import Shawarma3 from '../images/Food/Shawarma/Shawarma3.jpg';
import Shawarma4 from '../images/Food/Shawarma/Shawarma4.jpg';
//      Falafel
import Falafel1 from '../images/Food/Falafel/Falafel1.jpg';
import Falafel2 from '../images/Food/Falafel/Falafel2.jpg';
import Falafel3 from '../images/Food/Falafel/Falafel3.jpg';
import Falafel4 from '../images/Food/Falafel/Falafel4.png';


const initState = {

    clientUser: {

    },

    // Buisness Profile Data
    buisnessProfile: {
        WorkName: 'New Moon',
        WorkType: 'مطعم', // ملابس مطعم
        openOrclose: 'مفتوح الآن',
        workTime: '09:00 AM - 10:00 PM',
        workLocation: 'الحضارة - زاوية شارع العشاق',
        workNumber: '0968820968',
        workMail: 'newmoon@hotmail.com',
        workPassword: 'jewelPass',
        workConPassword: 'jewelPass',
        workDescription: 'وجبات شرقي غربي - توصيل لأي مكان',
        workPicture: BuisnessPicture,
        nFollowers: '123K',
        nProducts: '233M',
        nRaters: '110K',
    },
    // online user
    // onlineUser: initState.buisnessProfile,
    userType: 'Buisness', // Buisness Or Client


    // Clothes item
    clothesItems: [
        {
            itemId: 1,
            itemStoreName: 'Zara',
            itemStorePicture: BuisnessPicture,
            itemName: 'جاكيت شتوي',
            itemPhotos: [Hamburger1, Hamburger2, Hamburger3],
            itemCategory: 'جواكيت',
            itemType: 'رجالي',
            itemSizes: ['S', 'XS', 'M'],
            itemText: 'جاكيت سميك و قماشة رائعة جاكيت سميك و قماشة رائعة جاكيت سميك و قماشة رائعة جاكيت سميك و قماشة رائعة',
            itemPrice: '55500',
            itemLikes: 50,
            itemDislikes: 20,
            itemComments: 10,
            itemDate: 'Mar 10 2022 10:00:00 AM',
            itemCommentsDetails: [
                {
                    id: 1,
                    clientName: 'جويل الياس',
                    clientPhoto: Jewel,
                    date: '27/11/2021',
                    text: 'مصنوعة بجودة عالية و سماكة ممتازة للبرد الشديد مصنوعة بجودة عالية و سماكة ممتازة للبرد الشديد مصنوعة بجودة عالية و سماكة ممتازة للبرد الشديد مصنوعة بجودة عالية و سماكة ممتازة للبرد الشديد',
                    repliesVisibility: false,
                    replies: [
                        {
                            id: 1,
                            name: 'New Moon',
                            photo: BuisnessPicture,
                            date: '28/11/2021',
                            text: 'شكرا لدعمكم .. منتمنى دائما نكون عند حسن ظنك'
                        },
                        {
                            id: 2,
                            name: 'جويل الياس',
                            photo: Jewel,
                            date: '28/11/2021',
                            text: 'الله يعطيكن العافية'
                        }
                    ]
                },
                {
                    id: 2,
                    clientName: 'ميري عوض',
                    clientPhoto: Jewel,
                    date: '27/11/2021',
                    text: 'مصنوعة بجودة عالية و سماكة ممتازة للبرد الشديد مصنوعة بجودة عالية و سماكة ممتازة للبرد الشديد مصنوعة بجودة عالية و سماكة ممتازة للبرد الشديد مصنوعة بجودة عالية و سماكة ممتازة للبرد الشديد',
                    repliesVisibility: false,
                    replies: []
                },
            ]
        },
        {
            itemId: 2,
            itemStoreName: 'Zara',
            itemStorePicture: BuisnessPicture,
            itemName: 'بنطلون جينز بوي فريند',
            itemPhotos: [Hamburger1, Hamburger2, Hamburger3],
            itemCategory: 'بناطلين',
            itemType: 'نسواني',
            itemSizes: ['S', 'XS', 'M', 'XL'],
            itemText: 'جاكيت سميك و قماشة رائعة جاكيت سميك و قماشة رائعة جاكيت سميك و قماشة رائعة جاكيت سميك و قماشة رائعة',
            itemPrice: '25500',
            itemLikes: 50,
            itemDislikes: 20,
            itemComments: 10,
            itemDate: 'Mar 10 2022 10:00:00 AM',
            itemCommentsDetails: [
                {
                    id: 1,
                    clientName: 'جويل الياس',
                    clientPhoto: Jewel,
                    date: '27/11/2021',
                    text: 'مصنوعة بجودة عالية و سماكة ممتازة للبرد الشديد مصنوعة بجودة عالية و سماكة ممتازة للبرد الشديد مصنوعة بجودة عالية و سماكة ممتازة للبرد الشديد مصنوعة بجودة عالية و سماكة ممتازة للبرد الشديد',
                    repliesVisibility: false,
                    replies: [
                        {
                            id: 1,
                            name: 'New Moon',
                            photo: BuisnessPicture,
                            date: '28/11/2021',
                            text: 'شكرا لدعمكم .. منتمنى دائما نكون عند حسن ظنك'
                        },
                        {
                            id: 2,
                            name: 'جويل الياس',
                            photo: Jewel,
                            date: '28/11/2021',
                            text: 'الله يعطيكن العافية'
                        }
                    ]
                },
            ]
        }
    ],

    // Clothes filter by
    filtersClothes: [
        {
            filterId: 'filter-by-id1',
            filterType: 'الكل'
        },
        {
            filterId: 'filter-by-id2',
            filterType: 'بناطلين'
        },
        {
            filterId: 'filter-by-id3',
            filterType: 'جينز'
        },
        {
            filterId: 'filter-by-id4',
            filterType: 'كنزات'
        },
        {
            filterId: 'filter-by-id5',
            filterType: 'قمصان'
        },
        {
            filterId: 'filter-by-id6',
            filterType: 'جواكيت'
        },
        {
            filterId: 'filter-by-id7',
            filterType: 'فساتين'
        },
        {
            filterId: 'filter-by-id8',
            filterType: 'بجامات'
        },
        {
            filterId: 'filter-by-id9',
            filterType: 'شالات'
        },
        {
            filterId: 'filter-by-id10',
            filterType: 'حقائب'
        },
    ],

    // Clothes Types
    clothesTypes: [
        { typeId: 1, typeName: 'رجالي' },
        { typeId: 2, typeName: 'نسواني' },
        { typeId: 3, typeName: 'ولادي' },
    ],

    // Clothes Sizes
    clothesSizes: [
        { sizeId: 1, sizeName: 'XS' },
        { sizeId: 2, sizeName: 'S' },
        { sizeId: 3, sizeName: 'M' },
        { sizeId: 4, sizeName: 'L' },
        { sizeId: 5, sizeName: 'XL' },
        { sizeId: 6, sizeName: 'XXL' },
        { sizeId: 7, sizeName: 'XXXL' },
    ],

    // Buisness Products
    items: [
        {
            itemId: 1,
            itemStoreName: 'New Moon',
            itemStorePicture: BuisnessPicture,
            itemName: 'هامبرغر',
            itemPhotos: [Hamburger1, Hamburger2, Hamburger3],
            itemCategory: 'وجبات',
            itemType: 'حيواني',
            itemText: 'سندويشة محشية باللحم المتبّل بأطيب أنواع البهارات .. بالإضافة الى الصوص الشهي.. جرّبها مابتندم',
            itemPrice: '25500',
            itemLikes: 83,
            likeInt:true,
            dislikeInt:false,
            itemDislikes: 10,
            itemComments: 56,
            itemDate: 'Mar 10 2022 10:00:00 AM',
            itemCommentsDetails: [
                {
                    id: 1,
                    clientName: 'جويل الياس',
                    clientPhoto: Jewel,
                    date: '27/11/2021',
                    text: 'أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,',
                    repliesVisibility: false,
                    replies: [
                        {
                            id: 1,
                            name: 'New Moon',
                            photo: BuisnessPicture,
                            date: '28/11/2021',
                            text: 'شكرا لدعمكم .. منتمنى دائما نكون عند حسن ظنك'
                        },
                        {
                            id: 2,
                            name: 'جويل الياس',
                            photo: Jewel,
                            date: '28/11/2021',
                            text: 'الله يعطيكن العافية'
                        }
                    ]
                },
                {
                    id: 2,
                    clientName: 'ميري عوض',
                    clientPhoto: Jewel,
                    date: '27/11/2021',
                    text: 'أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,',
                    repliesVisibility: false,
                    replies: []
                },
            ]
        },
        {
            itemId: 2,
            itemStoreName: 'New Moon',
            itemStorePicture: BuisnessPicture,
            itemName: 'شاورما عربي',
            itemPhotos: [Shawarma1, Shawarma2, Shawarma3, Shawarma4],
            itemCategory: 'سندويش',
            likeInt:true,
             dislikeInt:false,
            itemType: 'حيواني',
            itemText: 'سندويشة محشية باللحم المتبّل بأطيب أنواع البهارات .. بالإضافة الى الصوص الشهي.. جرّبها مابتندم',
            itemPrice: '20000',
            itemLikes: 95,
            itemDislikes: 18,
            itemComments: 38,
            itemDate: 'Mar 01 2022 10:00:00 AM',
            itemCommentsDetails: [
                {
                    id: 1,
                    clientName: 'جويل الياس',
                    clientPhoto: Jewel,
                    date: '27/11/2021',
                    text: 'أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,',
                    repliesVisibility: false,
                    replies: [
                        {
                            id: 1,
                            name: 'New Moon',
                            photo: BuisnessPicture,
                            date: '28/11/2021',
                            text: 'شكرا لدعمكم .. منتمنى دائما نكون عند حسن ظنك'
                        },
                        {
                            id: 2,
                            name: 'جويل الياس',
                            photo: Jewel,
                            date: '28/11/2021',
                            text: 'الله يعطيكن العافية'
                        }
                    ]
                },
                {
                    id: 2,
                    clientName: 'ميري عوض',
                    clientPhoto: Jewel,
                    date: '27/11/2021',
                    text: 'أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,',
                    repliesVisibility: false,
                    replies: []
                },
            ]
        },
        {
            itemId: 3,
            itemStoreName: 'New Moon',
            itemStorePicture: BuisnessPicture,
            itemName: 'كريسبي',
            itemPhotos: [Crispy1, Crispy2, Crispy3],
            itemCategory: 'وجبات',
            itemType: 'حيواني',
            likeInt:false,
            dislikeInt:false,
            itemText: 'سندويشة محشية باللحم المتبّل بأطيب أنواع البهارات .. بالإضافة الى الصوص الشهي.. جرّبها مابتندم',
            itemPrice: '15600',
            itemLikes: 95,
            itemDislikes: 18,
            itemComments: 38,
            itemDate: 'Feb 10 2022 11:00:00 AM',
            itemCommentsDetails: [
                {
                    id: 1,
                    clientName: 'جويل الياس',
                    clientPhoto: Jewel,
                    date: '27/11/2021',
                    text: 'أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,',
                    repliesVisibility: false,
                    replies: [
                        {
                            id: 1,
                            name: 'New Moon',
                            photo: BuisnessPicture,
                            date: '28/11/2021',
                            text: 'شكرا لدعمكم .. منتمنى دائما نكون عند حسن ظنك'
                        },
                        {
                            id: 2,
                            name: 'جويل الياس',
                            photo: Jewel,
                            date: '28/11/2021',
                            text: 'الله يعطيكن العافية'
                        }
                    ]
                },
                {
                    id: 2,
                    clientName: 'ميري عوض',
                    clientPhoto: Jewel,
                    date: '27/11/2021',
                    text: 'أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,',
                    repliesVisibility: false,
                    replies: []
                },
            ]
        },
        {
            itemId: 4,
            itemStoreName: 'New Moon',
            itemStorePicture: BuisnessPicture,
            itemName: 'كباب لحمة',
            itemPhotos: [Kabab1, Kabab2, Kabab3],
            itemCategory: 'وجبات',
            itemType: 'حيواني',
            likeInt:false,
             dislikeInt:false,
            itemText: 'سندويشة محشية باللحم المتبّل بأطيب أنواع البهارات .. بالإضافة الى الصوص الشهي.. جرّبها مابتندم',
            itemPrice: '30000',
            itemLikes: 95,
            itemDislikes: 18,
            itemComments: 38,
            itemDate: 'Feb 15 2022 11:00:00 AM',
            itemCommentsDetails: [
                {
                    id: 1,
                    clientName: 'جويل الياس',
                    clientPhoto: Jewel,
                    date: '27/11/2021',
                    text: 'أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,',
                    repliesVisibility: false,
                    replies: [
                        {
                            id: 1,
                            name: 'New Moon',
                            photo: BuisnessPicture,
                            date: '28/11/2021',
                            text: 'شكرا لدعمكم .. منتمنى دائما نكون عند حسن ظنك'
                        },
                        {
                            id: 2,
                            name: 'جويل الياس',
                            photo: Jewel,
                            date: '28/11/2021',
                            text: 'الله يعطيكن العافية'
                        }
                    ]
                },
                {
                    id: 2,
                    clientName: 'ميري عوض',
                    clientPhoto: Jewel,
                    date: '27/11/2021',
                    text: 'أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,',
                    repliesVisibility: false,
                    replies: []
                },
            ]
        },
        {
            itemId: 5,
            itemStoreName: 'New Moon',
            itemStorePicture: BuisnessPicture,
            itemName: 'سلطة',
            itemPhotos: [Salad1, Salad2, Salad3],
            itemCategory: 'وجبات',
            itemType: 'نباتي',
            itemText: 'سندويشة محشية باللحم المتبّل بأطيب أنواع البهارات .. بالإضافة الى الصوص الشهي.. جرّبها مابتندم',
            itemPrice: '11200',
            likeInt:true,
            dislikeInt:false,
            itemLikes: 95,
            itemDislikes: 18,
            itemComments: 38,
            itemDate: 'Mar 10 2022 10:00:00 PM',
            itemCommentsDetails: [
                {
                    id: 1,
                    clientName: 'جويل الياس',
                    clientPhoto: Jewel,
                    date: '27/11/2021',
                    text: 'أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,',
                    repliesVisibility: false,
                    replies: [
                        {
                            id: 1,
                            name: 'New Moon',
                            photo: BuisnessPicture,
                            date: '28/11/2021',
                            text: 'شكرا لدعمكم .. منتمنى دائما نكون عند حسن ظنك'
                        },
                        {
                            id: 2,
                            name: 'جويل الياس',
                            photo: Jewel,
                            date: '28/11/2021',
                            text: 'الله يعطيكن العافية'
                        }
                    ]
                },
                {
                    id: 2,
                    clientName: 'ميري عوض',
                    clientPhoto: Jewel,
                    date: '27/11/2021',
                    text: 'أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,',
                    repliesVisibility: false,
                    replies: []
                },
            ]
        },
        {
            itemId: 6,
            itemStoreName: 'New Moon',
            itemStorePicture: BuisnessPicture,
            itemName: 'بيتزا مارغريتا',
            itemPhotos: [Pizza1, Pizza2, Pizza3, Pizza4, Pizza5, Pizza6],
            itemCategory: 'وجبات',
            itemType: 'حيواني',
            itemText: 'سندويشة محشية باللحم المتبّل بأطيب أنواع البهارات .. بالإضافة الى الصوص الشهي.. جرّبها مابتندم',
            itemPrice: '18700',
            likeInt:false,
            dislikeInt:true,
            itemLikes: 120,
            itemDislikes: 11,
            itemComments: 56,
            itemDate: 'Mar 10 2022 10:00:00 AM',
            itemCommentsDetails: [
                {
                    id: 1,
                    clientName: 'جويل الياس',
                    clientPhoto: Jewel,
                    date: '27/11/2021',
                    text: 'أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,',
                    repliesVisibility: false,
                    replies: [
                        {
                            id: 1,
                            name: 'New Moon',
                            photo: BuisnessPicture,
                            date: '28/11/2021',
                            text: 'شكرا لدعمكم .. منتمنى دائما نكون عند حسن ظنك'
                        },
                        {
                            id: 2,
                            name: 'جويل الياس',
                            photo: Jewel,
                            date: '28/11/2021',
                            text: 'الله يعطيكن العافية'
                        }
                    ]
                },
                {
                    id: 2,
                    clientName: 'ميري عوض',
                    clientPhoto: Jewel,
                    date: '27/11/2021',
                    text: 'أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,',
                    repliesVisibility: false,
                    replies: []
                },
            ]
        },
        {
            itemId: 7,
            itemStoreName: 'New Moon',
            itemStorePicture: BuisnessPicture,
            itemName: 'فلافل سورية',
            itemPhotos: [Falafel1, Falafel2, Falafel3, Falafel4],
            itemCategory: 'سندويش',
            itemType: 'نباتي',
            itemText: 'سندويشة محشية باللحم المتبّل بأطيب أنواع البهارات .. بالإضافة الى الصوص الشهي.. جرّبها مابتندم',
            itemPrice: '11200',
            itemLikes: 95,
            likeInt:true,
            dislikeInt:false,
            itemDislikes: 18,
            itemComments: 38,
            itemDate: 'Mar 10 2022 10:00:00 PM',
            itemCommentsDetails: [
                {
                    id: 1,
                    clientName: 'جويل الياس',
                    clientPhoto: Jewel,
                    date: '27/11/2021',
                    text: 'أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,',
                    repliesVisibility: false,
                    replies: [
                        {
                            id: 1,
                            name: 'New Moon',
                            photo: BuisnessPicture,
                            date: '28/11/2021',
                            text: 'شكرا لدعمكم .. منتمنى دائما نكون عند حسن ظنك'
                        },
                        {
                            id: 2,
                            name: 'جويل الياس',
                            photo: Jewel,
                            date: '28/11/2021',
                            text: 'الله يعطيكن العافية'
                        }
                    ]
                },
                {
                    id: 2,
                    clientName: 'ميري عوض',
                    clientPhoto: Jewel,
                    date: '27/11/2021',
                    text: 'أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,',
                    repliesVisibility: false,
                    replies: []
                },
            ]
        }
    ],


    // Filter By
    filters: [
        {
            filterId: 'filter-by-id1',
            filterType: 'الكل'
        },
        {
            filterId: 'filter-by-id2',
            filterType: 'وجبات'
        },
        {
            filterId: 'filter-by-id3',
            filterType: 'سندويش'
        },
        {
            filterId: 'filter-by-id4',
            filterType: 'مشروبات'
        },
    ],

    // Restaurant Types
    restaurantTypes: [
        { typeId: 1, typeName: 'نباتي' },
        { typeId: 2, typeName: 'حيواني' },
    ],

    // Temporary Notifications
    notifications: [
        {
            notificationId: 1,
            notificationType: 'like',
            notificationDate: 'just now',
            notificationProduct: 'هامبرغر',
            notificationClients: [{
                name: 'ماري الريس',
                photo: Mary
            }, {
                name: 'جويل الياس',
                photo: Jewel
            }, {
                name: 'ميري عوض',
                photo: Meery
            }, {
                name: 'ليث الحلواني',
                photo: Laith
            }],
            notificationPhoto: Hamburger1
        },
        {
            notificationId: 2,
            notificationType: 'like',
            notificationDate: '2h 14m',
            notificationProduct: 'كريسبي',
            notificationClients: [{
                name: 'ماري الريس',
                photo: Mary
            }, {
                name: 'جويل الياس',
                photo: Jewel
            }, {
                name: 'ميري عوض',
                photo: Meery
            }, {
                name: 'ليث الحلواني',
                photo: Laith
            }],
            notificationPhoto: Crispy1
        },
        {
            notificationId: 3,
            notificationType: 'dislike',
            notificationDate: '4h 36m',
            notificationProduct: 'شاورما',
            notificationClients: [{
                name: 'ميري عوض',
                photo: Meery
            }, {
                name: 'جويل الياس',
                photo: Jewel
            }, {
                name: 'ماري الريس',
                photo: Mary
            }, {
                name: 'ليث الحلواني',
                photo: Laith
            }],
            notificationPhoto: Shawarma1
        },
        {
            notificationId: 4,
            notificationType: 'dislike',
            notificationDate: '4h 36m',
            notificationProduct: 'هامبرغر',
            notificationClients: [{
                name: 'جويل الياس',
                photo: Jewel
            }, {
                name: 'ماري الريس',
                photo: Mary
            }, {
                name: 'ميري عوض',
                photo: Meery
            }, {
                name: 'ليث الحلواني',
                photo: Laith
            }],
            notificationPhoto: Hamburger1
        },
        {
            notificationId: 5,
            notificationType: 'comment',
            notificationDate: '4h 36m',
            notificationProduct: 'سلطة',
            notificationClients: [
                {
                    name: 'ليث الحلواني',
                    photo: Laith
                }, {
                    name: 'جويل الياس',
                    photo: Jewel
                }, {
                    name: 'ميري عوض',
                    photo: Meery
                }, {
                    name: 'ماري الريس',
                    photo: Mary
                }],
            notificationPhoto: Salad1
        },
        {
            notificationId: 6,
            notificationType: 'comment',
            notificationDate: '4h 36m',
            notificationProduct: 'كريسبي',
            notificationClients: [
                {
                    name: 'ليث الحلواني',
                    photo: Laith
                }, {
                    name: 'جويل الياس',
                    photo: Jewel
                }, {
                    name: 'ميري عوض',
                    photo: Meery
                }, {
                    name: 'ماري الريس',
                    photo: Mary
                }],
            notificationPhoto: Crispy1
        },
    ],

    // feedbacks Or complains
    feedbacks: [
        {
            id: 1,
            text: 'تجربة تجربة تجربة تجربة تجربة تجربة تجربة تجربة تجربة تجربة تجربة ',
            date: '28/11/2021'
        },
        {
            id: 2,
            text: 'تجربة تجربة تجربة تجربة تجربة تجربة',
            date: '10/11/2021'
        },
        {
            id: 3,
            text: 'تجربة تجربة تجربة تجربة تجربة تجربة',
            date: '18/10/2021'
        },
        {
            id: 4,
            text: 'تجربة تجربة تجربة تجربة تجربة تجربة',
            date: '28/09/2021'
        },
        {
            id: 5,
            text: 'تجربة تجربة تجربة تجربة تجربة تجربة',
            date: '10/08/2021'
        },
        {
            id: 6,
            text: 'تجربة تجربة تجربة تجربة تجربة تجربة',
            date: '24/07/2021'
        },
        {
            id: 7,
            text: 'تجربة تجربة تجربة تجربة تجربة تجربة',
            date: '28/11/2020'
        },
    ],

    // Work hours and days
    workSchedule: [
        {
            day: 'السّبت',
            opened: 'مغلق',
            timeFrom: 'undefined',
            timeTo: 'undefined',
            dayId: 'day1',
            timePickerFromId: 'from1',
            timePickerToId: 'to1',
            toggleId: 'toggle1',
            timePickerId: 'time1'
        },
        {
            day: 'الأحد',
            opened: 'مفتوح',
            timeFrom: '09:00',
            timeTo: '22:00',
            dayId: 'day2',
            timePickerFromId: 'from2',
            timePickerToId: 'to2',
            toggleId: 'toggle2',
            timePickerId: 'time2'
        },
        {
            day: 'الاثنين',
            opened: 'مفتوح',
            timeFrom: '09:00',
            timeTo: '22:00',
            dayId: 'day3',
            timePickerFromId: 'from3',
            timePickerToId: 'to3',
            toggleId: 'toggle3',
            timePickerId: 'time3'
        },
        {
            day: 'الثّلاثاء',
            opened: 'مغلق',
            timeFrom: 'undefined',
            timeTo: 'undefined',
            dayId: 'day4',
            timePickerFromId: 'from4',
            timePickerToId: 'to4',
            toggleId: 'toggle4',
            timePickerId: 'time4'
        },
        {
            day: 'الأربعاء',
            opened: 'مفتوح',
            timeFrom: '09:00',
            timeTo: '22:00',
            dayId: 'day5',
            timePickerFromId: 'from5',
            timePickerToId: 'to5',
            toggleId: 'toggle5',
            timePickerId: 'time5'
        },
        {
            day: 'الخميس',
            opened: 'مفتوح',
            timeFrom: '09:00',
            timeTo: '22:00',
            dayId: 'day6',
            timePickerFromId: 'from6',
            timePickerToId: 'to6',
            toggleId: 'toggle6',
            timePickerId: 'time6'
        },
        {
            day: 'الجمعة',
            opened: 'مغلق',
            timeFrom: 'undefined',
            timeTo: 'undefined',
            dayId: 'day7',
            timePickerFromId: 'from7',
            timePickerToId: 'to7',
            toggleId: 'toggle7',
            timePickerId: 'time7'
        }
    ],

    // Add item 
    addedItem: {
        itemId: 8,
        itemStoreName: 'New Moon',
        itemStorePicture: BuisnessPicture,
        itemName: '',
        itemPhotos: [],
        itemCategory: '',
        itemType: '',
        itemText: '',
        itemPrice: '',
        itemLikes: 83,
        itemDislikes: 10,
        itemComments: 56,
        itemDate: 'Mar 10 2022 10:00:00 AM',
        itemCommentsDetails: [
            {
                id: 1,
                clientName: 'جويل الياس',
                clientPhoto: Jewel,
                date: '27/11/2021',
                text: 'أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,',
                replies: []
            },
            {
                id: 2,
                clientName: 'ميري عوض',
                clientPhoto: Jewel,
                date: '27/11/2021',
                text: 'أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,',
                replies: []
            },
        ]
    },
    clothesAddedItem: {
        itemId: 8,
        itemStoreName: 'New Moon',
        itemStorePicture: BuisnessPicture,
        itemName: '',
        itemPhotos: [],
        itemCategory: '',
        itemType: '',
        itemSizes: [],
        itemText: '',
        itemPrice: '',
        itemLikes: 83,
        itemDislikes: 10,
        itemComments: 56,
        itemDate: 'Mar 10 2022 10:00:00 AM',
        itemCommentsDetails: [
            {
                id: 1,
                clientName: 'جويل الياس',
                clientPhoto: Jewel,
                date: '27/11/2021',
                text: 'أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,',
                replies: []
            },
            {
                id: 2,
                clientName: 'ميري عوض',
                clientPhoto: Jewel,
                date: '27/11/2021',
                text: 'أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,أكل جدا طيب و مكونات رائعة و خدمة ممتازة,',
                replies: []
            },
        ]
    },

    useSharingFilters: () => {
        // current selected category (single selected)
        const [selectedCategory, setSelectedCategory] = useState('الكل');
        // current selected filter 
        const [selectedFilterDropdown1, setSelectedFilterDropdown1] = useState({ type: [], minPrice: '5000', maxPrice: '35000' });
        const [selectedFilterDropdown2, setSelectedFilterDropdown2] = useState('most-likes');

        // Add Item
        const [itemName, setItemName] = useState('');
        const [itemPhotos, setItemPhotos] = useState([]);
        const [itemCategory, setItemCategory] = useState('');
        const [itemType, setItemType] = useState('');
        const [itemSizes, setItemSizes] = useState([]);
        const [itemText, setItemText] = useState('');
        const [itemPrice, setItemPrice] = useState('');
        const [buisnessProfile,setBuisnessProfile] = useState(initState.buisnessProfile);
        const [item, setItem] = useState(initState.items[0]);
        const [signUpWelcome, setSignUpWelcome] = useState('اكتشف الأماكن و قُم بالتسوّق و التجوّل من المنزل بكلّ بساطة.');

        return {
            selectedCategory, setSelectedCategory,
            selectedFilterDropdown1, setSelectedFilterDropdown1,
            selectedFilterDropdown2, setSelectedFilterDropdown2,
            itemName, setItemName,
            itemPhotos, setItemPhotos,
            itemCategory, setItemCategory,
            itemType, setItemType,
            itemSizes, setItemSizes,
            itemText, setItemText,
            itemPrice, setItemPrice,
            buisnessProfile,setBuisnessProfile,
            item, setItem,
            signUpWelcome, setSignUpWelcome

        };
    },

}


const reducer = (state = initState, action) => {
    const newState = initState;

    if (action.type === 'edit-profile') {
        // perform edit profile data operation
        newState.buisnessProfile = action.state;
        return newState;
    }
    else if (action.type === 'edit-schedule') {
        // perform edit schedule data operation
        newState.workSchedule = action.state;
        return newState;
    }
    else if (action.type === 'add-new-item') {
        // add new item (product) by buisness
        if (newState.buisnessProfile.WorkType === 'مطعم')
            newState.items.push(action.state);
        else if (newState.buisnessProfile.WorkType === 'ملابس')
            newState.clothesItems.push(action.state);
        return newState;
    }
    else if (action.type === 'add-new-item-name') {
        // add new item (product) by buisness
        if (newState.buisnessProfile.WorkType === 'مطعم')
            newState.addedItem.itemName = action.state;
        else if (newState.buisnessProfile.WorkType === 'ملابس')
            newState.clothesAddedItem.itemName = action.state;
        return newState;
    }
    else if (action.type === 'add-new-item-price') {
        // add new item (product) by buisness
        if (newState.buisnessProfile.WorkType === 'مطعم')
            newState.addedItem.itemPrice = action.state;
        else if (newState.buisnessProfile.WorkType === 'ملابس')
            newState.clothesAddedItem.itemPrice = action.state;
        return newState;
    }
    else if (action.type === 'add-new-item-desc') {
        // add new item (product) by buisness
        if (newState.buisnessProfile.WorkType === 'مطعم')
            newState.addedItem.itemText = action.state;
        else if (newState.buisnessProfile.WorkType === 'ملابس')
            newState.clothesAddedItem.itemText = action.state;
        return newState;
    }
    else if (action.type === 'add-new-item-category') {
        // add new item (product) by buisness
        if (newState.buisnessProfile.WorkType === 'مطعم')
            newState.addedItem.itemCategory = action.state;
        else if (newState.buisnessProfile.WorkType === 'ملابس')
            newState.clothesAddedItem.itemCategory = action.state;
        return newState;
    }
    else if (action.type === 'add-new-item-type') {
        // add new item (product) by buisness
        if (newState.buisnessProfile.WorkType === 'مطعم')
            newState.addedItem.itemType = action.state;
        else if (newState.buisnessProfile.WorkType === 'ملابس')
            newState.clothesAddedItem.itemType = action.state;
        return newState;
    }
    else if (action.type === 'add-new-item-img') {
        // add new item (product) by buisness
        if (newState.buisnessProfile.WorkType === 'مطعم')
            newState.addedItem.itemPhotos.push(action.state);
        else if (newState.buisnessProfile.WorkType === 'ملابس')
            newState.clothesAddedItem.itemPhotos.push(action.state);
        return newState;
    }
    else if (action.type === 'delete-one-img-from-added-item') {
        // add new item (product) by buisness
        let tmp;
        if (newState.buisnessProfile.WorkType === 'مطعم') {
            tmp = newState.addedItem.itemPhotos.filter(function (value, index) {
                return (index !== action.state);
            });
            newState.addedItem.itemPhotos = tmp;

        }
        else if (newState.buisnessProfile.WorkType === 'ملابس') {
            tmp = newState.clothesAddedItem.itemPhotos.filter(function (value, index) {
                return (index !== action.state);
            });
            newState.clothesAddedItem.itemPhotos = tmp;
        }
        return newState;
    }
    else if (action.type === 'add-new-item-size') {
        // add new item (product) by buisness
        newState.clothesAddedItem.itemSizes.push(action.state);
        return newState;
    }
    else if (action.type === 'switch-replies-visibility') {
        // switch replies for selected comment
        if (newState.buisnessProfile.WorkType === 'مطعم')
            newState.items[action.state.itemId].itemCommentsDetails[action.state.commentId - 1].repliesVisibility = action.state.visibile;
        else if (newState.buisnessProfile.WorkType === 'ملابس')
            newState.clothesItems[action.state.itemId].itemCommentsDetails[action.state.commentId - 1].repliesVisibility = action.state.visibile;

        return newState;
    }
    else if (action.type === 'add-new-reply-btn') {
        // add new reply for selected comment
        if (newState.buisnessProfile.WorkType === 'مطعم')
            newState.items[action.state.itemId].itemCommentsDetails[action.state.commentId - 1].replies.push(action.state.newReply);
        else if (newState.buisnessProfile.WorkType === 'ملابس')
            newState.clothesItems[action.state.itemId].itemCommentsDetails[action.state.commentId - 1].replies.push(action.state.newReply);
        return newState;
    }
    else if (action.type === 'add-new-comment-btn') {
        // add new reply for selected comment
        if (newState.buisnessProfile.WorkType === 'مطعم')
            newState.items[action.state.itemId].itemCommentsDetails.push(action.state.newComment);
        else if (newState.buisnessProfile.WorkType === 'ملابس')
            newState.clothesItems[action.state.itemId].itemCommentsDetails.push(action.state.newComment);
        return newState;
    }
    else if (action.type === 'delete-item') {
        // delete an item (product) by buisness
        let newItems = [];
        if (newState.buisnessProfile.WorkType === 'مطعم') {
            for (let i = 0; i < newState.items.length; i++) {
                if (action.state !== i) {
                    newItems.push(newState.items[i])
                }
            }
            newState.items = newItems;
        }
        else if (newState.buisnessProfile.WorkType === 'ملابس') {
            for (let i = 0; i < newState.clothesItems.length; i++) {
                if (action.state !== i) {
                    newItems.push(newState.clothesItems[i])
                }
            }
            newState.clothesItems = newItems;
        }

        return newState;
    }
    else if (action.type === 'delete-comment') {
        // delete comment by buisness
        if (newState.buisnessProfile.WorkType === 'مطعم') {
            let lgth = newState.items[action.state.itemId].itemCommentsDetails.length;
            let tempCommentDetails = [];

            for (let i = 0; i < lgth; i++) {
                if (action.state.commentId !== i) {
                    tempCommentDetails.push(newState.items[action.state.itemId].itemCommentsDetails[i])
                }
            }
            newState.items[action.state.itemId].itemCommentsDetails = tempCommentDetails;
        }
        else if (newState.buisnessProfile.WorkType === 'ملابس') {
            let lgth = newState.clothesItems[action.state.itemId].itemCommentsDetails.length;
            let tempCommentDetails = [];

            for (let i = 0; i < lgth; i++) {
                if (action.state.commentId !== i) {
                    tempCommentDetails.push(newState.clothesItems[action.state.itemId].itemCommentsDetails[i])
                }
            }
            newState.clothesItems[action.state.itemId].itemCommentsDetails = tempCommentDetails;
        }
        return newState;

    }
    else if (action.type === 'delete-reply') {
        // delete reply by buisness
        if (newState.buisnessProfile.WorkType === 'مطعم') {
            let lgth = newState.items[action.state.itemId].itemCommentsDetails[action.state.commentId].replies.length;
            let tempReplies = [];

            for (let i = 0; i < lgth; i++) {
                if (action.state.replyId !== i) {
                    tempReplies.push(newState.items[action.state.itemId].itemCommentsDetails[action.state.commentId].replies[i])
                }
            }
            newState.items[action.state.itemId].itemCommentsDetails[action.state.commentId].replies = tempReplies;
        }
        else if (newState.buisnessProfile.WorkType === 'ملابس') {
            let lgth = newState.clothesItems[action.state.itemId].itemCommentsDetails[action.state.commentId].replies.length;
            let tempReplies = [];

            for (let i = 0; i < lgth; i++) {
                if (action.state.replyId !== i) {
                    tempReplies.push(newState.clothesItems[action.state.itemId].itemCommentsDetails[action.state.commentId].replies[i])
                }
            }
            newState.clothesItems[action.state.itemId].itemCommentsDetails[action.state.commentId].replies = tempReplies;
        }

        return newState;

    }
    else if (action.type === 'edit-item') {
        // edit item 
        if (newState.buisnessProfile.WorkType === 'مطعم') {
            newState.items[action.state.itemId] = action.state.value;
        }
        else if (newState.buisnessProfile.WorkType === 'ملابس') {
            newState.clothesItems[action.state.itemId] = action.state.value;
        }

        return newState;

    }
    else if (action.type === 'add-like') {
        // add like
        if (newState.buisnessProfile.WorkType === 'مطعم') {
            newState.items[action.state.itemId].itemLikes += 1;
        }
        else if (newState.buisnessProfile.WorkType === 'ملابس') {
            newState.clothesItems[action.state.itemId].itemLikes += 1;
        }

        return newState;
    }
    else if (action.type === 'add-dislike') {
        // add dislike 
        if (newState.buisnessProfile.WorkType === 'مطعم') {
            newState.items[action.state.itemId].itemDislikes += 1;
        }
        else if (newState.buisnessProfile.WorkType === 'ملابس') {
            newState.clothesItems[action.state.itemId].itemDislikes += 1;
        }

        return newState;
    }

    return state;
}
export default reducer;
