import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './mapBox.scss';
import StartRate from '../startRate/startRate';
import TodoItem from '../products/TodoIitem';
import { useSelector } from 'react-redux';
import { useBetween } from 'use-between';
import { NavLink, Link } from 'react-router-dom';
import * as ReactDOMServer from 'react-dom/server';
import SearchMap from '../SearchMap'
import $ from 'jquery';
import '../SearchMap.scss'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Meery from '../../photo/meery.jpg'

mapboxgl.accessToken =
    'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';
mapboxgl.setRTLTextPlugin(
    'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
    null,
    true // Lazy load the plugin
);

const MapBox = () => {

    const mapContainerRef = useRef(null);

    const state = useSelector((state) => state.data);
    const { lati, long } = useBetween(state.useShareState);
    const { activeFiltra, setactiveFiltra } = useBetween(state.useShareState);
    const [follow, setFollow] = useState([]);
    const [mapLoad, setLoad] = useState(false);
    const { dropdownOpenLogin, setdropdownOpenLogin } = useBetween(state.useShareState);
    const { idStore, setidStore, allMess, setallMess, dirWay, setDirWay } = useBetween(state.useShareState);
    const { index, setIndex } = useBetween(state.useShareState);
    const { flyTo, setFlyTo } = useBetween(state.useShareState);
    const wayRoute = useRef('walking');
    const lazyWay = useRef(false);
    const id = useRef(0);
    const feat = useRef({});
    const geometry = useRef([]);
    const [messages, setMessages] = useState(state.currentUser[0].messages);
    const { isUserLogin, setisUserLogin } = useBetween(state.useShareState);
    const [lng, setLng] = useState(long);
    const [lat, setLat] = useState(lati);
    const [zoom, setZoom] = useState(15.4);
    var stores = state.stores;

    const [dropdownStoresOpen, setdropdownStoresOpen] = useState(false);
    const {
        selectMessId, setSelectMessId, messStore, setMessStore, } = useBetween(state.useShareState);
    const element = $(`#${'selectMess'}`);
    element.animate({
        scrollTop: element.prop("scrollHeight")
    }, 500);



    // stores.features.forEach((store, i) => {
    //     store.properties.id = i + 1;
    // });


    function foll(followStor) {

        if (isUserLogin == false)
            setdropdownOpenLogin(!dropdownOpenLogin)
        else {
            follow[followStor] = !follow[followStor];

            follow.forEach((store, i) => {
                if (i == followStor) {
                    follow[i] = follow[followStor];

                }

            });
            const newFoll = [...follow];
            setFollow(newFoll)
            if (follow == false) {
                let currentYear = new Date().getFullYear();
                let currentMonth = new Date().getMonth() + 1;
                state.numOfFollower += 1;
                // (state.numOfFollower);
                //backend
            }
            else {
                state.numOfFollower -= 1;
                //backend
                //    (state.numOfFollower);
            }

        }
    }



    const storCont = stores.features.length ? (
        stores.features.sort((a, b) => a.properties.distance - b.properties.star.distance).map(item => {
            return (
                <div className='item' key={item.properties.id} id='item'>
                    <div className='linkCont'>
                        <img src={item.properties.photo} className='photoStor'></img>
                        <a className='title' id='title' href='#'><bdi>{item.properties.name}</bdi></a>
                        <div className='follow' onClick={() => foll(item.properties.id)}
                            style={{
                                color: follow[item.properties.id] == true && isUserLogin == true ? '#FFFFFF' : '#525151',
                                backgroundColor: follow[item.properties.id] == true && isUserLogin == true ? '#47A851' : '#FFFFFF'
                            }}>متابعة</div>
                    </div>
                    <div className='detailsCont'>
                        <i className={`${item.properties.type == 'مطعم' ? "fa fa-cutlery" : "fas fa-tshirt"}`}></i>
                        <span className={`details ${item.properties.type == 'مطعم' ? "cutlery" : "tshirt"}`}><bdi>{item.properties.type}</bdi></span>
                        <div className='starStores' >  <StartRate id={item.properties.id} /></div>

                    </div>
                    <div className='disWay'><bdi>  <i className={`${dirWay == 'walking' ? "fas fa-walking" : "fas fa-car"}`}></i><span className='time'>{item.properties.timeWalk} دقيقة </span></bdi></div>

                    {/* <div className='disStore' id='disStore'><bdi> يبعد <span className='disNum'>{item.properties.distance} </span>  كم </bdi></div> */}
                    <NavLink to='/ProfileBuisness' style={{ textDecoration: 'none' }}> <div className='goToMoreDetails'>تفاصيل</div></NavLink>



                </div>
            )
        })) : (<p><bdi>لا توجد متاجر حتى الآن!!</bdi></p>)

    function activFiltra(id) {


        setactiveFiltra(true);
        setdropdownStoresOpen(false);
        // (id)


        document.querySelector('.Fltera').style.display = 'none';
        // state.currentUser[0].messages.map((item, i) => {

        //     if (item.storeId == id) { setIndex(i); setallMess(item.allMess) }
        //     else {
        //         const updatemess = [

        //             ...messages,

        //             {

        //                 storeId: stores.features[id-1].properties.id,

        //                 name: stores.features[id-1].properties.name,

        //                 img: stores.features[id-1].properties.photo,
        //                 loc: stores.features[id-1].properties.street,
        //                 allMess: [],

        //             }
        //         ];

        //         setallMess([]);
        //         setMessages(updatemess)
        //     }

        // })
        // (idStore);

        // Array.from(document.querySelectorAll("div.Filter-list"))
        //     .forEach(function (val) {
        //         val.style.color = 'rgb(228, 226, 226)';
        //     });
        // Array.from(document.querySelectorAll("a"))
        //     .forEach(function (val) {
        //         val.style.color = 'rgb(228, 226, 226)';
        //     });
        // Array.from(document.querySelectorAll("i.fil"))
        //     .forEach(function (icon) {
        //         icon.style.color = 'rgb(140, 181, 144)';
        //     });
        setidStore(id);
    }

    useEffect(() => {
        stores.features.forEach((store, i) => {
            follow.push(store.properties.follow);



        });
    }, [])
    useEffect(() => {
        setLng(long);
        setLat(lati);

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [long, lati],
            zoom: 15.2
        });

        // Add navigation control (the +/- zoom buttons) new mapboxgl.NavigationControl(), 'top-right'
        map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            // When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
            // Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true
        }));
        // map.addControl(
        //     new MapboxDirections({
        //     accessToken: mapboxgl.accessToken,
        //     unit: 'metric',
        //     }),
        //     'top-right'
        //     );
        map.on('onclick', () => {
            setLng(map.getCenter().lng.toFixed(4));
            setLat(map.getCenter().lat.toFixed(4));
            setZoom(map.getZoom().toFixed(2));
        });
        ;

        map.on('load', () => {
            /**
            * This is where your '.addLayer()' used to be, instead
            * add only the source without styling a layer
            */
            map.addSource('places', {
                'type': 'geojson',
                'data': stores
            });
            for (const store of stores.features) {


                getTime(store.properties, store.geometry.coordinates, 'walking');


            }

            buildLocationList(stores);
            // map.addControl(geocoder, 'top-left');
            addMarkers();
            setLoad(true);

            if (flyTo == true) {
                flyToStore(state.stores.features[2]);
                createPopUp(state.stores.features[2]);
                getRoute(2, state.stores.features[2].geometry.coordinates)
            }

            /* Get the coordinate of the search result */
            // const searchResult = event.result.geometry;




            /**
            * Sort stores by distance from closest to the `searchResult`
            * to furthest.
            */


            /**
* Rebuild the listings:
* Remove the existing listings and build the location
* list again using the newly sorted stores.
*/


            buildLocationList(stores);

            /* Open a popup for the closest store. */
            createPopUp(stores.features[0]);

            /** Highlight the listing for the closest store. */
            const activeListing = document.getElementById(
                `listing-${stores.features[0].properties.id}`
            );
            activeListing.classList.add('active');

            /**
            * Adjust the map camera:
            * Get a bbox that contains both the geocoder result and
            * the closest store. Fit the bounds to that bbox.
            */
            // const bbox = getBbox(stores, 0, searchResult);
            // map.fitBounds(bbox, {
            //     padding: 100
            // });

        });

        /**
        * Using the coordinates (lng, lat) for
        * (1) the search result and
        * (2) the closest store
        * construct a bbox that will contain both points
        */


        function addMarkers() {
            /* For each feature in the GeoJSON object above: */
            for (const marker of stores.features) {
                /* Create a div element for the marker. */
                const el = document.createElement('i');
                //    const name=el.appendChild(document.createElement('div'));

                /* Assign a unique `id` to the marker. */
                el.id = `marker-${marker.properties.id}`;
                /* Assign the `marker` class to each marker for styling. */

                el.className = `marker  ${marker.properties.type == 'مطعم' ? "fa fa-cutlery" : "fas fa-tshirt"}`;
                // el.src="https://pic.onlinewebfonts.com/svg/img_465785.png"



                /**
                * Create a marker using the div element
                * defined above and add it to the map.
                **/
                new mapboxgl.Marker(el, { offset: [0, -23] })
                    .setLngLat(marker.geometry.coordinates)
                    .addTo(map);
                   
                /**
                * Listen to the element and when it is clicked, do three things:
                * 1. Fly to the point
                * 2. Close all other popups and display popup for clicked store
                * 3. Highlight listing in sidebar (and remove highlight for all other listings)
                **/
                el.addEventListener('click', (e) => {
                    activFiltra(marker.properties.id);
                    /* Fly to the point */
                    flyToStore(marker);
                    /* Close all other popups and display popup for clicked store */

                    createPopUp(marker);
                    /* Highlight listing in sidebar */
                    const activeItem = document.getElementsByClassName('active');
                    e.stopPropagation();
                    if (activeItem[0]) {
                        activeItem[0].classList.remove('active');
                    }
                    const listing = document.getElementById(
                        `listing-${marker.properties.id}`
                    );
                    listing.classList.add('active');
                });

            }
            //////// my Location///////////////////////////////
            // const myLoc = document.createElement('div');
          
            // myLoc.className = 'myLoc';
    
           
            // new mapboxgl.Marker(myLoc)
           
            //     .setLngLat([long, lati])
            //     .addTo(map);
          
        }
        
       

        const disWalk = document.getElementById('disWalk');
        const disDrive = document.getElementById('disDrive');
        disWalk.addEventListener('click', () => {
            wayRoute.current = 'walking';

            for (const store of state.stores.features) {

                getTime(store.properties, store.geometry.coordinates);




            }
            if (lazyWay.current == true) {
                getRoute(id.current, geometry.current);
                createPopUp(feat.current);
            }

        })
        disDrive.addEventListener('click', () => {
            wayRoute.current = 'driving'


            document.getElementById('disDrive').style.color = 'red';
            for (const store of state.stores.features) {

                getTime(store.properties, store.geometry.coordinates);


            }

            if (lazyWay.current == true) {
                getRoute(id.current, geometry.current);
                createPopUp(feat.current);

            }

        })
        async function getRoute(item, end) {
            // make a directions request using cycling profile
            // an arbitrary start will always be the same
            // only the end or destination will change



            const query = await fetch(
                `https://api.mapbox.com/directions/v5/mapbox/${wayRoute.current}/${long},${lati};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
                { method: 'GET' }
            );
            const json = await query.json();
            const data = json.routes[0];
            const route = data.geometry.coordinates;

            const geojson = {
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'LineString',
                    coordinates: []
                },

            };
            // if the route already exists on the map, we'll reset it using setData
            if (map.getSource('route')) {
                map.getSource('route').setData(geojson);

            }
            // otherwise, we'll make a new request
            else {

                map.addLayer({
                    id: 'route',
                    type: 'line',
                    source: {
                        type: 'geojson',
                        data: geojson
                    },
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round'
                    },
                    paint: {
                        'line-color': '#3887be',

                        'line-width': 5,
                        'line-opacity': 0.75,
                        // 'line-gradient': [
                        //     'interpolate',
                        //     ['linear'],
                        //     ['line-progress'],
                        //     0, "blue",
                        //     0.1, "royalblue",
                        //     0.3, "cyan",
                        //     0.5, "lime",
                        //     0.7, "yellow",
                        //     1, "red"
                        // ]
                    }
                });
            }
            // Create a GeoJSON source with an empty lineString.

            var speedFactor = 100 // number of frames per longitude degree

            var diffX = end[0] - long;
            var diffY = end[1] - lati;

            var sfX = diffX / speedFactor;
            var sfY = diffY / speedFactor;


            var lineCoordinates = [];

            for (var i = 0; i < route.length; i++) {
                lineCoordinates.push([route[i][0], route[i][1]]);


            }



            var animationCounter = 0;

            function animateLine() {

                if (animationCounter < lineCoordinates.length) {

                    geojson.geometry.coordinates.push(lineCoordinates[animationCounter]);

                    map.getSource('route').setData(geojson);

                    requestAnimationFrame(animateLine);
                    animationCounter = animationCounter + 1;
                }
                // else {
                //     var coord = geojson.geometry.coordinates;
                //     coord.shift();


                //     if (coord.length > 0) {
                //         geojson.geometry.coordinates = coord;
                //         map.getSource('route').setData(geojson);

                //         //-------------- Point2 Animation End ---------------
                //         // requestAnimationFrame(animateLine);
                //     }
                // }

            }

            animateLine();





        }


        async function getTime(store, end) {
            // make a directions request using cycling profile
            // an arbitrary start will always be the same
            // only the end or destination will change


            const query = await fetch(
                `https://api.mapbox.com/directions/v5/mapbox/${wayRoute.current}/${long},${lati};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
                { method: 'GET' }
            );

            const json = await query.json();
            const data = json.routes[0];


            store.timeWalk = Math.floor(data.duration / 60);
            const dis = data.distance;
            if (dis >= 1000) {
                store.distance =
                    `${Math.round(dis) / 1000} كيلومتر`;
            }
            else {
                store.distance =
                    `${dis} متر`;
            }

            // store.distance = store.distance.toFixed(3);
            // alert(store.distance);
            stores.features.sort((a, b) => {


                if (a.properties.timeWalk > b.properties.distancetimeWalk) {

                    return 1;

                }
                if (a.properties.timeWalk < b.properties.timeWalk) {

                    return -1;
                }
                return 0; // a must be equal to b
            });

            createPopUp(store);


        }

        /**
        * Add a listing for each store to the sidebar.
        **/
        function buildLocationList(stores) {
            let suggestions = [


            ];
            for (let i = 1; i <= stores.features.length; i++) {
                // stores.features[i - 1].properties.id = i;
                // alert(stores.features[i - 1].properties.id);
                // alert(stores.features[i - 1].properties.name);
                const obj = {
                    'storeId': stores.features[i - 1].properties.id, 'name': stores.features[i - 1].properties.name,
                    'photo': stores.features[i - 1].properties.photo,
                    'geo': stores.features[i - 1]
                }
                suggestions.push(obj)

            }

            for (const store of stores.features) {
                /* Add a new listing section to the sidebar. */

                const link = document.getElementById('title');
                link.id = `link-${store.properties.id}`;


                link.addEventListener('click', function () {
                    var cnt = 0;

                    for (const feature of stores.features) {


                        if (this.id === `link-${feature.properties.id}`) {

                            setidStore(cnt)
                            flyToStore(feature);
                            getRoute(feature.properties, feature.geometry.coordinates);
                            id.current = feature.properties.id;
                            geometry.current = feature.geometry.coordinates;
                            feat.current = feature;

                            lazyWay.current = true;
                            createPopUp(feature);
                            activFiltra(feature.properties.id);






                        }
                        cnt++;
                    }


                    document.querySelector('.dropDown').style.backgroundColor = 'rgb(228, 226, 226)';
                    const activeItem = document.getElementsByClassName('active');
                    if (activeItem[0]) {
                        activeItem[0].classList.remove('active');
                    }
                    this.parentNode.classList.add('active');
                });
            }
            //////////////////////////////////////Search/////////////////////////////////////////////



            // fetch("https://vinote.herokuapp.com/users", requestOptions)
            //     .then(response => response.text())
            //     .then(result => {
            //         for (let i = 0; i < (JSON.parse(result).users).length; i++) {
            //             suggestions[i] = JSON.parse(result).users[i].userName
            //         }
            //     })
            //     .catch(error => console.log('error', error));



            // getting all required elements
            const searchWrapper = document.querySelector(".search-input");
            const inputBox = searchWrapper.querySelector("input");
            const suggBox = searchWrapper.querySelector(".autocom-box");
            const icon = searchWrapper.querySelector(".iconSe");
            let linkTag = searchWrapper.querySelector("a");
            let webLink;

            // if user press any key and release
            inputBox.onkeyup = (e) => {

                let userData = e.target.value; //user enetered data
                // this.props.handleName(e.target.value);
                let emptyArray = [];
                if (userData) {
                    icon.onclick = () => {

                        linkTag.setAttribute("href", webLink);
                        console.log(webLink);
                        linkTag.click();
                    }

                    emptyArray = suggestions.filter((data) => {
                        //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
                        return data.name.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
                    });
                    emptyArray = emptyArray.map((data) => {
                        // passing return data inside li tag

                        return data = `<div> <img src=${data.photo}/><li><bdi>${data.name}<bdi></li><h1 class='h1Data'>${data.storeId}</h1></div>`

                    });

                    searchWrapper.classList.add("active"); //show autocomplete box
                    showSuggestions(emptyArray);
                    let allList = suggBox.querySelectorAll("li");
                    let idList = suggBox.querySelectorAll("h1");

                    for (let i = 0; i < allList.length; i++) {
                        //adding onclick attribute in all li tag

                        allList[i].onclick = function () { id.current = idList[i].textContent; select(this); };


                    }
                } else {
                    searchWrapper.classList.remove("active"); //hide autocomplete box
                }


            }


            function select(element) {
                lazyWay.current = true;
                let selectData = element.textContent;
                inputBox.value = selectData;

                var idSugg = id.current;

                for (const feature of stores.features) {
                    if (idSugg == feature.properties.id) {
                        flyToStore(feature);
                        id.current = feature.properties.id;
                        // alert(id.current)
                        geometry.current = feature.geometry.coordinates;
                        getRoute(feature.properties.id, geometry.current);
                        createPopUp(feature);

                    }
                }









                let b = false;
                setSelectMessId(state.currentUser[0].messages.length);
                setallMess([]);
                messStore.map((item, i) => {

                    if (item.storeId == idStore) {
                        setallMess(item.allMess); setSelectMessId(i);
                        b = true
                    }
                    // else if (item.storeId != idStore && b == false) {

                    //     setallMess([]);
                    //     setSelectMessId(state.currentUser[0].messages.length);



                    // }


                })
                searchWrapper.classList.remove("active");
                // flyToStore([36.7542 , 34.7271])
            }

            function showSuggestions(list) {
                let listData;
                if (!list.length) {

                    listData = '<li>' + inputBox.value + '</li>';
                } else {
                    listData = list.join('');
                }

                suggBox.innerHTML = listData;

            }

            /////////////////////////////////////////////////////////////////////////////////////////

        }

        /**
        * Use Mapbox GL JS's `flyTo` to move the camera smoothly
        * a given center point.
        **/
        function flyToStore(currentFeature) {
            alert(currentFeature.geometry.coordinates);
            map.flyTo({
                center: currentFeature.geometry.coordinates,
                zoom: 15.2,
                bearing: 0,

                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.1, // make the flying slow
                curve: 1, // change the speed at which it zooms out

                // This can be any easing function: it takes a number between
                // 0 and 1 and returns another number between 0 and 1.
                easing: (t) => t,

                // this animation is considered essential with respect to prefers-reduced-motion
                essential: true
            });

        }
        <div className='searchMap'>
            <SearchMap flyToStore={flyToStore} />
        </div>
        /**
        * Create a Mapbox GL JS `Popup`.
        **/
        function createPopUp(currentFeature) {
            // alert(currentFeature.geometry.coordinates)
            const popUps = document.getElementsByClassName('mapboxgl-popup');
            if (popUps[0]) popUps[0].remove();


            const popup = new mapboxgl.Popup({ closeOnClick: true })
                .setLngLat(currentFeature.geometry.coordinates)
                .setHTML(
                    `<div>
                    <div class='currentNmaeLoc'><img src=${currentFeature.properties.photo} class='currentFeatureImg' />
                        ${currentFeature.properties.name}</div>
                    <div class="PopUp">
                        <div class='disPopUp'>${currentFeature.properties.distance}</div>
                        <i class='fa fa-clock-o'></i>
                        <span>${currentFeature.properties.state} </span>
                       
                         
                        </div>
                    </div>
                `

                )
                .addTo(map);
        }
        // Clean up on unmount
        return () => { map.remove(); clearInterval(getTime); }


    }, [long, lati]); // eslint-disable-line react-hooks/exhaustive-deps
    function toggle() {

        if (mapLoad)
            setdropdownStoresOpen(!dropdownStoresOpen);
        //  document.querySelector('.dropDownStore').style.background = '#47A851';



    }


    var cnt = 0;
    const hidAndShowSearch = () => {

        if (cnt == 0) {
            document.querySelector('.searchInput').style.width = '32%';
            document.querySelector('.searchInput').style.backgroundColor = '#fff';
            document.querySelector('.searchInput').style.boxShadow = '0px 1px 5px 3px rgba(0,0,0,0.12)';
            document.querySelector('.autocom-box').style.display = 'block';
            cnt = 1;
        }
        else {
            document.querySelector('.searchInput').style.width = '0%';
            document.querySelector('.searchInput').style.backgroundColor = 'transparent'
            document.querySelector('.searchInput').style.boxShadow = 'none';
            document.querySelector('.autocom-box').style.display = 'none';
            cnt = 0;
        }

    }

    return (
        <div className='mapBox'>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>
            <link href="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
            <script src="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js"></script>

            <div className='searchMap'>

                <div className="wrapperSe">

                    <div className="search-input">


                        <input type="text" placeholder="بحث..." id='s' dir="right" className='searchInput'  ></input>
                        <div className="autocom-box">
                            {/* <!-- here list are inserted from javascript --> */}
                        </div>
                        <div className="iconSe" onClick={hidAndShowSearch}><i className="fa fa-search"></i></div>
                    </div>

                </div>
            </div>
            <Dropdown isOpen={dropdownStoresOpen} onClick={toggle}  >
                <DropdownToggle caret className='dropDownStore'>
                    <div className='allStore'><bdi> المتاجر الحالية <span className='storSort'>(بدءاً من الأقرب إليك) </span></bdi></div>
                </DropdownToggle>

            </Dropdown>
            <div onClick={() => { setDirWay('walking'); setdropdownStoresOpen(false) }} id='disWalk'><i className=" inMap fas fa-walking" title='go walk'
                style={{
                    backgroundColor: dirWay == 'walking' ? "#47A851" : "#fff"
                    , color: dirWay == 'walking' ? "#fff" : "#333"
                }

                }
            ></i></div>
            <div onClick={() => { setDirWay('driving'); setdropdownStoresOpen(false) }} id='disDrive' className='disDrive'><i className=' inMap fas fa-car' title='go by car'
                style={{
                    backgroundColor: dirWay == 'driving' ? "#47A851" : "#fff"
                    , color: dirWay == 'driving' ? "#fff" : "#333"
                }}></i></div>
            <div className='sidebar'>


                <div className="listings" id='listings'
                    style={{ display: dropdownStoresOpen == true ? 'block' : 'none' }}>

                    {storCont}
                </div>


            </div>


            <div className='map-container' ref={mapContainerRef} style={{ width: '100%', height: '530px' }} />
            <div>
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            {/* <div className='Fltera TodoItem'>
                <TodoItem />
            </div> */}
        </div >
    );
};

export default MapBox;
