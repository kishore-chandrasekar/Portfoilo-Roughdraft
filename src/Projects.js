import React from 'react';
import img1 from "./images/project1.png"
import img2 from "./images/project2.jpg"
import img3 from "./images/project3.png"
import img4 from "./images/project4.jpg"
import img5 from "./images/project5.png"
import img6 from "./images/project6.png"
import Link from 'react-router-dom'

function Projects() {
    return <>
            <section id="projects" class="portfolio-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center">
              <h3 class="title-a">
                Portfolio
              </h3>
              <p class="subtitle-a">
               Some of my Projects
              </p>
              <div class="line-mf"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="work-box">
              <a href="https://amazon-clone-ck.netlify.app/" target="_blank" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="work-img">
                  <img src={img1} alt="" class="img-fluid"/>
                </div>
              </a>
              <div class="work-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">A replica of Amazon E-commerce website</h2>
                    <div><a href='https://github.com/kishore-chandrasekar/Amazon-clone' target="_blank"><button className='btn btn-primary sm'>Source code</button></a>
                    </div>
                    <div class="w-more">
                      <span class="w-ctegory">ReactJS+NodeJS+MongoDB</span> 
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <a href=""> <span class="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="work-box">
              <a href="https://serene-bhaskara-1d0c01.netlify.app/" target="_blank" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="work-img">
                  <img src={img2} alt="" class="img-fluid"/>
                </div>
              </a>
              <div class="work-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">A Simple To-Do List</h2>
                    <div><a href='https://github.com/kishore-chandrasekar/TodoList-in-React' target="_blank"><button className='btn btn-primary sm'>Source code</button></a>
                    </div>
                    <div class="w-more">
                    <span class="w-ctegory">ReactJS+BootStrap</span> 
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <a href=""> <span class="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="work-box">
              <a href="https://unruffled-montalcini-33518f.netlify.app/" target="_blank" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="work-img">
                  <img src={img3} alt="" class="img-fluid"/>
                </div>
              </a>
              <div class="work-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">A replica of Netflix</h2>
                    <div><a href='https://github.com/kishore-chandrasekar/Netflix-clone' target="_blank"><button className='btn btn-primary sm'>Source code</button></a>
                    </div>
                    <div class="w-more">
                    <span class="w-ctegory">ReactJS+FireBase+BootStrap</span> 
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <a href="portfolio-details.html"> <span class="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="work-box">
              <a href="https://weatherin-react.netlify.app/" target="_blank" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="work-img">
                  <img src={img4} alt="" class="img-fluid"/>
                </div>
              </a>
              <div class="work-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">WeatherDetails with Location based search</h2>
                    <div><a href='https://github.com/kishore-chandrasekar/weatherApp-react' target="_blank"><button className='btn btn-primary sm'>Source code</button></a>
                    </div>
                    <div class="w-more">
                      <span class="w-ctegory">ReactJS</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <a href="portfolio-details.html"> <span class="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="work-box">
              <a href="https://naughty-heyrovsky-6bf726.netlify.app" target="_blank" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="work-img">
                  <img src={img5} alt="" class="img-fluid"/>
                </div>
              </a>
              <div class="work-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">Income Expense Tracker</h2>
                    <div><a href='https://github.com/kishore-chandrasekar/money-manager-frontend' target="_blank"><button className='btn btn-primary sm'>Source code</button></a>
                    </div>
                    <div class="w-more">
                      <span class="w-ctegory">ReactJS+NodeJS+MongoDB+BootStrap</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <a href="portfolio-details.html"> <span class="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="work-box">
              <a href="https://sad-murdock-f30e1b.netlify.app/" target="_blank" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="work-img">
                  <img src={img6} alt="" class="img-fluid"/>
                </div>
              </a>
              <div class="work-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">Attendance Marking App</h2>
                    <div><a href='https://github.com/kishore-chandrasekar/Attendance-Maintainence-CRM' target="_blank"><button className='btn btn-primary sm'>Source code</button></a>
                    </div>
                    <div class="w-more">
                      <span class="w-ctegory">ReactJS+BootStrap+MockAPI</span> 
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <a href="portfolio-details.html"> <span class="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
         
        </div>
      </div>
    </section>
    </>
}

export default Projects;
