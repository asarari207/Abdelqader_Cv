import React from 'react';
import './main.css';

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="profile-section">
               
                <h1 className="name">Abdelqader Sarari</h1>
                <h2 className="title">Software Developer</h2>
                <p className="location">Ramallah, Palestine</p>
                <div className="contact-links">
                    <a href="mailto:pss.abedq@outlook.com">pss.abedq@outlook.com</a> | 
                    <a href="tel:+970594167428">+970594167428</a> | 
                    <a href="https://www.linkedin.com/in/abd-al-qader-sarari-a41538188/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                </div>
            </div>
            
            <div className="content-section">
                <section>
                    <h3>Experience</h3>
                    <div className="entry">
                        <h4>Software Developer</h4>
                        <p>Jawwal -- Ramallah, PS | 2023 – 2024</p>
                        <ul>
                            <li>Build and develop network management system from scratch using ASP, Node, React, Python, etc.</li>
                        </ul>
                    </div>
                    <div className="entry">
                        <h4>Frontend Engineer, Intern</h4>
                        <p>GSG -- Nablus, PS | 2022</p>
                        <ul>
                            <li>React, HTML, CSS, JS, Git, GitHub training</li>
                        </ul>
                    </div>
                    <div className="entry">
                        <h4>Network Operations Center</h4>
                        <p>Jawwal -- Ramallah, PS | 2020 – 2022</p>
                        <ul>
                            <li>Network monitoring</li>
                            <li>Complaints handling</li>
                            <li>Write all types of network reports</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h3>Education</h3>
                    <div className="entry">
                        <h4>Qualify LTD UK</h4>
                        <p>High National Certificate, Networking - IT | 2021 – 2022</p>
                    </div>
                    <div className="entry">
                        <h4>Modern University College</h4>
                        <p>Academic Diploma, Computerized IT | 2018 – 2020</p>
                    </div>
                </section>

                <section>
                    <h3>Training</h3>
                    <div className="entry">
                        <h4>Docker & Kubernetes</h4>
                        <p>GSG | 2023</p>
                    </div>
                    <div className="entry">
                        <h4>Google Cloud Digital Leader & DevOps</h4>
                        <p>KodeKloud | 2023</p>
                    </div>
                    <div className="entry">
                        <h4>Redhat Certified Engineer</h4>
                        <p>Experts | 2021</p>
                    </div>
                    <div className="entry">
                        <h4>CCNA</h4>
                        <p>Experts | 2021</p>
                    </div>
                </section>

                <section>
                    <h3>Skills</h3>
                    <ul>
                        <li>ASP Core, React.js, Node.js, Kubernetes, Docker</li>
                        <li>Linux server management</li>
                        <li>SQL and NoSQL databases</li>
                        <li>Google Cloud Platform (GCP)</li>
                        <li>Python</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Portfolio;
