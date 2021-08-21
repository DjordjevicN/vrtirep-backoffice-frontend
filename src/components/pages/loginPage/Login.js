import React, { useState } from 'react';
import './loginPage.scss'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Redirect } from 'react-router-dom';

const authUser = true
function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [loginDetail, setLoginDetail] = useState({ email: '', password: '' })


    if (authUser) {
        return <Redirect to='/' />
    }
    const updateField = e => {
        setLoginDetail({
            ...loginDetail,
            [e.target.name]: e.target.value
        });
    };
    const submitForm = () => {
        console.log(loginDetail);
    }

    return (
        <div className="loginPage">
            <div className="loginPage__content">
                <div className="loginPage__content--input">
                    <div className="loginPage--leftSide">
                        <h1 className="loginPage--pageTitle">WELCOME TO VRTIREP BACKOFFICE</h1>
                        <div className="loginPage__actions">
                            <input type="text" placeholder='Email' name='email' onChange={updateField} autoComplete="off" />
                            <div className="loginPage__actions--password" >
                                <input type={showPassword ? "text" : "password"} autoComplete="off" placeholder="Password" name='password' onChange={updateField} />
                                {showPassword ? <AiOutlineEye className='eyeButton' onClick={() => setShowPassword(!showPassword)} /> : <AiOutlineEyeInvisible className='eyeButton' onClick={() => setShowPassword(!showPassword)} />}
                            </div>
                            <div className="loginPage__button">
                                <button className="BTN btn-half button-primary" onClick={submitForm} >Login</button>
                            </div>




                        </div>
                    </div>
                </div>
                <div className="loginPage__content--image">
                    {/* <img src="/images/bg_cat.jpg" alt="sideImage" /> */}
                </div>
            </div>
        </div >
    );
}

export default Login;
