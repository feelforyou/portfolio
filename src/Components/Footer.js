import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <h1>Contact Form</h1>
      <div className="container-contact">
        <label htmlFor="name">name:</label>
        <input id="name" type="text" />
        <label htmlFor="email">email:</label>
        <input id="email" type="email" />
        <label htmlFor="message">message:</label>
        <textarea id="message" name="" cols="30" rows="10"></textarea>
        <button className="btn-primary">SEND</button>
      </div>
    </footer>
  );
};
export default Footer;
