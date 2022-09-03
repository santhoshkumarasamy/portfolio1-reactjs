import "./contact.css";
import { IoMailUnreadOutline } from "react-icons/io5";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
const Contact = ({ setActiveNav}) => {
  const form = useRef();
  const submit = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <section id="contact" onMouseEnter={()=> setActiveNav('#contact')}>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <IoMailUnreadOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>santhoshkumarkumarasamy850@gmail.com</h5>
            <a
              href="mailto:santhoshkumarkumarasamy850@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Santhosh</h5>
            <a href="https://m.me/santhoshksk" target="_blank" rel="noreferrer">
              {" "}
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>xxxxxxxxxx</h5>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
              {" "}
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={submit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
