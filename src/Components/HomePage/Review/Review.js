import React, { useState, useEffect } from 'react';

const Review = () => {
    const [allReviews, setAllReviews] = useState([]);

    // loading all reviews
    useEffect(() => {
        fetch('https://radiant-hamlet-66107.herokuapp.com/allReviews')
        .then(res => res.json())
        .then(data => setAllReviews(data))
    },[])
    console.log(typeof allReviews)
    return (
        <section id="services">
            <div className="container py-5 my-md-5 text-center">
                <h2>Our Team's <b style={{color: '#7ab259'}}></b></h2>

        
                <div className="row mt-5">
                    {
                        
                        <div key={1} className="col-md-6 col-lg-4 my-3">
                            <div className="py-3 px-4 border rounded h-100">
                                <div className="row text-left">
                                    <div className="col-4">
                                        <img src={'https://images-na.ssl-images-amazon.com/images/I/A1cvxvoQPVL._UY200_.jpg'} className="rounded" alt="" width="70px" />
                                    </div>
                                    <div className="col-8">
                                        <h4><b>{"Zain"}</b></h4>
                                        <p>{"Zain Agency"}</p>
                                    </div>
                                </div>
                                <p className="text-justify text-secondary">{"CEO of the company"}</p>
                            </div>
                        </div>
                        
                    }

{
                        
                        <div key={1} className="col-md-6 col-lg-4 my-3">
                            <div className="py-3 px-4 border rounded h-100">
                                <div className="row text-left">
                                    <div className="col-4">
                                        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStPVEZ0Mwp_gFfb5TTAK4M4kHGoseSGmFmxgVQrSPR3oRP34Q9460pmRZLMmY4TwfUZvI&usqp=CAU'} className="rounded" alt="" width="70px" />
                                    </div>
                                    <div className="col-8">
                                        <h4><b>{"Hasnain"}</b></h4>
                                        <p>{"Zain Agency"}</p>
                                    </div>
                                </div>
                                <p className="text-justify text-secondary">{"Manager"}</p>
                            </div>
                        </div>
                        
                    }
                     {
                        
                        <div key={1} className="col-md-6 col-lg-4 my-3">
                            <div className="py-3 px-4 border rounded h-100">
                                <div className="row text-left">
                                    <div className="col-4">
                                        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTySiRlu4HaKUBvs8NxbQabNFAbMG16JALwyA&usqp=CAU'} className="rounded" alt="" width="70px" />
                                    </div>
                                    <div className="col-8">
                                        <h4><b>{"Abdullah Mohammed"}</b></h4>
                                        <p>{"Zain Agency"}</p>
                                    </div>
                                </div>
                                <p className="text-justify text-secondary">{"Photographer"}</p>
                            </div>
                        </div>
                        
                    }

{
                        
                        <div key={1} className="col-md-6 col-lg-4 my-3">
                            <div className="py-3 px-4 border rounded h-100">
                                <div className="row text-left">
                                    <div className="col-4">
                                        <img src={'https://media-exp1.licdn.com/dms/image/C5603AQGvrIO7p1iexQ/profile-displayphoto-shrink_200_200/0/1631184992006?e=1667433600&v=beta&t=BbH8uVwT6FzV3Tn1mnHmVW1XM-dXO_mYnh5Q9SCDmkU'} className="rounded" alt="" width="70px" />
                                    </div>
                                    <div className="col-8">
                                        <h4><b>{"Ahmed raza"}</b></h4>
                                        <p>{"Zain Agency"}</p>
                                    </div>
                                </div>
                                <p className="text-justify text-secondary">{"Graphic Design"}</p>
                            </div>
                        </div>
                        
                    }


{
                        
                        <div key={1} className="col-md-6 col-lg-4 my-3">
                            <div className="py-3 px-4 border rounded h-100">
                                <div className="row text-left">
                                    <div className="col-4">
                                        <img src={'https://usern.tums.ac.ir/asset/UserPhoto/93886.JPG'} className="rounded" alt="" width="70px" />
                                    </div>
                                    <div className="col-8">
                                        <h4><b>{"Zainab"}</b></h4>
                                        <p>{"Zain Agency"}</p>
                                    </div>
                                </div>
                                <p className="text-justify text-secondary">{"Media Creator"}</p>
                            </div>
                        </div>
                        
                    }
                    {
                        
                        <div key={1} className="col-md-6 col-lg-4 my-3">
                            <div className="py-3 px-4 border rounded h-100">
                                <div className="row text-left">
                                    <div className="col-4">
                                        <img src={'https://alefredobooks.com/wp-content/uploads/2020/05/D-B204-4104-AF9E-92F8F8B5E5E7-Ladies-%D8%A8%D8%B3-%D8%A8%D9%86%D8%A7%D8%AA_600x600.jpg'} className="rounded" alt="" width="70px" />
                                    </div>
                                    <div className="col-8">
                                        <h4><b>{"Siwar Bsharat"}</b></h4>
                                        <p>{"Zain Agency"}</p>
                                    </div>
                                </div>
                                <p className="text-justify text-secondary">{"Marketing Team Leader"}</p>
                            </div>
                        </div>
                        
                    }
                          {
                        
                        <div key={1} className="col-md-6 col-lg-4 my-3">
                            <div className="py-3 px-4 border rounded h-100">
                                <div className="row text-left">
                                    <div className="col-4">
                                        <img src={'https://i0.wp.com/wikifamouspeople.com/wp-content/uploads/2019/01/msk-3.jpg?resize=534%2C462&ssl=1'} className="rounded" alt="" width="70px" />
                                    </div>
                                    <div className="col-8">
                                        <h4><b>{"Mohammed"}</b></h4>
                                        <p>{"Zain Agency"}</p>
                                    </div>
                                </div>
                                <p className="text-justify text-secondary">{"Social Media Influencer"}</p>
                            </div>
                        </div>
                        
                    }
                </div>
            </div>
        </section>
    );
};

export default Review;
