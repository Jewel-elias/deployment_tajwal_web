import { React, useState, useEffect } from 'react';
import '../../bootstrap/css/bootstrap.css';
import '../style/App.css';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Rate1 from '../../components/map/Rate/rate1';
import { useBetween } from 'use-between';



function Profile() {
    const st = useSelector((state) => state.dataB);
    const state = useSelector((state) => state.data);
    const [todayWork, setTodayWork] = useState('');
    const {buisnessProfile, setBuisnessProfile} = useBetween(st.useSharingFilters);
    const { isUserOrBuisness, setisUserOrBusisness } = useBetween (state.useShareState);
    // MODAL SHOW FUNCTIONS
    const [showStatistics, setShowStatistics] = useState(false);

    const handleCloseStatistics = () => setShowStatistics(false);
    const handleShowStatistics = () => setShowStatistics(true);

    useEffect(() => {

        // get work hours of today 

        const d = new Date();
        let day = d.getDay();
        if (day === 6) day -= 6;
        else day += 1;

        if (st.workSchedule[day].opened === 'مغلق') {
            setTodayWork('مغلق اليوم');
        }
        else {
            let timeFrom = st.workSchedule[day].timeFrom;
            let timeTo = st.workSchedule[day].timeTo;
            let hourFrom = st.workSchedule[day].timeFrom[0] + st.workSchedule[day].timeFrom[1];
            let hourTo = st.workSchedule[day].timeTo[0] + st.workSchedule[day].timeTo[1];
            let fromPeriod, toPeriod;
            if (hourFrom > '00' && hourFrom < '11') {
                fromPeriod = 'AM';
            }
            else {
                hourFrom -= 12;
                timeFrom = hourFrom + ':' + timeFrom[3] + timeFrom[4]
                fromPeriod = 'PM'
            }

            if (hourTo > '00' && hourTo < '11') {
                toPeriod = 'AM';
            }
            else {
                hourTo -= 12;
                timeTo = hourTo + ':' + timeTo[3] + timeTo[4]
                toPeriod = 'PM'
            }
            setTodayWork(timeFrom + fromPeriod + ' - ' + timeTo + toPeriod);
        }
        console.log(todayWork);

    });

    return (
        <div className='Profile'>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.7.2/font/bootstrap-icons.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>

            <div className="container grid-profile mt-3">
                <div className="row text-end col-profile mt-2">
                    <div className='col-1'>
                        <span className='dots'>.........</span>
                        <span className='dots'>.........</span>
                        <span className='dots'>.........</span>
                        <span className='dots'>.........</span>
                        <span className='dots'>.........</span>
                    </div>

                    {/** Third Col **/}
                    <div className="col statistics-col">

                        {/* Followers */}
                        <div className='list-statistics'>
                            <div className="rounded-circle green-b-statistics" onClick={handleShowStatistics}>
                                <div className="rounded-circle bu-statistics"style={{ display: isUserOrBuisness == 'buisness' ? 'block' : 'none' }} >{buisnessProfile.nFollowers}</div>
                                 <div className="rounded-circle bu-statistics" style={{ display: isUserOrBuisness == 'buisness' ? 'none' : 'block' }}>-</div>
                            </div>
                            <span className='statistics-description' style={{ display: isUserOrBuisness == 'buisness' ? 'block' : 'none' }}>الإحصائيات</span>
                            <span className='statistics-description'style={{ display: isUserOrBuisness == 'buisness' ? 'none' : 'block' }} >شكوى</span>
                          

         
                        </div>
                        <div className='list-statistics'>
                            <NavLink to='/ProductBusi' style={{ textDecoration: 'none' }}>
                                <div className="rounded-circle green-b-statistics">
                                    <div className="rounded-circle bu-statistics" >{buisnessProfile.nProducts}</div>
                                </div>
                                <span className='statistics-description'>المـنتـجــات</span>
                            </NavLink>
                        </div>

                    </div>

                    {/**  Second Col **/}
                    <div className="col-6 align-items-start left-b">
                        <div>
                            {/* Head */}
                            <span className='Head'>
                                <label className="mx-2 work-name-label">{buisnessProfile.WorkName}</label>
                                <i className="bi bi-file-person icon-label-profile"></i>
                            </span>
                            {/* List */}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item list-prof-item">
                                    <span>
                                        <label className="mx-2 buisness-label-profile">{buisnessProfile.WorkType}</label>
                                        <i className="fa fa-cutlery icon-label-profile" aria-hidden="true"></i>
                                    </span>
                                </li>
                                <li className="list-group-item list-prof-item">
                                    <span>
                                        <label className="mx-2 buisness-label-profile">{buisnessProfile.openOrclose}</label>
                                        <i className="bi bi-check-circle-fill icon-label-profile"></i>
                                    </span>
                                </li>
                                <li className="list-group-item list-prof-item">
                                    <span>
                                        <label className="mx-2 buisness-label-profile">{todayWork}</label>
                                        <i className="bi bi-clock-fill icon-label-profile"></i>
                                    </span>
                                </li>
                                <li className="list-group-item list-prof-item">
                                    <span>
                                        <label className="mx-2 buisness-label-profile">{buisnessProfile.workLocation}</label>
                                        <i className="bi bi-geo-alt-fill icon-label-profile"></i>
                                    </span>
                                </li>
                                <li className="list-group-item list-prof-item">
                                    <span>
                                        <label className="mx-2 buisness-label-profile">{buisnessProfile.workNumber}</label>
                                        <i className="bi bi-telephone-fill icon-label-profile"></i>
                                    </span>
                                </li>
                                <li className="list-group-item list-prof-item">
                                    <span>
                                        <label className="mx-2 buisness-label-profile">{buisnessProfile.workMail}</label>
                                        <i className="fa fa-envelope icon-label-profile" aria-hidden="true"></i>
                                    </span>
                                </li>
                                <li className="list-group-item prof-lis list-prof-item">
                                    <span>
                                        <label className="mx-2 buisness-label-profile">{buisnessProfile.workDescription}</label>
                                        <i className="fa fa-list-alt icon-label-profile" aria-hidden="true"></i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/** First Col **/}
                    <div className="col-2 left-b">
                        <img src={buisnessProfile.workPicture} className="rounded-circle bu-image" alt="..." />
                        <div className="rounded-circle green-b"></div>
                    </div>
                </div>
                <NavLink to="/editProfile" exact="true" style={{ display: isUserOrBuisness == 'buisness' ? 'block' : 'none' }} >
                    <button type='button' className='btn btn-edit' style={{marginTop: '5em'}} >
                        تعديل المعلومات
                    </button>
                </NavLink>
            </div>

            <Modal show={showStatistics} onHide={handleCloseStatistics} size='lg'>
                <Modal.Body><Rate1/></Modal.Body>
                <Modal.Footer dir="auto">
                    <Button variant="secondary" className="btn btn-calendar-modal-cancel"
                        onClick={handleCloseStatistics}>
                        إلغاء
                    </Button>
                    <Button variant="primary" className="btn btn-calendar-modal-save"
                        onClick={handleCloseStatistics}>
                        إغلاق
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}
export default Profile;

