import { Helmet } from "react-helmet";
import PageTitle from "./include/PageTitle";
import { useState } from "react";

function Contact({ title }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.message
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Form submitted:", formData);

    // Show success message at the top
    setSuccessMessage(" Submitted successfully");

    // Clear the form
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });

    // Auto-hide success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <PageTitle title={title} />

      <div id="contact" className="parallax-section">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="section-title">
            <h3>Get Free Quote</h3>
            <p>
              Looking for a personalized estimate? Our team is here to provide
              you with a free quote tailored to your needs. Contact us today,
              and let us help you find the best solution.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="contact-now">
                <div className="contact">
                  <span>
                    <i className="fa fa-home" />
                  </span>
                  <div className="information">
                    <strong>Address:</strong>
                    <p>Noor Mobile Plaza, 6th Road, Rawalpindi</p>
                  </div>
                </div>
                <div className="contact">
                  <span>
                    <i className="fa fa-envelope" />
                  </span>
                  <div className="information">
                    <strong>Email Address:</strong>
                    <p>info@codeova.com</p>
                  </div>
                </div>
                <div className="contact">
                  <span>
                    <i className="fa fa-phone" />
                  </span>
                  <div className="information">
                    <strong>Phone No:</strong>
                    <p>+923137747781</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-8">
              <div className="contact-form">
                {/* Success alert at the top */}
                {successMessage && (
                  <div
                    style={{
                      background: "#d4edda",
                      color: "#155724",
                      padding: "10px",
                      borderRadius: "5px",
                      marginBottom: "15px",
                      border: "1px solid #c3e6cb",
                    }}
                  >
                    {successMessage}
                  </div>
                )}

                <form
                  id="contact-form"
                  className="row"
                  onSubmit={handleSubmit}
                >
                  <div className="col-md-4 col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <textarea
                      className="form-control"
                      rows={5}
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <button
                      id="submit"
                      type="submit"
                      className="form-control"
                      name="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Google Map Section */}
           <div style={{ marginTop: "40px" }}>
  <h3>Our Location</h3>
  <iframe
    title="Noor Mobile Plaza Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0535122078993!2d73.05929347460097!3d33.64350004072511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df956d6c7e4697%3A0x21e4c59e94e95b2!2sNoor%20Mobile%20Plaza!5e0!3m2!1sen!2s!4v1692286769875!5m2!1sen!2s"
    width="100%"
    height="400"
    style={{ border: 0, borderRadius: "8px" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>
      </div>
    </>
  );
}

export default Contact;
