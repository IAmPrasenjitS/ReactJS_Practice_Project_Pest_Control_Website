import { useFormik } from 'formik'
import React from 'react'
import validRules from '../others/validator'

export default function Registration() {
    const initialValues = {
        name: null,
        email: null,
        password: null,
        qualiF: null,
        gender: null,
        knownTech: null,
        comment: null
    }
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema:validRules,
        onSubmit: (values)=>{
            console.log(values)
        }
    })
    return (
        <div>
            <div className="container px-5 my-5 form-sec">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h2>Registration</h2>
                        <form id="contactForm" onSubmit={formik.handleSubmit}>
                            
                            {/* ======================= Name ======================= */}
                            <div className="form-floating mb-3">
                                <input name='name' className="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} />
                                <label htmlFor="name">Name</label>
                                <div className="errorMessage">{formik.errors.name&&formik.touched.name?formik.errors.name:null}</div>
                            </div>
                            
                            {/* ======================= Email Address ======================= */}
                            <div className="form-floating mb-3">
                                <input name='email' className="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
                                <label htmlFor="emailAddress">Email Address</label>
                                <div className="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                                <div className="errorMessage">{formik.errors.email&&formik.touched.email?formik.errors.email:null}</div>
                                {/* <div className="errorMessage">{formik.errors.email}</div> */}
                            </div>
                            
                            {/* ======================= Password ======================= */}
                            <div className="form-floating mb-3">
                                <input name='password' className="form-control" id="password" type="text" placeholder="Password" data-sb-validations="required" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} />
                                <label htmlFor="password">Password</label>
                                <div className="errorMessage">{formik.errors.password&&formik.touched.password?formik.errors.password:null}</div>
                            </div>
                            
                            {/* ======================= Qualification ======================= */}
                            <div className="form-floating mb-3">
                                <select name='qualiF' className="form-select" id="qualification" aria-label="Qualification" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.qualiF}>
                                    <option value="">Select</option>
                                    <option value="Bsc">Bsc</option>
                                    <option value="BCA">BCA</option>
                                    <option value="B.Tech">B.Tech</option>
                                    <option value="Msc">Msc</option>
                                    <option value="MCA">MCA</option>
                                    <option value="M.Tech">M.Tech</option>
                                </select>
                                <label htmlFor="qualification">Highest Qualification</label>
                                <div className="errorMessage">{formik.errors.qualiF&&formik.touched.qualiF?formik.errors.qualiF:null}</div>
                            </div>
                            
                            {/* ======================= Gender ======================= */}
                            <div className="mb-3">
                                <label className="form-label d-block">Gender</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" value="male" type="radio" name="gender" data-sb-validations="required" onChange={formik.handleChange}  />
                                    <label className="form-check-label" htmlFor="male">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" value="female" type="radio" name="gender" data-sb-validations="required" onChange={formik.handleChange} />
                                    <label className="form-check-label" htmlFor="female">Female</label>
                                </div>
                                <div className="errorMessage">{formik.errors.gender&&formik.touched.gender?formik.errors.gender:null}</div>
                            </div>

                            {/* ======================= Known Technologies ======================= */}
                            <div className="mb-3">
                                <label className="form-label d-block">Known Technologies</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" id="c" type="checkbox" name="knownTech" data-sb-validations="required" value="c" onBlur={formik.handleBlur}  onChange={formik.handleChange}/>
                                    <label className="form-check-label" htmlFor="c">C</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" id="c" type="checkbox" name="knownTech" data-sb-validations="required" value="cpp" onBlur={formik.handleBlur}  onChange={formik.handleChange}/>
                                    <label className="form-check-label" htmlFor="c">C++</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" id="java" type="checkbox" name="knownTech" data-sb-validations="required" value="java" onBlur={formik.handleBlur} onChange={formik.handleChange}/>
                                    <label className="form-check-label" htmlFor="java">Java</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" id="python" type="checkbox" name="knownTech" data-sb-validations="required" value="python"  onBlur={formik.handleBlur} onChange={formik.handleChange}/>
                                    <label className="form-check-label" htmlFor="python">Python</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" id="javaScript" type="checkbox" name="knownTech" data-sb-validations="required" value="javascript"  onBlur={formik.handleBlur} onChange={formik.handleChange}/>
                                    <label className="form-check-label" htmlFor="javaScript">JavaScript</label>
                                </div>
                                <div className="errorMessage">{formik.errors.knownTech&&formik.touched.knownTech?formik.errors.knownTech:null}</div>
                            </div>
                            
                            {/* ======================= Comment ======================= */}
                            <div className="form-floating mb-3">
                                <textarea name="comment" className="form-control" id="comment" type="text" placeholder="Comment" style={{ height: '10rem' }} data-sb-validations="required" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                <label htmlFor="comment">Comment</label>
                                <div className="errorMessage">{formik.errors.comment&&formik.touched.comment?formik.errors.comment:null}</div>
                            </div>
                            
                            {/* ======================= Form submission successful ======================= */}
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    <p>To activate this form, sign up at</p>
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            
                            {/* ======================= Error sending message ======================= */}
                            <div className="d-none" id="submitErrorMessage">
                                <div className="text-center text-danger mb-3">Error sending message!</div>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary btn-lg btn-reg" id="submitButton" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </div>
    )
}
