import "../css/contact.css";
import React, { useState } from "react";
import Mail from "../img/mail.png";
import Whatsapp from "../img/whatsapp.png";
import Phone from "../img/phone.png";
import { userMessage } from "../Api/userMessageAPI";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isToast, setIsToast] = useState(false);
  const [loader, setLoader] = useState(false);

  const divStyle = {
    color: "green",
  };

  const onChangeData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      userMessage(formData).then((res) => {
        if (res.status === 201) {
          setIsToast(true);
          setTimeout(() => {
            setIsToast(false);
          }, 3000);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setLoader(false);
        } else {
          //toast("Data Fetching Failed!");
          console.log("Data Saving Failed");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact">
      <br />
      <br />
      <h1>Contact Me</h1>
      <h5>Get in touch</h5>

      <div className="sub_contact">
        <div className="sub_sub_contact">
          <br /> <br />
          <h3>Talk to me</h3>
          <div className="sub_sub_sub_contact">
            <img src={Mail} alt="mail" />
            <h4>Email</h4>
            <h4>shmail.21.2020@gmail.com</h4>
            <a href="#contactviascroll">Write me &rarr;</a>
          </div>
          <div className="sub_sub_sub_contact">
            <img src={Whatsapp} alt="mail" />
            <h4>Whatsapp</h4>
            <h4>xxxxx xxxxx</h4>
            <a href="#contactviascroll">Write me &rarr;</a>
          </div>
          <div className="sub_sub_sub_contact">
            <img src={Phone} alt="mail" />
            <h4>Phone call</h4>
            <h4>xxxxx xxxxx</h4>
            <a href="#contactviascroll">Write me &rarr;</a>
          </div>
        </div>

        <div className="sub_sub_contact1" id="contactviascroll">
          <br /> <br />
          <h3>
            Write me your message<span id="drk_blue">!</span>
          </h3>
          {isToast ? (
            <p style={divStyle}>
              {" "}
              <center>
                <b>Message Saved !</b>
              </center>{" "}
            </p>
          ) : null}
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name..."
            onChange={onChangeData}
            value={formData.name}
          />
          <br />
          <input
            type="text"
            name="email"
            placeholder="Enter Your email..."
            onChange={onChangeData}
            value={formData.email}
          />
          <br />
          <textarea
            name="message"
            placeholder="Enter Your message..."
            onChange={onChangeData}
            value={formData.message}
          />
          <br />
          {loader ? (
            <input type="submit" value="Submitting..." onClick={submitHandle} />
          ) : (
            <input type="submit" onClick={submitHandle} />
          )}
        </div>
      </div>
    </div>
  );
}
