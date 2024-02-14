import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Projects() {
    const [post, setPost] = useState([])
    useEffect(() => {
        axios('https://fakestoreapi.com/products')
            .then((res) => {
                setPost(res.data)
            })
            .catch(() => {
                alert("API Loading Error... Something went wrong")
            })
    })
    return (
        <div>
            {/* Page Header Start */}
            <div className="container-fluid page-header py-5">
                <div className="container text-center py-5">
                    <h1 className="display-2 text-white mb-4 animated slideInDown">projects</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item text-white" aria-current="page">projects</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Project Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                        <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Our Project</h5>
                        <h1 className="display-5">Our recently completed projects</h1>
                    </div>
                    <div className="row g-5">
                        {
                            post.map((value) => {
                                // console.log(value.title)
                                return (
                                    <div className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="project-item">
                                            <div className="project-left bg-dark" />
                                            <div className="project-right bg-dark" />
                                            <img src={value.image} className="img-fluid h-100" alt="img" />
                                            <a className="fs-4 fw-bold text-center">{value.title}</a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {/* Project End */}
        </div>
    )
}
