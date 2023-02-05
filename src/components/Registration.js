import React, {useRef, useState, useEffect} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import "./login.css"
import {createUserWithEmailAndPassword} from "firebase/auth";
import {app, auth} from "../contexts/AuthContext"
import { useNavigate} from "react-router-dom";

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import {responsivePropType} from "react-bootstrap/createUtilityClasses";
import {createGlobalStyle} from "styled-components";

export default function Registration() {
    const [userName, setUserName] = useState("")
    const[email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const nav = useNavigate()
    // Validate password
    const validatePassword = () => {
        let isValid = true
        if (password !== '' && confirmPassword !== ''){
            if (password !== confirmPassword) {
                isValid = false
                setError('Passwords does not match')
            }
        }
        return isValid
    }

    const register = e => {
        e.preventDefault()
        setError('')
        if(validatePassword())
        {createUserWithEmailAndPassword(auth, email, password)
            .then((userData) => {
                //sign in
                const user = userData.user
                console.log(user)
                nav("/")
            })
            .catch((e) =>
            {
                console.log(e.message)
                console.log(e.code)
            })}
        else{
            alert("Password is not matched ")
        }
    }
    return (
        <>
            <Header/>
                <MDBContainer fluid className='m-lg-3 justify-content-center' >
                    <MDBCard className='text-black m-9 w-20 p-3 justify-content-center mx-auto' style={{borderRadius: '10px'}}>
                        <MDBCardBody className="mx-auto">
                            <MDBCol md='9' lg='10' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                                <h2 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</h2>


                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="envelope me-3" size='lg'/>
                                    <MDBInput label='Your Email' id='form2' type='email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="lock me-3" size='lg'/>
                                    <MDBInput label='Password' id='form3' type='password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="key me-3" size='lg'/>
                                    <MDBInput label='Confirm your password' id='form4' type='password' value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}}/>
                                </div>

                                <MDBBtn className='mb-4' size='lg' onClick={register}>Register</MDBBtn>

                            </MDBCol>
                            <MDBCol md='3' lg='3' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage src='data:image/png;base64,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' fluid/>
                            </MDBCol>

                        </MDBCardBody>
                    </MDBCard>

                </MDBContainer>
            <Footer/>
        </>
    );}