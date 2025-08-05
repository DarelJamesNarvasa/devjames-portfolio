// import logo from './logo.svg';
import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'devicon/devicon.min.css';

import programmingLogo from './assets/logo/programming.png';
import profile from './assets/images/PROFILE.png';

import video from './assets/videos/background.mp4';
import googleAppScript from './assets/logo/google-apps-script.png';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import explorePage from './components/page_explore';

function App() {
  return (
    <div className="App">
      <div className="flex flex-col min-h-screen bg-white text-black">
        <header className="sticky-top z-50 w-100 bg-white border-bottom shadow-sm py-3">
          <nav className="navbar navbar-expand-lg">
            <div className="container d-flex justify-content-between align-items-center">
              <a className="navbar-brand d-flex align-items-center fw-bold text-black" href="#">
                <img src={programmingLogo} alt="DevJames Logo" width="32" height="32" className="me-2" />
                DevJames
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav align-items-lg-center gap-lg-2">
                  <li className="nav-item">
                    <a className="nav-link text-secondary fw-semibold px-3" href="#home">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-secondary fw-semibold px-3" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-secondary fw-semibold px-3" href="#experience">Experience</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-secondary fw-semibold px-3" href="#project">Projects</a>
                  </li>
                  <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                    <a className="btn btn-dark rounded-pill px-4 py-2 fw-semibold" href="#contact">Contact Me</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main>
          <section id="home" className="position-relative d-flex align-items-center py-5" style={{ minHeight: "100vh", overflow: "hidden" }}>
            <video autoPlay muted loop playsInline className="position-absolute w-100 h-100 object-fit-cover bg-video" style={{ zIndex: 1 }}>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="container" style={{ zIndex: 2 }}>
              <div className="row align-items-center">
                <div className="col-md-5 mb-4 text-center">
                  <img src={profile} alt="Darel James" className="img-fluid" width="500" height="500" />
                </div>
                <div className="col-md-7 text-black">
                  <h2 className="fw-bold">Hello, I am Darel James</h2>
                  <p className="lead">
                    A passionate hardware and software developer and designer dedicated to crafting clean, user-friendly websites that deliver results. Let me help bring your ideas to life!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="d-flex align-items-center py-5" style={{ minHeight: "100vh" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center text-black">
                        <h2 className="fw-bold mb-4">About Me</h2>
                        <p className="lead">
                            I’m <strong>Darel James Narvasa</strong>, a passionate <strong>robotics, Internet of Things (IoT), and web developer</strong> dedicated to building clean, responsive, user-friendly websites and IoT solution. 
                        </p>
                        <p>
                            My focus is on turning ideas into functional and visually appealing digital experiences using technologies like HTML, CSS, JavaScript, and Bootstrap. I enjoy the process of solving problems through design and development.
                        </p>
                        <p>
                            Outside of web development, I’m always exploring new tools and trends in tech, aiming to continuously grow as a creator and developer.
                        </p>
                    </div>
                </div>
                <div className="justify-content-center mt-1 text-center">
                    <a className="btn btn-dark rounded-pill px-4 py-2 fw-semibold explore-btn" href="#">Click for More!</a>
                </div>

                <div className="row mt-5">
                    <div className="col text-center">
                        <h3 className="fw-bold mb-4">Tech Stack</h3>
                    </div>
                </div>

                <div className="skills-scroll-wrapper overflow-hidden">
                    <div className="skills-scroll d-flex align-items-center">

                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-html5-plain colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">HTML5</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-css3-plain colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">CSS3</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-javascript-plain colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">JavaScript</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-bootstrap-plain colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">Bootstrap</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-python-plain colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">Python</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-cplusplus-plain colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">C++</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-arduino-plain colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">Arduino</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-raspberrypi-line colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">Raspberry Pi</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-mysql-plain colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">MySQL</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-flutter-plain colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">Flutter</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-git-plain colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">Git</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-github-original colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">GitHub</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-php-plain colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">PHP</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                          <img src={googleAppScript} alt="Google Apps Script" width="28" height="28" />
                            <p className="mt-2 mb-0">Apps Script</p>
                        </div>

                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-html5-plain colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">HTML5</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-css3-plain colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">CSS3</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-javascript-plain colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">JavaScript</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-bootstrap-plain colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">Bootstrap</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-python-plain colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">Python</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-cplusplus-plain colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">C++</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-arduino-plain colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">Arduino</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-raspberrypi-line colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">Raspberry Pi</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-mysql-plain colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">MySQL</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-flutter-plain colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">Flutter</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-git-plain colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">Git</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-github-original colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">GitHub</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <i className="devicon-php-plain colored" style={{ fontSize: 28 }}></i>
                            <p className="mt-2 mb-0">PHP</p>
                        </div>
                        <div className="skill-icon text-center mx-3">
                            <img src={googleAppScript} alt="Google Apps Script" style={{ width: 28, height: 28 }} />
                            <p className="mt-2 mb-0">Apps Script</p>
                        </div>
                    </div>
                </div>
            </div>
          </section>

          <section id="experience" className="position-relative d-flex align-items-center py-5 bg-light" style={{ minHeight: "100vh", overflow: "hidden" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-black">
                        <h2 className="fw-bold mb-4 text-center">Experience</h2>

                        <div className="mb-4">
                            <h5 className="fw-bold mb-1">Software Engineer Intern - AboitizFoods</h5>
                            <p className="text-muted mb-2">January 2025 – June 2025</p>
                            <ul className="ps-3">
                                <li>Developed an automation application to streamline internal workflows, reducing manual effort and improving operational efficiency.</li>
                                <li>Collaborated with a team of developers to design, implement, and test scalable software components.</li>
                                <li>Utilized Google Apps Script, JavaScript, HTML/CSS, Python, MySQL, and Git for version control.</li>
                                <li>Trained in Product Ownership and Agile methodologies to enhance collaboration and delivery within cross-functional teams.</li>
                            </ul>
                        </div>

                
                        <div className="mb-4">
                            <h5 className="fw-bold mb-1">DOST NSTW Mobile Application</h5>
                            <p className="text-muted mb-2">August 2024 – November 2024</p>
                            <ul className="ps-3">
                                <li>Developed a mobile app for Android that lets users select regions and provinces in the Philippines to view and play videos showcasing DOST projects in those areas.</li>
                                <li>Completed this project-based contract on time and within the client’s specifications, delivering high-performance and user-friendly functionality.</li>
                                <li>Served as a full-stack developer, responsible for the system's front-end and back-end functionality.</li>
                                <li>DOST NSTW Mobile Application Demonstration: <a href="https://tinyurl.com/43k6xx65" target="_blank" rel="noopener">Click me to open!</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </section>

          <section id="project" className="position-relative d-flex align-items-center py-5" style={{ minHeight: "100vh", overflow: "hidden" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-black">
                        <h2 className="fw-bold mb-4 text-center">Projects</h2>
                        <div className="mb-4">
                            <h5 className="fw-bold mb-1">LGU Weather Monitoring System and Mobile App Dashboard</h5>
                            <ul className="ps-3">
                                <li>Built a weather station monitoring system using the APRS Weather Station SensorKit SEN0186 and an ESP32 microcontroller to collect data on wind speed/direction, temperature, rain, air pressure, and humidity.</li>
                                <li>Developed a mobile dashboard application using Flutter for real-time monitoring and visualization of sensor data.</li>
                                <li>Integrated Firebase Realtime Database to enable communication between the ESP32 and the mobile app, ensuring live data updates.</li>
                                <li>GitHub Repository: <a href="https://tinyurl.com/2r8w8jzj" target="_blank" rel="noopener">Click me to open!</a> </li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h5 className="fw-bold mb-1">IoT PUV Real-Time Monitoring System</h5>
                            <ul className="ps-3">
                                <li>Designed and developed an IoT-based PUV Real-Time Monitoring System integrating attendance, GPS location tracking, and monitoring using Arduino and ESP32 microcontrollers.</li>
                                <li>Implemented RFID and GPS modules for seamless data capture, with reliable communication via the MQTT protocol.</li>
                                <li>Built a full-stack web application using HTML, CSS, JavaScript, Python (Flask), and SQLAlchemy for real-time data processing, storage, and visualization.</li>
                                <li>GitHub Repository: <a href="https://tinyurl.com/3evh2npc" target="_blank" rel="noopener">Click me to open!</a> </li>
                            </ul>
                        </div>
                        
                        <div className="justify-content-center mt-1 text-center">
                            <a className="btn btn-dark rounded-pill px-4 py-2 fw-semibold explore-btn" href="">Click for More!</a>
                        </div>
                    </div>
                </div>
            </div>
          </section>

          <section id="contact" className="position-relative d-flex align-items-center py-5 bg-light" style={{ minHeight: "100vh", overflow: "hidden" }}>
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-8 text-black">
                    <h2 className="fw-bold mb-4 text-center">Contact Me</h2>
                    <p className="text-center mb-4">Feel free to reach out for collaborations, questions, or just to say hello!</p>
                    
                    <form id="contact-form">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" required />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" required />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
                    </div>
                    

                    <input type="hidden" name="time" id="time" />

                    <button type="submit" className="btn btn-dark rounded-pill px-4 py-2 fw-semibold">Send Message</button>
                    </form>
                </div>
                </div>
            </div>
          </section>
        </main>

        <footer id="contact" className="bg-black text-white py-5 mt-auto">
          <div className="container">
              <div className="row row-cols-1 row-cols-md-4 g-4">
              <div className="col">
                  <h5 className="fw-bold">About DevJames</h5>
                  <p className="text-light">
                  I'm about recognizing the skills you've worked hard to gain, in a way that's accessible to everyone.
                  </p>
              </div>
              

              <div className="col">
                  <h5 className="fw-bold">Quick Links</h5>
                  <ul className="list-unstyled">
                    <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
                    <li><a href="#about" className="text-light text-decoration-none">About</a></li>
                    <li><a href="#services" className="text-light text-decoration-none">Services</a></li>
                    {/* <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li> */}
                  </ul>
              </div>
      
              <div className="col">
                  <h5 className="fw-bold">Legal</h5>
                  <ul className="list-unstyled">
                  <li><a href="#" className="text-light text-decoration-none">Terms of Service</a></li>
                  <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
                  <li><a href="#" className="text-light text-decoration-none">Cookie Policy</a></li>
                  </ul>
              </div>
              
            
              <div className="col">
                  <h5 className="fw-bold">Connect</h5>
                  <div className="d-flex gap-3">
                  <a href="https://www.linkedin.com/in/darel-james-narvasa-b61a59289/" className="text-light fs-5" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://github.com/DarelJamesNarvasa" className="text-light fs-5" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="https://discord.com/users/deon2186" className="text-light fs-5" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-discord"></i>
                  </a>
                  </div>
              </div>
              </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
