import { Link } from "react-router-dom"
import Team from "./include/Team"
import { Helmet } from "react-helmet"
import { useContext } from "react"
import { Store } from "../../Utils/Store"

function Home() {
    const { state } = useContext(Store)
    const { ContactInfo } = state
    return (
        <>
            <Helmet><title>Home</title></Helmet>

            <div id="home2" className="parallax-section">
                <div className="container">
                    <div className="slide-text">
                        <h3>
                            What we can do?{" "}
                            <Link
                                to="#"
                                className="typewrite"
                                data-period={2000}
                                data-type='[ "Web Development", "Mobile Apps", "AI Solutions", "UI/UX Design", "SEO Optimization" ]'
                            >
                                <span className="wrap">Web</span>
                            </Link>{" "}
                        </h3>
                        <h1>Welcome to Software Network</h1>
                        <p>
                            Welcome to our Software & Development Network — a hub of innovation, collaboration, and technology excellence. We connect you with experienced developers, designers, and IT professionals committed to building powerful, scalable, and user-centric software solutions.
                        </p>

                        <Link to="/contact" className="btn btn-default section-btn">
                            Get Started
                        </Link>{" "}
                    </div>
                </div>
            </div>

            <div className="howitwrap" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="/assets/website/images/software.WEBP" alt="About Us" />
                        </div>
                        <div className="col-md-8">
                            <div className="stcontent">
                                <div className="section-title">
                                    <h3>
                                        Welcome to <span>Software &amp; Development Network</span>
                                    </h3>
                                    <p>
                                        We connect you with skilled software professionals dedicated to delivering innovative,
                                        reliable, and efficient digital solutions. Whether you need web development, mobile apps,
                                        AI models, or custom software, our team turns ideas into reality and helps your business
                                        thrive in the digital era.
                                    </p>
                                </div>
                                <ul className="howlist">
                                    <li>
                                        <div className="howbox">
                                            <div className="iconcircle">
                                                <i className="fa fa-code" aria-hidden="true"></i>
                                            </div>
                                            <h4>Custom Software Development</h4>
                                            <p>
                                                From concept to deployment, we create tailor-made software solutions
                                                designed to meet your specific business needs and drive efficiency.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="howbox">
                                            <div className="iconcircle">
                                                <i className="fa fa-mobile" aria-hidden="true"></i>
                                            </div>
                                            <h4>Mobile App Solutions</h4>
                                            <p>
                                                We design and develop intuitive, high-performance mobile apps
                                                for both Android and iOS, helping you engage your audience anywhere.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="howbox">
                                            <div className="iconcircle">
                                                <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                                            </div>
                                            <h4>Innovative Digital Strategies</h4>
                                            <p>
                                                Our experts leverage cutting-edge technology to create solutions
                                                that enhance your brand’s visibility and transform your business digitally.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           {/* Modern Premium Services Section */}
<div
  id="practicearea"
  style={{
    padding: '80px 0',
    backgroundColor: '#f4f7fa',
    fontFamily: 'Arial, sans-serif',
  }}
>
  <div className="container">
    {/* Section Title */}
    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
      <h3
        style={{
          fontSize: '2.8rem',
          fontWeight: '800',
          marginBottom: '15px',
          color: '#1a1a1a',
        }}
      >
        Our <span style={{ color: '#ff0800ff' }}>Services</span>
      </h3>
      <p
        style={{
          color: '#555',
          fontSize: '2rem',
          maxWidth: '720px',
          margin: '0 auto',
        }}
      >
        We combine innovation, technology, and creativity to deliver high-end
        software solutions that empower businesses worldwide.
      </p>
    </div>

    {/* Services Grid */}
    <div className="row">
      {[
        { title: 'Software Development', img: '/assets/website/images/software.WEBP', desc: 'Responsive, modern websites built with the latest technologies to help your business grow online.', icon: 'fa fa-code' },
        { title: 'Mobile App Development', img: '/assets/website/images/mobile.jpg', desc: 'Engaging, feature-rich mobile applications for iOS and Android platforms.', icon: 'fa fa-mobile' },
        { title: 'UI/UX Design', img: '/assets/website/images/design.jpg', desc: 'Beautiful, user-friendly designs that create seamless digital experiences.', icon: 'fa fa-paint-brush' },
        { title: 'AI Solutions', img: '/assets/website/images/ai.jpg', desc: 'Intelligent AI models to automate processes, predict trends, and improve decision-making.', icon: 'fa fa-brain' },
        { title: 'Graphic Designing', img: '/assets/website/images/graphic.jpg', desc: 'Creative visuals and branding materials to make your business stand out.', icon: 'fa fa-pencil-ruler' },
        { title: 'SEO Optimization', img: '/assets/website/images/seo.jpg', desc: 'Boost your online presence with keyword optimization, technical SEO, and content strategy.', icon: 'fa fa-search' },
      ].map((service, index) => (
        <div className="col-md-4 col-sm-6" key={index} style={{ marginBottom: '80px' }}>
          <div
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              backgroundColor: '#fff',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
            }}
          >
            {/* Image with Overlay */}
            <div style={{ position: 'relative', height: '250px' }}>
              <img
                src={service.img}
                alt={service.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '0%',
                  height: '100%',
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
                }}
              ></div>

              {/* Icon Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  backgroundColor: '#ff4b4b',
                  color: '#fff',
                  padding: '12px',
                  borderRadius: '50%',
                  fontSize: '1.2rem',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                }}
              >
                <i className={service.icon}></i>
              </div>
            </div>
            <div style={{ padding: '25px', textAlign: 'center' }}>
              <h4
                style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  color: '#1a1a1a',
                }}
              >
                {service.title}
              </h4>
              <p style={{ fontSize: '1.3rem', color: '#555', lineHeight: '1.6' }}>
                {service.desc}
              </p>
            </div>

            {/* Content */}
            
          </div>
        </div>
      ))}
    </div>
     <div className="parallax-section" style={{ backgroundColor: '#f8f9fa', padding: '60px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <div className="section-title">
                                <h3>Ready to Build Your Next Project?</h3>
                                <p style={{ fontSize: '18px', marginBottom: '30px' }}>
                                    Work with our expert developers, designers, and strategists to create powerful digital solutions.
                                </p>
                                <div style={{ marginTop: '30px' }}>
                                    
                                    <Link to="/contact" className="btn btn-outline-primary btn-lg">
                                        <i className="fa fa-file-text-o" aria-hidden="true"></i> Get a Free Quote
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <Team />

            <div className="taglinewrap">
                <div className="container">
                    <h2>Call Today for a Free Consultation</h2>
                    <p>
                        Get in touch with us today for a free consultation and let our experts help you with your next big project.
                        We provide personalized attention and dedicated support to bring your ideas to life.
                    </p>
                    <Link to="/contact">
                        <i className="fa fa-phone" aria-hidden="true" /> Contact Us Now
                    </Link>
                </div>
            </div>
                </div>
            </div>
  </div>
</div>


            {/* Call to Action */}
           

            
        </>
    )
}

export default Home
