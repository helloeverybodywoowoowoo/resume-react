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
          <p><strong>Email:</strong> akinsadekash@gmail.com <strong> Phone:</strong> (240)-360-7625<strong> Linkedin:</strong> www.linkedin.com/in/kashope-akinsade/<strong> Github:</strong> https://tinyurl.com/5t4y63d3</p>
        </section>
        <section className="resume-section">
          <h2>Professional Summary</h2>
          <p>
            Resourceful and results-driven full-stack JavaScript developer with a strong foundation in data analysis and backend architecture. Known for transforming abstract ideas into intuitive, scalable applications—whether building dynamic React interfaces or architecting secure APIs with Node.js and MongoDB. Recent projects showcase a flair for interactive UI features and persistent data integration, reflecting a balance of creativity and precision.</p>
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <ul>
            <li><strong>University of Maryland, Baltimore County (UMBC):</strong> B.S. in Information Systems (Completed 2022)</li>
            <li><strong>Additional Courses:</strong> MongoDB Integration, TypeScript Deep Dive</li>
          </ul>
        </section>

        <section className="resume-section">
          <h2>Professional Experience</h2>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>Claim Academy – Freelance Developer</strong>
                <span>Feb 2025 – Present</span>
              </div>
              <ul style={{ marginLeft: '2rem' }}>
                <li>Built over 10+ responsive React interfaces with reusable components</li>
                <li>Developed 4 RESTful APIs using Express.js and Node.js</li>
                <li>Integrated MongoDB for dynamic data storage and retrieval</li>
                <li>Implemented user authentication and protected routes</li>
              </ul>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>Stoners Ford Consulting, Inc. – Technical Support Analyst</strong>
                <span>Jan 2025 – Jun 2025</span>
              </div>
              <ul style={{ marginLeft: '2rem' }}>
                <li>Diagnosed and resolved hardware, software, and network issues across end-user systems</li>
                <li>Provided tiered technical assistance via phone, email, and remote tools maintaining a 95% resolution rate within SLA timeframes</li>
                <li>Maintained support documentation and collaborated with IT teams, helping streamline IT workflows and boost system reliability by 15%</li>
              </ul>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>Quality Associates Inc. – Document Prep Specialist</strong>
                <span>Aug 2024 – Dec 2024</span>
              </div>
              <ul style={{ marginLeft: '2rem' }}>
                <li>Scanned, digitized, and organized thousands of documents for accurate data entry</li>
                <li>Used software tools to categorize and index documents, generating processing reports</li>
              </ul>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>MADEL LLC – Data Analyst</strong>
                <span>Feb 2023 – Sep 2023</span>
              </div>
              <ul style={{ marginLeft: '2rem' }}>
                <li>Organized, cleaned, and stored data in relational databases</li>
                <li>Mined data from selected sources for analysis</li>
                <li>Performed basic analytics using MS Power BI and Excel</li>
              </ul>
            </div>

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

        <section className="resume-section">
          <h2>Soft Skills</h2>
          <ul className="skills-list">
            <li>Attention to Detail	</li>
            <li>Communication</li>
            <li>Problem-solving</li>
            <li>Critical Thinking</li>
            <li>Adaptability</li>
            <li>Creativity</li>
          </ul>
        </section>

        <section className="resume-section">
          <h2>Certifications</h2>
          <ul className="skills-list">
            <li>AWS Certified Cloud Practitioner</li>
            <li>AWS Certified SysOps Administrator Associate </li>
          </ul>
        </section>

        {/* <section className="resume-section two-column">
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
        </section> */}

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
