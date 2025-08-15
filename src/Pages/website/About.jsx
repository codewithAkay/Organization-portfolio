import React from 'react';

import PageTitle from './include/PageTitle';
import { Helmet } from 'react-helmet';

function About({ title }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <PageTitle title={title} />

      {/* Legal Network Section */}
      <div style={{ padding: '60px 20px', backgroundColor: '#f9f9f9', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '30px' }}>
            
            {/* Left Side Content */}
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h3 style={{ fontSize: '2.5rem', color: '#222', marginBottom: '20px' }}>
                <b>Innovative Software Development</b>
              </h3>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.9', color: '#555' }}>
                Beyond legal expertise, our team is deeply committed to delivering cutting-edge 
                software solutions that empower businesses to operate smarter, faster, and more effectively. 
                We don’t just build applications — we create experiences that resonate with users and 
                drive real-world results. Each project begins with a deep understanding of your goals, 
                challenges, and vision, ensuring that the final product is not just functional but 
                strategically impactful.
              </p>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.9', color: '#555' }}>
                Our development process blends creativity with precision. From designing intuitive 
                user interfaces to implementing secure, scalable backend systems, we take care of 
                every detail. Whether you need a custom web platform, a mobile application, or 
                seamless integration with third-party APIs, we bring together the right tools, 
                frameworks, and expertise to make it happen.
              </p>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.9', color: '#555' }}>
                We embrace emerging technologies — including cloud solutions, AI integrations, and 
                responsive design — to future-proof your software. And our support doesn’t end at launch; 
                we offer continuous maintenance, updates, and enhancements to keep your systems 
                performing at their best.
              </p>
              <ul style={{ fontSize: '1.25rem', lineHeight: '1.9', color: '#555', marginTop: '10px' }}>
                <li>Custom Web & Mobile Development</li>
                <li>UI/UX Design & Prototyping</li>
                <li>Cloud & API Integrations</li>
                <li>Ongoing Support & Maintenance</li>
              </ul>
            </div>

            {/* Right Side Image */}
            <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
              <img
                
                src="/assets/website/images/software2.JPEG"
                alt="Legal Network Overview"
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  borderRadius: '15px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Software Development Section */}
      <div style={{ padding: '60px 20px', backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '30px' }}>
            
            {/* Image */}
            <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
              <img
                src="/assets/website/images/about-img.jpg"
                alt="Software Development"
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  borderRadius: '15px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
              />
            </div>

            {/* Content */}
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h3 style={{ fontSize: '2.5rem', color: '#222', marginBottom: '20px' }}>
                <b>Our Mission</b>
              </h3>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.9', color: '#555' }}>
                 Our mission is to empower businesses through innovative software solutions 
                 that enhance efficiency, drive scalability, and optimize performance. 
              </p>
             
            </div>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h3 style={{ fontSize: '2.5rem', color: '#222', marginBottom: '20px' }}>
                <b>Our Vision</b>
              </h3>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.9', color: '#555' }}>
             Our vision is to become the premier creator of customized software solutions, 
             enabling businesses to excel and adapt in an ever-evolving digital world. 
              </p>
             
            </div>
          </div>
          
        </div>
        
      </div>

      {/* Team Section */}
      {/* <Team /> */}
    </>
  );
}

export default About;
