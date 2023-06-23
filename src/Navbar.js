import React from 'react';
import { HashLink as Link } from "react-router-hash-link"

function Navbar() {
    return <>
        <header id="header" class="fixed-top" style={{ backgroundColor: "black" }}>
            <div className="container d-flex align-items-center justify-content-between">

                <h1 class="logo"><Link to="#home">Kishore Chandrasekar</Link></h1>



                <nav id="navbar" className="navbar" >
                    <div className="navbar">
                        <ul>

                            <li className='nav-item'><Link

                                to="#home"

                                smooth


                            >
                                Home
                            </Link></li>
                            <li className='nav-item'><Link

                                to="#about"

                                smooth

                            >
                                About
                            </Link ></li>
                            <li className='nav-item'><Link

                                to="#projects"

                                smooth

                            >
                                Projects
                            </Link></li>
                            <li className='nav-item'><Link

                                to="#contact"

                                smooth

                            >
                                Contact
                            </Link></li>
                            <li className='nav-item'><a

                                href='https://drive.google.com/file/d/114LmDMNzxxvanxqomUk6HoPcG8GvUpFk/view?usp=drivesdk' target="_blank"

                                smooth

                            >
                                Resume
                            </a></li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </div>
                </nav>


            </div>


        </header>
    </>
}

export default Navbar;
