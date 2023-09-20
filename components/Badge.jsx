import React from "react";
import "./Badge.css";
const Badge = ({ icon, message, backgroundColor, textColor }) => {
  return (
    <div
      style={{ backgroundColor: backgroundColor, color: textColor }}
      className='badge'
    >
      {icon} <p>{message}</p>
    </div>
  );
};

export default Badge;
