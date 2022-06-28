/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import '../../../bootstrap/css/bootstrap.css';
import '../../style/App.css';
import { useSelector } from 'react-redux';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


function Feedbacks() {
    const st = useSelector((state) => state.dataB);

    const feedbacks = st.feedbacks;
    var keyFeedbacks = '1';
    const notifications = st.notifications;
    let length = feedbacks.length;
    // length=0;

    // Skeleton wait load
    setTimeout(() => {
        // Comments
        var skeletonTodoLoad = document.getElementsByClassName('skeleton-feedback-load');
        for (let i = 0; i < skeletonTodoLoad.length; i++) {
            skeletonTodoLoad[i].style.display = 'none'
        }

        var listItemsLoad = document.getElementsByClassName('list-feedback-load');
        for (let i = 0; i < listItemsLoad.length; i++) {
            listItemsLoad[i].style.display = 'flex'
        }


    }, 3000)

    // SKELETONS
    const tempSkeletonFeedbacks = ['skeletonFeedback1', 'skeletonFeedback2', 'skeletonFeedback3', 'skeletonFeedback4', 'skeletonFeedback5'];
    var skeletonFeedbacks = tempSkeletonFeedbacks.map(skeleton => {
        var classText = 'notification-buisness-text feedback-box title-animate';
        var classLineImg = 'notification-line-img feedback-line-img skeleton';
        return (
            <div className='notification-buisness skeleton-feedback-load' key={skeleton} >
                <div className={classLineImg}>
                    <i className="bi bi-exclamation-triangle" style={{ fontWeight: "bold", fontSize: "1.2em" }}></i>
                </div>
                <div className={classText}>
                    <div className="not-text skeleton skeleton-text-notif"></div>
                    <div className="not-date skeleton skeleton-text-notif"></div>
                </div>
            </div >
        )
    })


    const ListFeedbacks = length ? (
        feedbacks.map(feedback => {
            var classText = 'notification-buisness-text feedback-box';
            var classLineImg = 'notification-line-img feedback-line-img';

            return (
                <div className='notification-buisness list-feedback-load' key={feedback.id} >
                    <div className={classLineImg}>
                        <i className="bi bi-exclamation-triangle" style={{ fontWeight: "bold", fontSize: "1.2em" }}></i>
                    </div>
                    <div className={classText}>
                        <div className="not-text">
                            {feedback.text}
                        </div>
                        <div className="not-date">
                            {feedback.date}
                        </div>
                    </div>
                </div >
            )
        })
    ) : (
        <div className='no-notification'>

            <div>
                <span className='count-0'>0</span>
                <i className="bi bi-bell no-notification-icon"></i>
            </div>
            <div className='no-notification-line1'>ليس لديك أي إشعارات حتى الآن.</div>
            {/* <i className="bi bi-bell"></i> */}
        </div>
    )


    return (
        <>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.7.2/font/bootstrap-icons.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>


            <ul className="notification-list" dir="auto" >
                {skeletonFeedbacks}
                {
                    ListFeedbacks.length ? (
                        ListFeedbacks.map(notify => {
                            return (
                                <li key={keyFeedbacks++}>{notify}</li>
                            )
                        })
                    ) : (<></>)
                }
            </ul>

        </>

    )
}
export default Feedbacks;

