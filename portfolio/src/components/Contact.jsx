import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Construct the email body
    const body = `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Subject: ${subject}
 
      Message:
      ${message}
    `;

    // Send the email using the user's default email client
    window.location.href = `mailto:mr.abuellil@gmail.com
?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={handleNameChange}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="tel"
            placeholder="Mobile Number"
            value={phone}
            onChange={handlePhoneChange}
          />
          <input
            type="text"
            placeholder="Email Subject"
            value={subject}
            onChange={handleSubjectChange}
            required
          />
        </div>
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
          value={message}
          onChange={handleMessageChange}
          required
        ></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
}

export default Contact;
