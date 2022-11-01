import React from 'react'
import { FaIdCard, FaDownload, FaMoneyBill, FaBootstrap, FaDev, FaCheck } from 'react-icons/fa'

export default function Item() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-xxl-4 col-xl-6 col-md-6 mb-5'>
                        <div className='card bg-light border-0 h-100'>
                            <div className='card-body text-center p-4 p-lg-5 pt-0 pt-lg-0'>
                                <div className='feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                                    <FaIdCard />
                                </div>
                                <h2>Fresh new layout</h2>
                                <p>With Bootstrap 5, we've created a fresh <br /> new layout for  this template!</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-4  col-xl-6 col-md-6   mb-5'>
                        <div className='card bg-light border-0 h-100'>
                            <div className='card-body text-center p-4 p-lg-5 pt-0 pt-lg-0'>
                                <div className='feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                                    <FaDownload />
                                </div>
                                <h2>Free to download</h2>
                                <p>As always, Start Bootstrap has a powerful collectin of  free templates.</p>

                            </div>
                        </div>
                    </div>

                    <div className='col-xxl-4  col-xl-6 col-md-6   mb-5'>
                        <div className='card bg-light border-0 h-100'>
                            <div className='card-body text-center p-4 p-lg-5 pt-0 pt-lg-0'>
                                <div className='feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                                    <FaMoneyBill />
                                </div>
                                <h2>Jumbotron hero header</h2>
                                <p>The heroic part of this template is the jumbotron hero header!</p>

                            </div>
                        </div>
                    </div>

                    <div className='col-xxl-4  col-xl-6 col-md-6   mb-5'>
                        <div className='card bg-light border-0 h-100'>
                            <div className='card-body text-center p-4 p-lg-5 pt-0 pt-lg-0'>
                                <div className='feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                                    <FaBootstrap />
                                </div>
                                <h2>Feature boxes</h2>
                                <p>We've created some custom feature boxes using <br /> Bootstrap icons!</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-4  col-xl-6 col-md-6   mb-5'>
                        <div className='card bg-light border-0 h-100'>
                            <div className='card-body text-center p-4 p-lg-5 pt-0 pt-lg-0'>
                                <div className='feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                                    <FaDev />
                                </div>
                                <h2>Simple clean code</h2>
                                <p>We keep our dependencies up to date and squash bugs  as they come!</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-4  col-xl-6 col-md-6   mb-5'>
                        <div className='card bg-light border-0 h-100'>
                            <div className='card-body text-center p-4 p-lg-5 pt-0 pt-lg-0'>
                                <div className='feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                                    <FaCheck />
                                </div>
                                <h2>A name you trust</h2>
                                <p>Start Bootstrap has been the leader in free Bootstrap  templates since 2013!</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
