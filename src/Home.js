import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import image1 from "./images/back.jpg"
import countdown from 'countdown';
import Type from "typewriter-effect"

function Home() {
    return <>
        <div class="hero route bg-image" id='home' >
            <div class="overlay-itro"></div>
            <div class="hero-content display-table">
                <div class="table-cell">
                    <div class="container">
                        <p class="display-6 color-d">Hello, world!</p>
                        <h1 class="hero-title mb-4">I am Kishore Chandrasekar</h1>
                        <h3 className='hero-subtitle '>
                            <Type onInit={(effect) => {
                                effect
                                    .typeString("Graduate Engineer")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString("Full stack Developer")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString("Freelancer")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString("Designer")
                                    .pauseFor(2000)
                                    .deleteAll()

                                    .start()

                            }}>

                            </Type>
                        </h3>
                        <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p>
                    </div>
                </div>
            </div>
        </div>


    </>
}

export default Home;
