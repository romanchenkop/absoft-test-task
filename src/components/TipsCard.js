import React from 'react';
import Popup from 'reactjs-popup';
import '../styles/App.css';

const Card = () => {
  return (
    <div className="card">
      <div className="content">
        Username: Pavel <br />,
        Password: ABsoft,
      </div>
    </div >
  );
}

const TipsCard = () => (
  <div className="wrapper" >
    <Popup
      trigger={<button
        style={{ bottom: "35px" }}
        className="btn-floating btn-large waves-effect waves-light pink right">
        <i className="material-icons">add</i>
      </button>}
      position="bottom center"
      on="click"
    >
      <Card />
    </Popup>
  </div >
);

export default TipsCard;