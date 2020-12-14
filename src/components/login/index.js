import React, {useEffect, useState} from 'react';
import LoginModal from "../login-modal";
import RegistrationModal from "../registration-modal";
import HeaderMenu from "../header-menu";
import {connect} from 'react-redux';
import {logout} from "../../store/actions/authActions";

function Login(props){

    const [loginModalVisibility, setLoginModalVisibility] = useState(false);
    const [registrationModalVisibility, setRegistrationModalVisibility] = useState(false);

    useEffect(() => {
        if(props.authReducer.isSignUpSuccess){
            setRegistrationModalVisibility(false);
            setLoginModalVisibility(true);
        }
    }, [props.authReducer.isSignUpSuccess]);

    const userLoggedOut = (
        <ul className="upper-nav-list" style={{display: "flex", listStyle: "none"}}>
            <li onClick={() => setLoginModalVisibility(true)} style={{marginRight: 30}}>Login</li>
            <li onClick={() => setRegistrationModalVisibility(true)}>Sign up</li>
        </ul>
    );

    const userLoggedIn = (
        <ul className="upper-nav-list">
            <li>Hello</li>
            <li onClick={props.logout}>Logout</li>
        </ul>
    );

    return (
        <div className="wrapper">
            <div className="upper-nav">
                <div className="container">
                    {props.authReducer.isAuth ? userLoggedIn : userLoggedOut}
                </div>
            </div>
            <LoginModal loginModalVisibility={loginModalVisibility} setLoginModalVisibility={setLoginModalVisibility}/>
            <RegistrationModal registrationModalVisibility={registrationModalVisibility} setRegistrationModalVisibility={setRegistrationModalVisibility}/>
        </div>
    );
}

const mapStateToProps = state => ({
    authReducer: state.authReducer
});

const mapDispatchToProps = {
    logout
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);