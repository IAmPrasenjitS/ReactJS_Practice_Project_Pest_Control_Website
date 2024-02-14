import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function Login({isLoggedIn, setIsLoggedIn}) {
    const [loginInfo, setLoginInfo] = useState([])
    const emailRef = useRef()
    const passRef = useRef()
    const errMessageRef = useRef()
    const navigation = useNavigate()
    const submitLoginForm = () => {
        const email = emailRef.current.value
        const pass = passRef.current.value
        // setLoginInfo([email, pass])
        axios.post('https://reqres.in/api/login',{email:email, password:pass})
        .then((res)=>{
            localStorage.setItem('tokenId', res.data.token)
            setIsLoggedIn(true)
            navigation('/loggedin')
        })
        .catch((err)=>{
            errMessageRef.current.innerText = "Invalid Credentials"
        })
    }
    useEffect(()=>{
        if(isLoggedIn){
            navigation('/loggedin')
        }
    }, [])
  return (
    <div>
        <section className="h-100 gradient-form" style={{backgroundColor: '#eee'}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <h4 className="mt-1 mb-5 pb-1">Test Login using Fake API</h4>
                      </div>
                      <form>
                        <p>Please login to your account</p>
                        <div className="form-outline mb-4">
                          <input ref={emailRef} type="email" id="form2Example11" className="form-control" placeholder="Phone number or email address" />
                          <label className="form-label" htmlFor="form2Example11">Username</label>
                        </div>
                        <div className="form-outline mb-4">
                          <input ref={passRef} type="password" id="form2Example22" className="form-control" />
                          <label className="form-label" htmlFor="form2Example22">Password</label>
                        </div>
                        <p ref={errMessageRef}></p>
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={submitLoginForm}>Log in</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                        <div className="text-center pt-1 mb-5 pb-1">
                          <Link className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" to='/registration'>Registration</Link>
                        </div>
                      <h4 className="mb-4">Credentials</h4>
                      <p className="small mb-0">User Name: eve.holt@reqres.in
                      <br />Password: cityslicka</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  )
}
