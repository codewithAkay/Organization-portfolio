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
                Discover Our Legal Network
              </h3>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.9', color: '#555' }}>
                At the heart of our platform is a powerful network of seasoned legal professionals,
                each bringing years of expertise across diverse areas of law. Whether you are facing
                a personal legal challenge, navigating a complex corporate dispute, or seeking
                preventive legal advice, we connect you with the right attorney for your specific needs.
                Our mission is to bridge the gap between clients and trusted legal experts, ensuring that
                help is always within reach.
              </p>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.9', color: '#555' }}>
                We understand that legal matters can be overwhelming, and having the right guidance 
                can make all the difference. That’s why we’ve designed our platform to provide a 
                seamless and transparent process — from your first consultation to the resolution of your case.
                With an emphasis on professionalism, confidentiality, and client satisfaction, our network
                serves as your one-stop destination for reliable and effective legal solutions.
              </p>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.9', color: '#555' }}>
                By combining technology with a human-centered approach, we aim to redefine the way 
                legal services are accessed, making them more approachable, efficient, and tailored 
                to your unique circumstances.
              </p>
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
                Innovative Software Development
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
          </div>
        </div>
      </div>

      {/* Team Section */}
      {/* <Team /> */}
    </>
  );
}

export default About;
