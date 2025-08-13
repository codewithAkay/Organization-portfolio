import { Helmet } from "react-helmet";
import PageTitle from "./include/PageTitle";
import {  useState } from "react";


function Contact({ title }) {

  

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: ""
    });

    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
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
            message: ""
        });

        // Auto-hide success message after 3 seconds
        setTimeout(() => {
            setSuccessMessage("");
        }, 3000);
    };

    return (
        <>
            <Helmet><title>{title}</title></Helmet>
            <PageTitle title={title} />

            <div id="contact" className="parallax-section">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="section-title">
                        <h3>Get Free Quote</h3>
                        <p>
                            Looking for a personalized estimate? Our team is here to provide you with a free quote tailored to your needs. Contact us today, and let us help you find the best solution.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-now">
                                <div className="contact">
                                    <span><i className="fa fa-home" /></span>
                                    <div className="information">
                                        <strong>Address:</strong>
                                        <p>6xth Road Near Metro station Rawalpindi</p>
                                    </div>
                                </div>
                                <div className="contact">
                                    <span><i className="fa fa-envelope" /></span>
                                    <div className="information">
                                        <strong>Email Address:</strong>
                                        <p>Anasiqba0009@gmail.com</p>
                                    </div>
                                </div>
                                <div className="contact">
                                    <span><i className="fa fa-phone" /></span>
                                    <div className="information">
                                        <strong>Phone No:</strong>
                                        <p>+923137747781</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                            border: "1px solid #c3e6cb"
                                        }}
                                    >
                                        {successMessage}
                                    </div>
                                )}

                                <form id="contact-form" className="row" onSubmit={handleSubmit}>
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
                </div>
            </div>
        </>
    );
}

export default Contact;
