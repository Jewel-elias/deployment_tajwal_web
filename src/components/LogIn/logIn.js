import { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { useBetween } from 'use-between';
import './/LogIn.scss'
function LogIn() {

    const state = useSelector((state) => state.data);
    const { isUserOrBuisness, setisUserOrBusisness } = useBetween(state.useShareState);
    const { isUserLogin, setisUserLogin } = useBetween(state.useShareState);
    const { currentRoot, setcurrentRoot } = useBetween(state.useShareState);
 
    const users = state.users;

    const [inputtext, setinputtext] = useState({
        email: "",
        password: ""
    });
    const [warnemail, setwarnemail] = useState(false);
    const [warnpassword, setwarnpassword] = useState(false);
    const [correctInfo, setCorrectInfo] = useState(false);



    const [eye, seteye] = useState(true);
    const [password, setpassword] = useState("password");
    const [type, settype] = useState(false);

    const inputEvent = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setinputtext((lastValue) => {
            return {
                ...lastValue,
                [name]: value
            }
        });

    }
    const submitForm = (e) => {
        e.preventDefault();
        setwarnemail(false);
        setwarnpassword(false);
        setCorrectInfo(false);

        users.map(item => {
            if (item.email == inputtext.email && item.password == inputtext.password) {
                setCorrectInfo(true);
                //send true to backEnd;

            }

            if (inputtext.email == 'jawel@hotmail.com') {
                setisUserOrBusisness('buisness');
                 setcurrentRoot('/ProductBusi');
                setisUserLogin(true);

            }
            else if(inputtext.email=='meeryawad@hotmail.com') {
                setisUserOrBusisness('user');
                setisUserLogin(true);
                 setcurrentRoot('/Map');
               

            }
        })


        if (inputtext.email == "") {
            setwarnemail(true);

        }

        else if (inputtext.password == "") {
            setwarnpassword(true);

        }
        // else {
        //     alert("form submitted");
        // }

    }

    const Eye = () => {
        if (password == "password") {
            setpassword("text");
            seteye(false);
            settype(true);
        }
        else {
            setpassword("password");
            seteye(true);
            settype(false);
        }
    }


    return (
        <div className='LogIn'>
            <div className="dropdown-menu" >
                <form className="px-4 py-3" >
                    <div className='trin'></div>
                    <div className="form-group">
                        {/* <label for="exampleDropdownFormEmail1">البريد الالكتروني</label> */}
                        <div className='LoginBy'><bdi> تسجيل الدخول الى <b className='name'>FreshMap </b>عبر</bdi> </div>
                        <button type="submit" className="btn facebook"> <i className='fa fa-facebook'></i> Facebook</button>

                        <div className="or">أو</div>

                        <input type="email" className="form-control" placeholder="البريد الالكتروني"
                            value={inputtext.email} onChange={inputEvent} name="email" />
                    </div>
                    <div className="form-group">
                        {/* <label for="exampleDropdownFormPassword1">كلمة السر</label> */}
                        <input type={password} className="form-control" placeholder="كلمة المرور" dir='left'
                            value={inputtext.password} onChange={inputEvent} name="password" />
                        <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`} ></i>
                    </div>

                   
                        <button type="submit" className="btn login" onClick={submitForm}>
                     تسجيل الدخول</button>
                 
                </form>
                {/* <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">هل نسيت كلمة السر؟</a> */}
            </div>
        </div>
    )
}

export default LogIn;