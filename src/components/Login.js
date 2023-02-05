import {useNavigate, NavLink} from "react-router-dom";
import React, {useRef, useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../contexts/AuthContext";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox, MDBValidationItem
    ,MDBValidation
}
    from 'mdb-react-ui-kit';


export default function login() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [emailLogin, setEmail] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [passwordLogin, setPassword] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const nav = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
            .then((userData) => {
                // Signed in
                const user = userData.user;
                nav("/")
            })
            .catch((error) => {
                switch (error.code) {
                    case "auth/invalid-email":
                        alert("Invalid email address");
                        break;
                    case "auth/wrong-password":
                        alert("Wrong password");
                        break;
                    default:
                        alert(error.message);
                }});
    }


    return (
        <>
        <Header/>
        <MDBValidation className="row g-3">
        <MDBContainer fluid className='p-4'>

            <MDBRow>

                <MDBCol md='3' className='text-center text-md-start d-flex flex-column justify-content-center'>

                    <h2 className="my-4 display-3 fw-bold ls-tight px-3">
                        We Fix <br />
                        <span className="text-primary">Your Problems</span>
                    </h2>

                    <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
                        We will take care of your heart!!!!!!!
                    </p>

                </MDBCol>


                <MDBCol md='9'>
                    <MDBCard className='mx-auto' >
                        <h2 className='pt-5'> Login</h2>
                        <MDBCardBody className='p-5'>
                            <MDBValidationItem feedback='Please provide a valid zip.' invalid>
                            <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'   onChange={(e) => {setEmail(e.target.value)}}/>
                            </MDBValidationItem>
                            <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' minLength={8} invalid required={true} onChange={(e) => {setPassword(e.target.value)}} />

                            <div className='d-flex justify-content-center mb-4'>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember Password' />
                            </div>

                            <MDBBtn className='w-100 mb-4' size='md' onClick={(onLogin)}>sign in</MDBBtn>

                            <div className="text-center">

                                <a href="/registration">or sign up ?</a>

                            </div>

                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>


            </MDBRow>

        </MDBContainer>
        </MDBValidation>
            <Footer/>
        </>
    );}