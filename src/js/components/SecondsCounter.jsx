import React from "react";

const formatTime = (seconds) => {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
};

const SecondsCounter = ({ seconds }) => {
  const timeString = formatTime(seconds);

  return (
    <div style={{ 
      fontSize: "2rem", 
      textAlign: "center", 
      marginTop: "20px", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      gap: "10px", 
      backgroundColor: "black", 
      padding: "10px", 
      borderRadius: "10px", 
      color: "white"
    }}>
      <i className="fa-solid fa-clock" style={{ fontSize: "2rem" }}></i>
      {timeString.split("").map((char, index) => (
        <span key={index} style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px",
          fontSize: "2rem",
          borderRadius: "5px",
          minWidth: "40px",
          textAlign: "center"
        }}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default SecondsCounter;
