import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="hero">
        <h1>Welcome to Prompt Storage</h1>
        <p>Your one-stop solution for storing and managing prompts for LLMs.</p>
        <div className="cta-buttons">
          <a href="#signup" className="cta-button primary">Sign Up</a>
          <a href="#login" className="cta-button secondary">Login</a>
        </div>
      </section>
      
      <section id="features" className="features">
        <h2>Key Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Organize Prompts</h3>
            <p>Categorize and tag your prompts for easy access.</p>
          </div>
          <div className="feature-item">
            <h3>Collaborate</h3>
            <p>Share prompts with team members and collaborate in real-time.</p>
          </div>
          <div className="feature-item">
            <h3>Version Control</h3>
            <p>Keep track of prompt changes with built-in versioning.</p>
          </div>
        </div>
      </section>
      
      <section id="about" className="about">
        <h2>About Prompt Storage</h2>
        <p>Prompt Storage is designed to help individuals and teams manage their LLM prompts efficiently. Whether you're a content creator, developer, or AI enthusiast, our platform provides the tools you need to organize, optimize, and share your prompts.</p>
      </section>
    </div>
  );
};

export default LandingPage;