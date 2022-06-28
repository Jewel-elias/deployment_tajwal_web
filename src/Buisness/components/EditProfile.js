import React, { useRef, useState, useEffect } from 'react';
import '../../bootstrap/css/bootstrap.css';
import '../style/App.css';
import TempPicture from '../images/cava.jpg';
import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
import { NavLink } from "react-router-dom";
import WorkHours from './WorkHours';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useBetween } from 'use-between';


function EditProfile() {

    // REFERENCE for input an image
    const inputRef = useRef();

    // dispatch for save edits
    const dispatch = useDispatch();

    const st = useSelector((state) => state.dataB);
    const {buisnessProfile, setBuisnessProfile} = useBetween(st.useSharingFilters);

    const schedules = st.workSchedule;

    // set TODAY WORK
    const [todayWork, setTodayWork] = useState('');
    const [todayWorkTime, setTodayWorkTime] = useState(buisnessProfile.openOrclose);

    // MODAL SHOW FUNCTIONS
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // state for editing information
    const newState = {
        WorkName: buisnessProfile.WorkName,
        WorkType: buisnessProfile.WorkType,
        openOrclose: todayWorkTime,
        workTime: buisnessProfile.workTime,
        workLocation: buisnessProfile.workLocation,
        workNumber: buisnessProfile.workNumber,
        workMail: buisnessProfile.workMail,
        workPassword: buisnessProfile.workPassword,
        workConPassword: buisnessProfile.workConPassword,
        workDescription: buisnessProfile.workDescription,
        workPicture: buisnessProfile.workPicture,
        nFollowers: buisnessProfile.nFollowers,
        nProducts: buisnessProfile.nProducts,
        nRaters: buisnessProfile.nRaters,
    }
    //state for editing schedule
    const newSchedule = schedules;

    const submitEditSchedule = () => {
        dispatch({
            type: 'edit-schedule',
            state: newSchedule
        });
    }
    useEffect(() => {

        // get work hours of today 

        const d = new Date();
        let day = d.getDay();
        if (day === 6) day -= 6;
        else day += 1;

        if (st.workSchedule[day].opened === 'مغلق') {
            setTodayWork('مغلق اليوم');
            setTodayWorkTime('مغلق الآن');
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


    const editSchedule = (event) => {

        // for loop for synchronization
        for (let i = 0; i <= 7; i++) {
            if (i === 7) {
                submitEditSchedule();
            }
            else if ((newSchedule[i].opened === 'مفتوح') && (i !== 7)) {
                // 19:00
                // 09:00
                const from = document.getElementById(schedules[i].timePickerFromId).value;
                const to = document.getElementById(schedules[i].timePickerToId).value;
                const fromHour = from[0] + from[1];
                const toHour = to[0] + to[1];
                const fromMinute = from[3] + from[4];
                const toMinute = to[3] + to[4];

                if (fromHour > toHour || ((fromHour === toHour) && fromMinute > toMinute)) {
                    console.log('error')
                }
                newSchedule[i].timeFrom = from;
                newSchedule[i].timeTo = to;
            }
        }
        handleClose();
    }

    const handleChangeName = (event) => {
        newState.WorkName = event.target.value;
    }
    const handleChangeType = (event) => {
        newState.WorkType = event.target.value;
    }
    const handleChangeOpenOrClose = (event) => {
        newState.openOrclose = event.target.value;
    }
    const handleChangeTime = (event) => {
        newState.workTime = event.target.value;
    }
    const handleChangeLocation = (event) => {
        newState.workLocation = event.target.value;
    }
    const handleChangeNumber = (event) => {
        newState.workNumber = event.target.value;
    }
    const handleChangeMail = (event) => {
        newState.workMail = event.target.value;
    }
    const handleChangePassword = (event) => {
        newState.workPassword = event.target.value;
    }
    const handleChangeConPassword = (event) => {
        newState.workConPassword = event.target.value;
    }
    const handleChangeDescription = (event) => {
        newState.workDescription = event.target.value;
    }
    const handleChangePicture = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();

            reader.onload = function (event) {
                newState.workPicture = event.target.result;//the new picture
                document.getElementById('buisness-picture').setAttribute('src', event.target.result);
            };

            reader.readAsDataURL(event.target.files[0]);
        }
    }

    function focusOnInput() {
        inputRef.current.click();
    }

    //upload image to backend
    const handleFileUpload = (event) => {
        // const fd = new FormData();
        // fd.append('image', newState.workPicture, newState.workPicture.name)
        // axios.post('', fd, {
        //     // report the progress of the file upload
        //     onUploadProgress: ProgressEvent => {
        //         console.log('Upload Progress: ' + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%')
        //     }
        // })
        //     .then(res => {
        //         console.log(res);
        //     })
    }

    return (
        <div className='EditProfile'>

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
                    <div className="col">

                    </div>

                    {/**  Second Col **/}
                    <div className="col-8 align-items-start left-b-edit">
                        <div>
                            {/* Head */}

                            {/* List */}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item prof-list-edit">
                                    <span>
                                        <input type="text" className="form-control mx-2 buisness-label-profile-edit"
                                            defaultValue={st.buisnessProfile.WorkName} dir="auto" onChange={handleChangeName} />
                                        <i className="bi bi-file-person icon-label-profile"></i>
                                    </span>
                                </li>
                                <li className="list-group-item prof-list-edit">
                                    <span>
                                        <input type="text" className="form-control mx-2 buisness-label-profile-edit"
                                            defaultValue={st.buisnessProfile.WorkType} dir="auto" onChange={handleChangeType} />
                                        <i className="fa fa-cutlery icon-label-profile" aria-hidden="true"></i>
                                    </span>
                                </li>
                                {/* <li className="list-group-item prof-list-edit">
                                    <span>
                                        <input type="text" className="form-control mx-2 buisness-label-profile-edit"
                                            defaultValue={st.buisnessProfile.openOrclose} dir="auto" onChange={handleChangeOpenOrClose} />

                                        <i className="bi bi-check-circle-fill icon-label-profile"></i>

                                    </span>
                                </li> */}
                                <li className="list-group-item prof-list-edit">
                                    <span>
                                        <Button variant="primary" onClick={handleShow} className="calendar-icon">
                                            <i className="bi bi-calendar-week icon-label-profile"></i>
                                        </Button>

                                        <input type="text" className="form-control mx-2 buisness-label-profile-edit"
                                            defaultValue={todayWork}
                                            dir="auto" onChange={handleChangeTime} disabled />
                                        <i className="bi bi-clock-fill icon-label-profile"></i>
                                    </span>
                                </li>
                                <li className="list-group-item prof-list-edit">
                                    <span>
                                        <input type="text" className="form-control mx-2 buisness-label-profile-edit"
                                            defaultValue={st.buisnessProfile.workLocation} dir="auto" onChange={handleChangeLocation} />
                                        <i className="bi bi-geo-alt-fill icon-label-profile"></i>
                                    </span>
                                </li>
                                <li className="list-group-item prof-list-edit">
                                    <span>
                                        <input type="text" className="form-control mx-2 buisness-label-profile-edit"
                                            defaultValue={st.buisnessProfile.workNumber} dir="right" onChange={handleChangeNumber} />
                                        <i className="bi bi-telephone-fill icon-label-profile"></i>
                                    </span>
                                </li>
                                <li className="list-group-item prof-list-edit">
                                    <span>
                                        <input type="text" className="form-control mx-2 buisness-label-profile-edit"
                                            defaultValue={st.buisnessProfile.workMail} dir="auto" onChange={handleChangeMail} />
                                        <i className="fa fa-envelope icon-label-profile" aria-hidden="true"></i>
                                    </span>
                                </li>
                                <li className="list-group-item prof-list-edit">
                                    <span>
                                        <input type="password" className="form-control mx-2 buisness-label-profile-edit"
                                            defaultValue={st.buisnessProfile.workPassword} dir="auto" onChange={handleChangePassword} />
                                        <i className="bi bi-key-fill icon-label-profile" aria-hidden="true"></i>
                                    </span>
                                </li>
                                <li className="list-group-item prof-list-edit">
                                    <span>
                                        <input type="password" className="form-control mx-2 buisness-label-profile-edit"
                                            defaultValue={st.buisnessProfile.workConPassword} dir="auto" onChange={handleChangeConPassword} />
                                        <i className="bi bi-key-fill icon-label-profile" aria-hidden="true"></i>
                                    </span>
                                </li>
                                <li className="list-group-item prof-list-edit">
                                    <span>
                                        <input type="text" className="form-control mx-2 buisness-label-profile-edit"
                                            defaultValue={st.buisnessProfile.workDescription} dir="auto" onChange={handleChangeDescription} />
                                        <i className="fa fa-list-alt icon-label-profile" aria-hidden="true"></i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/** First Col **/}
                    <div className="col-2 left-b">

                        <input
                            type="file"
                            onChange={handleChangePicture}
                            ref={inputRef}
                            accept=".jpg,.jpeg,.png"
                            style={{ display: 'none' }}
                            id="upload-profile-pic"
                        />
                        <img src={newState.workPicture} id='buisness-picture' className="rounded-circle bu-image" alt="..." />
                        <div className="rounded-circle green-b"></div>
                        <button className='btn btn-edit btn-edit-inf' onClick={focusOnInput}>تغيير الصورة</button>

                    </div>
                </div>

                <NavLink to="/ProfileBuisness" exact="true" >

                    <button type='button' className='btn btn-edit' style={{marginTop: '6em'}}
                        onClick={() => setBuisnessProfile(newState) }>
                        حفظ التعديلات
                    </button>

                </NavLink>
            </div>




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
                        onClick={editSchedule}>
                        حفظ البرنامج
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>

    )
}
export default EditProfile;

