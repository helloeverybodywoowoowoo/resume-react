// get a resume css going 
import "./Resume.css";


function Resume() {
  return (
    <main className="resume-wrapper">
      <section className="resume-box">
        <header>
          <h1 className="name">Kashope Akinsade</h1>
          <p className="headline">Full-Stack JavaScript Developer</p>

        </header>
        <section className="contact-info">
          <p><strong>Email:</strong> akinsadekash@gmail.com <strong> Phone:</strong> (240)-360-7625<strong> Github:</strong> https://tinyurl.com/5t4y63d3</p>
        </section>
        <section className="resume-section">
          <h2>Professional Summary</h2>
          <p>
            Full-stack JavaScript developer with 24 weeks of immersive, hands-on training at Claim Academy. Experienced in creating responsive, user-focused applications using modern technologies like React, Node.js, and Express.
          </p>
        </section>

        <section className="resume-section">
          <h2>Technical Skills</h2>
          <ul className="skills-list">
            <li>HTML5 & CSS3 (Flexbox, Semantic Tags)</li>
            <li>JavaScript (ES6+), jQuery, AJAX</li>
            <li>ReactJS & TypeScript</li>
            <li>Node.js, Express.js, MongoDB</li>
            <li>Version Control: Git & GitHub</li>
            <li>RESTful APIs & JSON</li>
          </ul>
        </section>

        <section className="resume-section two-column">
          <div className="column">
            <h2>Education</h2>
            <ul>
              <li><strong>Claim Academy:</strong> Full-Stack JavaScript Bootcamp (24 weeks)</li>
              <li><strong>University of Maryland, Baltimore County (UMBC):</strong> B.S. in Information Systems (2022)</li>
              <li><strong>Additional Courses:</strong> MongoDB Integration, TypeScript Deep Dive</li>
            </ul>
          </div>
          <div className="column">
            <h2>Professional Experience</h2>
            <ul>
              <li><strong>Freelance Developer:</strong> Built React/Express apps with dynamic UI and RESTful APIs</li>
              <li><strong>Quality Associates Inc. - Document Prep Specialists</strong> Prepared, compiled and transfered doccuments for data entry</li>
              <li><strong>MADEL LLC. - Data Analyst </strong> Applied concepts in Statistical Data Analysis and Computer Information Systems to improve reporting </li>
            </ul>
          </div>
        </section>

        {/* <section className="resume-section">
          <h2>Bootcamp Coursework</h2>
          <div className="course-columns">
            <ul>
              <li><strong>Frontend:</strong> HTML, CSS, Bootstrap, Mobile-first Design</li>
              <li><strong>JavaScript:</strong> Functions, Loops, Data Types, Conditions</li>
              <li><strong>ReactJS:</strong> Components, Props, Hooks, API Integration</li>
            </ul>
            <ul>
              <li><strong>Backend:</strong> Node.js, Express, MongoDB</li>
              <li><strong>Projects:</strong> Cloned websites, Responsive apps, Final full-stack build</li>
              <li><strong>Workflow:</strong> Agile, Pair Programming, Deployment Best Practices</li>
            </ul>
          </div>
        </section> */}

        <section className="resume-section">
          <h2>Additional Tools & Tech</h2>
          <ul className="skills-list">
            <li>Sass & Styled Components</li>
            <li>PostgreSQL & AWS</li>
            <li>Linux, Bash & NGINX</li>
            <li>JavaScript Algorithms & Problem Solving</li>
          </ul>
        </section>
      </section>
    </main>
  );
};

export default Resume;
