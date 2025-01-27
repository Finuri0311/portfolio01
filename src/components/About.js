import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>About Me</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">Who Am I?</h4>
            <p>
              I'm a student from Lampung, Indonesia, specializing in data science and web development.
              Currently, I'm teaching Informatics at SMP Babunnajah while developing advanced skills
              in IT and participating in projects like SIGPetaKotaGorontalo.
            </p>
          </div>
          <div className="title">
            <h3>My Skills</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">Technical Skills</h4>
            <p>Python, R, PHP, SQL, JavaScript, Laravel, Tableau, TensorFlow, and more.</p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Soft Skills</h4>
            <p>Time management, effective communication, and problem-solving.</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
