import React from "react";

const formatTime = (seconds) => {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
};

class SecondsCounter extends React.Component {
  render() {
    return (
      <div style={{ fontSize: '40px', textAlign: 'center', marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', backgroundColor: 'black', padding: '10px', borderRadius: '10px', color: 'white' }}>
        <i className="fa-solid fa-clock"></i>
        {this.props.seconds.toString().padStart(6, '0').split('').map((digit, index) => (
          <div key={index} style={{ backgroundColor: 'black', color: 'white', padding: '10px 15px', borderRadius: '5px', fontSize: '40px' }}>
            {digit}
          </div>
        ))}
      </div>
    );
  }
}

export default SecondsCounter;
