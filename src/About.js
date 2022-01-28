import React from 'react';
import picture from "./images/about.jpg"

function About() {
    return <>
        <section id="about" className="about-mf sect-pt4 route">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="box-shadow-full">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-sm-6 col-md-5">
                                            <div class="about-img">
                                                <img src={picture} style={{"borderRadius":"5px"}} alt="" />
                                            </div>
                                        </div>
                                        
                                        <div class="col-sm-6 col-md-7">
                                            <div class="about-info">
                                                <p><span class="title-s">Name: </span> <span>Kishore Chandrasekar</span></p>
                                                <p><span class="title-s">Profile: </span> <span>full stack developer</span></p>
                                                <p><span class="title-s">Email: </span> <span style={{fontSize:"14px"}}>karthiikkishore@gmail.com</span></p>
                                                <p><span class="title-s">Phone: </span> <span>9444841234</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="skill-mf">
                                        <p class="title-s">Skill</p>
                                        <span>HTML</span> <span class="pull-right">75%</span>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span>CSS</span> <span class="pull-right">70%</span>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span>JAVASCRIPT</span> <span class="pull-right">80%</span>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span>MONGO-DB</span> <span class="pull-right">60%</span>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span>My-SQL</span> <span class="pull-right">50%</span>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span>AWS</span> <span class="pull-right">40%</span>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{width: '40%'}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="about-me pt-4 pt-md-0">
                                        <div class="title-box-2">
                                            <h5 class="title-left">
                                                About me
                                            </h5>
                                        </div>
                                        <p class="lead">
                                            Hi! I am Kishore Chandrasekar from Chennai.I am a Graduate engineer of class 2020.
                                            I am a Full stack developer(MERN) currently looking for a job. I always try to conquer
                                            something which challenges me more and  always find something more interesting only when its
                                            complicated. Presently I'm building small websites for local businesses of friends and family.

                                            
                                        </p>
                                        <p class="lead">
                                           I personally admire this Quote 
                                           
                                        </p>
                                        <p class="lead">
                                          
                                           <h5> "EVOLUTION/REVOLUTION BEGINS ONLY IF NEED BECOMES NECCESSITY"</h5>
                                        </p>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                            {/* <button className='resume'>See Resume</button> */}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;
}

export default About;
