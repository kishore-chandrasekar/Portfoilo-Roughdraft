import React from 'react';
import img1 from "./images/project1.jpg"
import img2 from "./images/project2.jpg"
import img3 from "./images/project3.jpg"

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
              <a href="https://serene-bhaskara-1d0c01.netlify.app/" target="_blank" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="work-img">
                  <img src={img1} alt="" class="img-fluid"/>
                </div>
              </a>
              <div class="work-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">To-Do List app using React</h2>
                    <div class="w-more">
                      <span class="w-ctegory">Web Design</span> / <span class="w-date">14-Nov-2021</span>
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
              <a href="" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="work-img">
                  <img src={img2} alt="" class="img-fluid"/>
                </div>
              </a>
              <div class="work-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">Project2</h2>
                    <div class="w-more">
                      <span class="w-ctegory">Web Design</span> / <span class="w-date">12-Nov-2021</span>
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
              <a href="" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="work-img">
                  <img src={img3} alt="" class="img-fluid"/>
                </div>
              </a>
              <div class="work-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">Project3</h2>
                    <div class="w-more">
                      <span class="w-ctegory">Web Design</span> / <span class="w-date">24-Dec-2021</span>
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
