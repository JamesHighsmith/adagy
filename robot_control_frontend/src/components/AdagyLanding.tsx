import React, { useState, useEffect } from 'react';
import '../AdagyLanding.css';

const AdagyLanding = () => {
  const [isReduced, setIsReduced] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsReduced((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="adagy-landing">
      <header className="header">
        <div className="container">
          <img src="https://assets-global.website-files.com/65b7186813bba4915a75b05b/65b719ee007bebd58832d181_Adagy%405x-p-500.png" alt="Adagy Robotics" className="logo" />
          <nav>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
            <a href="#contact" className="cta-button">Contact Us</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
            <h1 className="hero-title">
              <span className="transition-text">{isReduced ? 'Reduce Robot Downtime' : 'Increase Robot Uptime'}</span>
            </h1>
            <p className="hero-subtitle">
              We've rescued robots from Tesla, Boston Dynamics, MIT & Penn
            </p>
            <a href="#contact" className="cta-button">Book a Demo</a>
          </div>
          <div className="hero-visual">
            <img src="path_to_your_image.png" alt="Hero Image" className="hero-image" />
          </div>
          {/* <div className="top-line-block">
            <div className="text-block-4">A team from world class institutions</div>
            <img src="https://assets-global.website-files.com/65b7186813bba4915a75b05b/65b743c85d4a71f80d848440_Screenshot%202024-01-08%20at%209.35.03%20PM.png" loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 1279px) 97vw, 1170px" srcSet="https://assets-global.website-files.com/65b7186813bba4915a75b05b/65b743c85d4a71f80d848440_Screenshot%202024-01-08%20at%209.35.03%20PM-p-500.png 500w, https://assets-global.website-files.com/65b7186813bba4915a75b05b/65b743c85d4a71f80d848440_Screenshot%202024-01-08%20at%209.35.03%20PM-p-800.png 800w, https://assets-global.website-files.com/65b7186813bba4915a75b05b/65b743c85d4a71f80d848440_Screenshot%202024-01-08%20at%209.35.03%20PM-p-1080.png 1080w, https://assets-global.website-files.com/65b7186813bba4915a75b05b/65b743c85d4a71f80d848440_Screenshot%202024-01-08%20at%209.35.03%20PM-p-1600.png 1600w, https://assets-global.website-files.com/65b7186813bba4915a75b05b/65b743c85d4a71f80d848440_Screenshot%202024-01-08%20at%209.35.03%20PM-p-2000.png 2000w, https://assets-global.website-files.com/65b7186813bba4915a75b05b/65b743c85d4a71f80d848440_Screenshot%202024-01-08%20at%209.35.03%20PM-p-2600.png 2600w, https://assets-global.website-files.com/65b7186813bba4915a75b05b/65b743c85d4a71f80d848440_Screenshot%202024-01-08%20at%209.35.03%20PM.png 3064w" alt="Boston Dynamics, Tesla, YCombinator, Penn, MIT logos." className="institution-logos" />
          </div> */}

        {/* <div className="top-line-block">
          <div className="text-block-4">We rescued their robots</div>
          <img src="https://assets-global.website-files.com/65b7186813bba4915a75b05b/65b743c85d4a71f80d848440_Screenshot%202024-01-08%20at%209.35.03%20PM.png"
              loading="lazy"
              sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 1279px) 97vw, 1170px"
              srcSet="https://assets-global.website-files.com/65b7186813bba4915a75b05b/65b743c85d4a71f80d848440_Screenshot%202024-01-08%20at%209.35.03%20PM-p-500.png 500w, https://assets-global.website-files.com/65b7186813bba4915a75b05b/65b743c85d4a71f80d848440_Screenshot%202024-01-08%20at%209.35.03%20PM-p-800.png 800w, https://assets-global.website-files.com/65b7186813bba4915a75b05b/65b743c85d4a71f80d848440_Screenshot%202024-01-08%20at%209.35.03%20PM-p-1080.png 1080w, https://assets-global.website-files.com/65b7186813bba4915a75b05b/65b743c85d4a71f80d848440_Screenshot%202024-01-08%20at%209.35.03%20PM-p-1600.png 1600w, https://assets-global.website-files.com/65b7186813bba4915a75b05b/65b743c85d4a71f80d848440_Screenshot%202024-01-08%20at%209.35.03%20PM-p-2000.png 2000w, https://assets-global.website-files.com/65b7186813bba4915a75b05b/65b743c85d4a71f80d848440_Screenshot%202024-01-08%20at%209.35.03%20PM-p-2600.png 2600w, https://assets-global.website-files.com/65b7186813bba4915a75b05b/65b743c85d4a71f80d848440_Screenshot%202024-01-08%20at%209.35.03%20PM.png 3064w"
              alt="Boston Dynamics, Tesla, YCombinator, Penn, MIT logos."
              className="image-9" />
          <div className="text-block-4">Maybe it's time we rescued yours</div>
        </div> */}
      </section>


      <section id="features" className="features">
        <div className="container">
          <h2>Why Choose Adagy?</h2>
          <div className="feature-grid">
            {[
              { title: "Expert Teleoperators", description: "Trained professionals ready to assist your robots 24/7" },
              { title: "Cloud-Based Solution", description: "Seamless integration with your existing infrastructure" },
              { title: "Quick Resolution", description: "Minimize downtime with rapid remote interventions" },
              { title: "Performance Analytics", description: "Gain insights to improve your robot's autonomy" },
              { title: "Secure Operations", description: "Industry-leading security protocols to protect your data" },
              { title: "Easy Integration", description: "Simple API for quick implementation into your systems" },
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="https://assets-global.website-files.com/65b7186813bba4915a75b05b/65b740485525915bb04563c2_Screenshot%20from%202024-01-28%2022-05-28.png" alt="Ros Shinkle" />
              <h3>Ros Shinkle</h3>
              <p>Co-Founder & CEO</p>
              <p>Former Staff Robotics Engineer at Boston Dynamics</p>
            </div>
            <div className="team-member">
              <img src="https://assets-global.website-files.com/65b7186813bba4915a75b05b/65b740470b4aeb47894ffb74_Screenshot%20from%202024-01-28%2022-05-00.png" alt="Kathleen Brandes" />
              <h3>Kathleen Brandes</h3>
              <p>Co-Founder & CTO</p>
              <p>Former Senior Machine Learning Engineer at Tesla</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {[
              { question: "How does an Adagy rescue work?", answer: "When a robot fails, it makes a request to Adagy via our API. Adagy routes the distress call to a trained robot operator in our call center. The Adagy operator analyzes the failure, takes control of the robot, and remotely drives the robot back to a stable state, and then resume autonomous operation." },
              { question: "Will using Adagy complicate my customers' IT requirements?", answer: "We are pursuing SOC2 compliance today. And we'll guarantee a 1 day turnaround time for IT audits by new customers." },
              { question: "Will I know when Adagy takes control of the robot in my facility?", answer: "Adagy operators notify the site owner when they've taken control. Adagy operators also prepare failure summaries after the fact." },
              // Add more FAQ items here
            ].map((item, index) => (
              <div key={index} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Ready to Revolutionize Your Robot Operations?</h2>
          <p>Get in touch with us to schedule a demo or learn more about how Adagy can help your business.</p>
          <a href="mailto:contact@adagyrobotics.com" className="cta-button">Contact Us</a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <img src="https://assets-global.website-files.com/65b7186813bba4915a75b05b/65b719ee007bebd58832d181_Adagy%405x-p-500.png" alt="Adagy Robotics" className="logo" />
            <nav>
              <a href="#features">Features</a>
              <a href="#about">About</a>
              <a href="#faq">FAQ</a>
            </nav>
            <div className="social-links">
              <a href="https://linkedin.com/company/adagy-robotics" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com/adagyrobotics" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
          <p className="copyright">© 2024 Adagy Robotics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AdagyLanding;
