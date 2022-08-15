import React from 'react'

const Navbar = ({changeTheme,currTheme}) => {
    
    const media = window.matchMedia("(max-width: 1180px)");

    const allowToggle = media.matches? "collapse" : ""


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">
                    PORTFOLIO
                    
                    {
                        currTheme ==="light"?
                        <img onClick={changeTheme} src="images/moon.png" alt="moon" width="28px" height="28px" className='ms-2 mb-2'/>
                        :
                        <img onClick={changeTheme} src="images/sun.png" alt="moon" width="28px" height="28px" className='ms-2 mb-2'/>
                    }
                </span>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   
                    {currTheme==='light'?
                     <img src="images/dropdown.png" alt="dropdown" height="35px" width="35px" />
                     :
                     <img src="images/dropdown2.png" alt="dropdown" height="35px" width="35px" />

                    }
                    
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" role='button'>

                        <li className="nav-item d-flex">
                            <i className="fi fi-sr-home mt-2"></i>

                            <a className="nav-link" href="/" >
                                
                              <span data-bs-toggle={allowToggle} data-bs-target="#navbarNav">
                                Home
                              </span>
                            
                            </a>
                        </li>

                        <li className="nav-item d-flex">
                            <i className="fi fi-sr-info  mt-2"></i>

                            <a className="nav-link" href="#about">

                                <span data-bs-toggle={allowToggle} data-bs-target="#navbarNav">
                                   About
                                </span>

                            </a>
                        </li>

                        <li className="nav-item d-flex">
                            <i className="fi fi-sr-head-side-thinking mt-2"></i>

                            <a className="nav-link" href="#tech">
                               
                                <span data-bs-toggle={allowToggle} data-bs-target="#navbarNav">
                                    Tech
                                </span>

                            </a>
                        </li>

                        <li className="nav-item d-flex">
                            <i className="fi fi-sr-edit-alt mt-2"></i>

                            <a className="nav-link" href="#projects">
                             
                                <span data-bs-toggle={allowToggle} data-bs-target="#navbarNav">
                                Projects     
                                </span>

                            </a>
                        </li>

                        <li className="nav-item d-flex">
                            <i className="fi fi-sr-address-book mt-2"></i>

                            <a className="nav-link" href="#contact">
                              
                            <span data-bs-toggle={allowToggle} data-bs-target="#navbarNav">
                                Contact   
                            </span>

                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar