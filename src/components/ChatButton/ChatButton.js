import React from "react";
import "./ChatButton.css";
import { BsChatDotsFill } from "react-icons/bs";

const ChatButton = () => {
  const phoneNumber = "355685555840";
  const businessName = "MASTERTECH";
  const services = "Electrical, Smartphones, Camera, Alarms, Access Control, Audio, IT";
  
  const message = encodeURIComponent(
    `Pershendetje ${businessName}, jam i interesuar per disa nga sherbimet tuaja: ${services}. A mund te me jepni me shume informacion?`
  );

  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="chat-button"
      title="Kontakto MASTERTECH në WhatsApp"
    >
      <BsChatDotsFill className="chat-icon" />
    </a>
  );
};

export default ChatButton;
