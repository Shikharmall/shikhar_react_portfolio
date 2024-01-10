import "../css/content.css";
import Shikhar from "../img/download.png";
import Sent from "../img/sent.png";
import React from "react";

import { useNavigate } from "react-router-dom";

export default function Content() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("contact");
  };

  const resumeDownload = () => {
    // Replace 'your-file-url' with the actual URL of the file you want to download
    const fileUrl = 'https://drive.google.com/file/d/1SDJ4zGN0dn7aopKnSSA_SUiRpy8VhoLV/view?usp=sharing';
    
    // Create a link element
    const link = document.createElement('a');
    link.href = fileUrl;
    
    // Specify the filename for the downloaded file
    link.download = 'shikhar_resume.pdf';
    
    // Append the link to the document
    document.body.appendChild(link);
    
    // Trigger the click event to start the download
    link.click();
    
    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <div className="content">
      <div className="sub_content1">
        <h1>Hi,</h1>
        <h1>
          I'am <span id="lgt-blue">Shikhar</span>
        </h1>
        <h1>
          Full Stack Developer<span id="lgt-blue">!</span>
        </h1>
        <br></br>
        <br></br>
        <button onClick={() => goToContact()}>
          <div className="contbtn">
            <p>Contact &nbsp;</p>
            <img src={Sent} alt="sent" />
          </div>
        </button>
        <button onClick={resumeDownload} id="purplecol">
          <div className="contbtn">
            <p>Resume &nbsp;</p>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2a1 1 0 0 1 1 1v10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V3a1 1 0 0 1 1-1zM5 17a1 1 0 0 1 1 1v2h12v-2a1 1 0 1 1 2 0v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
        </button>
      </div>
      <div className="sub_content2">
        <img src={Shikhar} alt="Shikhar" />
      </div>
    </div>
  );
}
