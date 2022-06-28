import React from 'react';
import '../../bootstrap/css/bootstrap.css';
import '../style/App.css';
import { useSelector, useDispatch } from 'react-redux';


function WorkHours() {

    const st = useSelector((state) => state.dataB);
    const schedules = st.workSchedule;
    let length = schedules.length;
    
    const dispatch = useDispatch();
    const newSchedule = st.workSchedule;

    const switchState = (dayId, pickerId) => {
        // for loop for synchronization
        let i;
        let index = dayId[3];
        for(i = 1 ; i <= 2 ; i++){
            if(i===1){
                var temp = document.getElementById(dayId).textContent;
                document.getElementById(dayId).textContent = ((temp === 'مغلق') ? ('مفتوح') : ('مغلق'));
                newSchedule[index-1].opened = ((temp === 'مغلق') ? ('مفتوح') : ('مغلق'));
                i++;
            }else{
                dispatch({
                    type: 'edit-schedule',
                    state: newSchedule
                });
            }
        }
        var temp1 = document.getElementById(pickerId).style.display;
        document.getElementById(pickerId).style.display = ((temp1 === 'none') ? ('') : ('none'));
    }
    const switchToggle = (toggleId) => {
        var temp2 = document.getElementById(toggleId).defaultChecked;
        document.getElementById(toggleId).defaultChecked = ((temp2 === 'checked') ? ('') : ('checked'));
    }

    const editTime = (event, timeId) => {
        document.getElementById(timeId).value = event.target.value;
    }
    

    
    const ListDays = length ? (
        schedules.map(schedule => {

            return (
                <div className="col" key={schedule.day}>
                    <div className="container container-work-hours" dir="auto">
                        <div className="row">
                            {/* first */}
                            <div className="col-1">
                                {schedule.day}
                            </div>
                            {/* second */}
                            <div className="col-4">
                                <label className="toggle-switch mx-2">
                                    <input type="checkbox" id={schedule.toggleId} className="checkbox-open-close" onChange={() => switchToggle(schedule.toggleId)} defaultChecked={((schedule.opened === 'مغلق') ? ('') : ('checked'))}/>
                                    <span className="switch-btn" onClick={() => switchState(schedule.dayId, schedule.timePickerId)} ></span>
                                </label>
                                <span id={schedule.dayId}>{schedule.opened}</span>
                            </div>
                            {/* third */}
                            <div className="col-7" id={schedule.timePickerId} style={{ display: ((schedule.opened === 'مغلق') ? ('none') : (''))}}>
                                <input type="time" id={schedule.timePickerFromId} placeholder="Please select Time" defaultValue={schedule.timeFrom} 
                                    onChange={(event) => editTime(event, schedule.timePickerFromId)}/>
                                <span className='mx-3'>إلى</span>
                                <input type="time" id={schedule.timePickerToId} placeholder="Please select Time" defaultValue={schedule.timeTo}
                                    onChange={(event) => editTime(event, schedule.timePickerToId)}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    ) : (
        <div className='empty-store'>
            error
        </div>
    )
   
    return (
        <div className='work-hours'>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.7.2/font/bootstrap-icons.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
            
            <div dir="auto">
                {ListDays}
            </div>
            
        </div>

    )
    
}
export default WorkHours;

