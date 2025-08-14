import { Helmet } from "react-helmet";
import PageTitle from "./include/PageTitle";
import { useContext, useRef } from "react";
import { Store } from "../../Utils/Store";
import emailjs from "emailjs-com";

function Contact({ title }) {
  const { state } = useContext(Store);
  const { ContactInfo } = state;
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o5oab4u", // ✅ Your Service ID
        "template_4nn5il5",//D
        formRef.current,
        "vpdrnodtSnmKOcAqE" // ✅ Your Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully! ✅");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌: " + error.text);
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <PageTitle title={title} />
      <div className="container">
        <form ref={formRef} onSubmit={sendEmail}>
          <div>
            <label>Name</label>
            <input type="text" name="name" required />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label>Subject</label>
            <input type="text" name="title" required />
          </div>
          <div>
            <label>Message</label>
            <textarea name="message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
